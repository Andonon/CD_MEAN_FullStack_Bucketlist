const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname + "/client/dist/")));
app.use(session({secret: 'lkjaslkjlkasjd-98324lkjasd09832k4ljasd90f54',
    resave: false,
    saveUninitialized: true
}));  
app.use(bodyParser.json());

require("./server/config/mongoose.js")
require("./server/config/routes.js")(app);

port = 8000;

app.listen(port, function () {
console.log("Listening on port", port);
})
