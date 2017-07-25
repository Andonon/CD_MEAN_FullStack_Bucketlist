const mongoose = require('mongoose');
const path = require('path');
const users = require('../controllers/users.js');
const buckets = require('../controllers/buckets.js');

module.exports = function(app) {

    app.post("/register", function(req, res){
        users.register(req, res);
    });
     app.post("/login", function(req, res){
        users.login(req, res);
    });
    app.get('/get_logged_in_user', function(req, res){
        users.get_logged_in_user(req, res);
    });
    app.get('/logout', function(req, res){
        users.logout(req, res);
    });
    app.post('/createbucket', function(req, res){
        buckets.createbucket(req, res);
    });   
    app.get('/get_all_users', function(req, res){
        buckets.get_all_users(req, res);
    });  
    app.get('/get_curr_user_buckets', function(req, res){
        buckets.get_curr_user_buckets(req, res);
    });  


    // This route should be the last route in this file, to ensure non express routes go to Angular.
    // reroutes all traffic routes not listed above to Angualr’s routes.
   app.get('*', (req, res) => {
        res.sendFile(path.resolve('./client/dist/index.html'));
    });
} 

