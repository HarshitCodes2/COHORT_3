// You have to create a middleware for rate limiting a users request based on their username passed in the header

const express = require('express');
const app = express();

// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {

};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

function numberOfRequestsForUserInc(req, res, next){
    // console.log(req);
    let userId = req.query.user_id;
    // console.log(userId);
    

    if (numberOfRequestsForUser[userId] == undefined){
        numberOfRequestsForUser[userId] = 0;
    }
    numberOfRequestsForUser[userId] += 1;
    
    if(numberOfRequestsForUser[userId] >= 5){
        // console.log(numberOfRequestsForUser[userId]); 
        // console.log("numberOfRequestsForUser[userId]"); 
        res.status(404).json({mission:"failed"});
    }else{
        // console.log("5 or less"); 
        next();
    }

}


app.use(numberOfRequestsForUserInc);

app.get('/user', function(req, res) {

    res.status(200).json({ name: 'john' });
    // res.send("done");
});

app.post('/user', function(req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;

app.listen(3000);