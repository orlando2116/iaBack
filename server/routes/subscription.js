const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const Subscription = require('../models/subscription');
const app = express();

app.post('/landing/subscriptions', function(req, res) {
     let body = req.body;

    console.log(body);
     let subscription = new Subscription({
         name: body.name,
         email: body.email,
         phone: body.phone,
         rut: body.rut
     });
 
     subscription.save((err, subscriptionDB) => {
         if (err) {
             return res.status(400).json({
                 ok: false,
                 err: {
                     message:err
                 }
             });
         }
         
         res.json({
             ok: true,
             subscription: subscriptionDB
         });
     });
 });

module.exports = app;