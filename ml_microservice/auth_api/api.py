from django.contrib.auth import authenticate
from auth_api.models import Tutee, Tutor
from django.http import JsonResponse
from pandas import DataFrame
import os
import json
import random
from rest_framework_jwt.settings import api_settings
import tensorflow as tf
import pandas as pd
import numpy as np
import random 
import matplotlib.pyplot as plt

def generate_JWT(user):
    jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
    jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

    payload = jwt_payload_handler(user)
    token = jwt_encode_handler(payload)

    return token

def train(id):
    ratings = pd.read_csv(os.path.dirname(os.path.abspath(__file__)) + '/data/ratings.csv')
    to_read = pd.read_csv(os.path.dirname(os.path.abspath(__file__)) + '/data/to_read.csv')
    books = pd.read_csv(os.path.dirname(os.path.abspath(__file__)) + '/data/books.csv')
    temp = ratings.sort_values(by=['user_id'], ascending=True)
    ratings = temp.iloc[:200000, :]
    ratings = ratings.reset_index(drop=True)
    ratings['List Index'] = ratings.index
    readers_group = ratings.groupby("user_id")
    
    # Normalize: divide the ratings by 5
    total = []
    for readerID, curReader in readers_group:
        temp = np.zeros(len(ratings))
        for num, book in curReader.iterrows():
            temp[book['List Index']] = book['rating'] / 5.0
        
        total.append(temp)

    random.shuffle(total)
    train = total[:1500]
    valid = total[1500:]

    # hyperparameters
    hiddenUnits = 64 # a power of 2 so as to optimally utilize matrix computations on GPU boards
    visibleUnits = len(ratings)

    # Number of unique books
    vb = tf.placeholder(tf.float32, [visibleUnits])

    # Number of features that we are going to learn
    hb = tf.placeholder(tf.float32, [hiddenUnits])
    W = tf.placeholder(tf.float32, [visibleUnits, hiddenUnits])  # Weight Matrix

    v0 = tf.placeholder("float", [None, visibleUnits])
    _h0 = tf.nn.sigmoid(tf.matmul(v0, W) + hb) # Visible layer activation

    # Gibb's Sampling
    h0 = tf.nn.relu(tf.sign(_h0 - tf.random_uniform(tf.shape(_h0))))

    # Hidden layer activation
    _v1 = tf.nn.sigmoid(tf.matmul(h0, tf.transpose(W)) + vb)  
    v1 = tf.nn.relu(tf.sign(_v1 - tf.random_uniform(tf.shape(_v1))))
    h1 = tf.nn.sigmoid(tf.matmul(v1, W) + hb)

    # Reconstruction
    #....
    # Learning rate
    alpha = 0.6

    # Create the gradients
    w_pos_grad = tf.matmul(tf.transpose(v0), h0)
    w_neg_grad = tf.matmul(tf.transpose(v1), h1)

    # Calculate the Contrastive Divergence to maximize
    CD = (w_pos_grad - w_neg_grad) / tf.to_float(tf.shape(v0)[0])

    # Create methods to update the weights and biases
    update_w = W + alpha * CD
    update_vb = vb + alpha * tf.reduce_mean(v0 - v1, 0)
    update_hb = hb + alpha * tf.reduce_mean(h0 - h1, 0)

    # Set the error function, here we use Mean Absolute Error Function
    err = v0 - v1
    err_sum = tf.reduce_mean(err * err)

    # Current weight
    cur_w = np.random.normal(loc=0, scale=0.01, size=[visibleUnits, hiddenUnits])

    # Current visible unit biases
    cur_vb = np.zeros([visibleUnits], np.float32)

    # Current hidden unit biases
    cur_hb = np.zeros([hiddenUnits], np.float32)

    # Previous weight
    prv_w = np.zeros([visibleUnits, hiddenUnits], np.float32)

    # Previous visible unit biases
    prv_vb = np.zeros([visibleUnits], np.float32)

    # Previous hidden unit biases
    prv_hb = np.zeros([hiddenUnits], np.float32)

    # Running the session
    config = tf.ConfigProto()
    config.gpu_options.allow_growth = True
    sess = tf.Session(config=config)
    sess.run(tf.global_variables_initializer())

    epochs = 60
    batchsize = 100
    errors = []
    energy_train = []
    energy_valid = []

    for i in range(epochs):
        for start, end in zip(range(0, len(train), batchsize), range(batchsize, len(train), batchsize)):
            batch = train[start:end]
            cur_w = sess.run(update_w, feed_dict={
                            v0: batch, W: prv_w, vb: prv_vb, hb: prv_hb})
            cur_vb = sess.run(update_vb, feed_dict={
                            v0: batch, W: prv_w, vb: prv_vb, hb: prv_hb})
            cur_hb = sess.run(update_hb, feed_dict={
                            v0: batch, W: prv_w, vb: prv_vb, hb: prv_hb})
            prv_w = cur_w
            prv_vb = cur_vb
            prv_hb = cur_hb

        energy_train.append(np.mean(free_energy(train, cur_w, cur_vb, cur_hb)))
        energy_valid.append(np.mean(free_energy(valid, cur_w, cur_vb, cur_hb)))

        errors.append(sess.run(err_sum, feed_dict={v0: train, W: cur_w, vb: cur_vb, hb: cur_hb}))

        if i % 10 == 0:
            print("Error in epoch {0} is: {1}".format(i, errors[i]))
    
    inputUser = [train[id]]
    
    # Feeding in the User and Reconstructing the input
    hh0 = tf.nn.sigmoid(tf.matmul(v0, W) + hb)
    vv1 = tf.nn.sigmoid(tf.matmul(hh0, tf.transpose(W)) + vb)
    feed = sess.run(hh0, feed_dict={v0: inputUser, W: prv_w, hb: prv_hb})
    rec = sess.run(vv1, feed_dict={hh0: feed, W: prv_w, vb: prv_vb})

    # Creating recommendation score for books in our data
    ratings["Recommendation Score"] = rec[0]

    # Find the mock user's user_id from the data
    cur_user_id = ratings.iloc[id]['user_id']

    # Find all books the mock user has read before
    read_books = ratings[ratings['user_id'] == cur_user_id]['book_id']

    # converting the pandas series object into a list
    read_books_id = read_books.tolist()

    # getting the book names and authors for the books already read by the user
    read_books_names = []
    read_books_authors = []

    for book in read_books_id:
        read_books_names.append(
            books[books['book_id'] == book]['original_title'].tolist()[0])
        read_books_authors.append(
            books[books['book_id'] == book]['authors'].tolist()[0])
    
    # Find all books the mock user has 'not' read before using the to_read data
    unread_books = to_read[to_read['user_id'] == cur_user_id]['book_id']
    unread_books_id = unread_books.tolist()

    # extract the ratings of all the unread books from ratings dataframe
    unread_with_score = ratings[ratings['book_id'].isin(unread_books_id)]

    # grouping the unread data on book id and taking the mean of the recommendation scores for each book_id
    grouped_unread = unread_with_score.groupby('book_id', as_index=False)['Recommendation Score'].mean()

    # getting the names and authors of the unread books
    unread_books_names = []
    unread_books_authors = []
    unread_books_scores = []
    for book in grouped_unread['book_id']:
        unread_books_names.append(
            books[books['book_id'] == book]['original_title'].tolist()[0])
        unread_books_authors.append(
            books[books['book_id'] == book]['authors'].tolist()[0])
        unread_books_scores.append(
        grouped_unread[grouped_unread['book_id'] == book]['Recommendation Score'].tolist()[0])

    # creating a data frame for unread books with their names, authors and recommendation scores
    unread_books_with_scores = pd.DataFrame({
        'book_name': unread_books_names,
        'book_authors': unread_books_authors,
        'score': unread_books_scores
    })

    # creating a data frame for read books with the names and authors
    read_books_with_names = pd.DataFrame({
        'book_name': read_books_names,
        'book_authors': read_books_authors
    })

    # sort the result in descending order of the recommendation score
    sorted_result = unread_books_with_scores.sort_values(by='score', ascending=False)

    # exporting the read and unread books with scores to csv files
    #read_books_with_names.to_csv('results/read_books_with_names.csv')
    #sorted_result.to_csv('results/unread_books_with_scores.csv')

    return sorted_result.to_json(orient='columns')

