const mongoose = require('mongoose');
const User = mongoose.model('User');
const Bucket = mongoose.model('Bucket');

module.exports = {
    createbucket: function(req, res){  
        let bucket = new Bucket();
        bucket.title = req.body.title;
        bucket.description = req.body.description;
        bucket.taggedUser = req.body.taggedUser;
        bucket.createdBy = req.session.user_id;
                
        // check for the user... does email alread exist in db. Log Them in... else create.
        bucket.save()
            .then((data) => {
                res.json(data)
            })
            .catch((err) =>{
                res.status(500).json(err);
            });
    },
    get_all_users: function(req, res){
        users = User.find({})   
            .then((users) => {
                res.json(users)
            })
            .catch(err => {
                console.log("in get all users catch")
                res.status(500).json(err)
            });
    },
    get_curr_user_buckets: function(req, res){
        buckets = Bucket.find({createdBy: req.session.user_id})   
            .then((data) => {
                console.log("Curr user buckets data: ", data)
                res.json(data)
            })
            .catch(err => {
                console.log("in get curr user buckets catch")
                res.status(500).json(err)
            });
    },
};


