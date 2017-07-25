const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    register: function(req, res){  
        var user = new User();
        user.name = req.body.name
        user.email = req.body.email
        
        // check for the user... does email alread exist in db. Log Them in... else create.
         User.findOne({ email: req.body.email })
            .then((data) =>{
                if(data === null){
                    user.save()
                        .then((data)=>{
                            req.session.user_id = data._id;
                            res.json(data)
                        })
                        .catch((err) =>{
                            res.status(500).json(err);
                        });
                } else {
                    user.name = req.body.name; //capture the way the user entered their name today. update.
                    user.update();
                    req.session.user_id = data._id;
                    res.json(data)
                }
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    },
    get_logged_in_user: function(req, res){
        if(req.session.user_id){
            user = User.findOne({_id: req.session.user_id})
                .then(user => res.json(user))
                .catch(err => res.status(500).json(err));
        } else {
        res.json(false);
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        req.redirect('/');
    }
};