def free_energy(v_sample, W, vb, hb):
    ''' Function to compute the free energy '''
    wx_b = np.dot(v_sample, W) + hb
    vbias_term = np.dot(v_sample, vb)
    hidden_term = np.sum(np.log(1 + np.exp(wx_b)), axis = 1)
    return -hidden_term - vbias_term


def get_books(request):
    if request.method == 'GET':
        user_id = random.randint(1,101)
        print('The books recommended to the user are:')
        return JsonResponse({
            'books': train(user_id)
        })
    else:
        print('Hehe')


def register_tutee(request):
    if request.method == 'POST':
        # body is a bytes object, decoded into string, then loaded into dictionary by Python JSON parser
        body = json.loads(request.body.decode('utf-8'))
        username = body.get('username', None)
        email = body.get('email', None)
        password = body.get('password', None)

        if username and email and password:
            user = Tutee.objects.create_user(username, email, password)
            user.save()

            token = generate_JWT(user)

            return JsonResponse({
                'success': True,
                'user': {
                    'username': username,
                    'email': email,
                },
                'token': 'JWT ' + token,
                'msg': 'Successfully created a new tutee'
            })
    
    return JsonResponse({
        'success': False,
        'msg': 'Invalid request made, try again'
    })

def register_tutor(request):
    if request.method == 'POST':
        # body is a bytes object, decoded into string, then loaded into dictionary by Python JSON parser
        body = json.loads(request.body.decode('utf-8'))

        username = body.get('username', None)
        email = body.get('email', None)
        password = body.get('password', None)

        cc_number = body.get('creditCardNumber', None)
        cc_exp_date = body.get('creditCardEXP', None)
        cc_holder_name = body.get('creditCardName', None)
        cc_security_code = body.get('creditCardCode', None)

        address = body.get('address', None)
    
        if username and email and password and cc_number and cc_exp_date and cc_holder_name and cc_security_code and address:
            user = Tutor.objects.create_user(username, email, password)

            user.cc_number = cc_number
            user.cc_exp_date = cc_exp_date
            user.cc_holder_name = cc_holder_name
            user.cc_security_code = cc_security_code

            user.address = address

            user.save()

            token = generate_JWT(user)

            return JsonResponse({
                'success': True,
                'user': {
                    'username': username,
                    'email': email,
                },
                'token': 'JWT ' + token,
                'msg': 'Successfully created a new tutor'
            })
    
    return JsonResponse({
        'success': False,
        'msg': 'Invalid request made, try again'
    })

def login(request):
    if request.method == 'POST':
        body = json.loads(request.body.decode('utf-8'))
        username = body.get('username', None)
        password = body.get('password', None)

        if username and password:
            user = authenticate(username=username, password=password)
            if user is None:
                return JsonResponse({
                    'success': False,
                    'msg': 'Invalid credentials, try again'
                })
            else:
                token = generate_JWT(user)
                
                return JsonResponse({
                    'success': True,
                    'msg': 'User successfully logged in',
                    'token': 'JWT ' + token
                })
    return JsonResponse({
        'success': False,
        'msg': 'Invalid request made, try again'
    })