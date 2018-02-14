var Twit = require('twit');
var config = require('../user/config');
//var params = require('../user/params');
var T = new Twit(config);

//Bot Twitter Username
//var userHandel = params.tusername;

// Setting up a user stream
var stream = T.stream('user');

// Anytime someone follows me
stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {

//    var fs = require('fs');
//    var json = JSON.stringify(eventMsg, null, 2);
//    fs.writeFile("tweet.json", json);
    
    var replyto = eventMsg.in_reply_to_screen_name;
    var text = eventMsg.text;
    var from = eventMsg.user.screen_name;
    console.log (replyto + ' ' + from);
    
    if (replyto === 'BuiltbyMikeN') {
        var newtweet =  '@' + from + ' Thanks for the metioning me! Have some #twitterlove and my hopes of #cleancode, #webdev, and #success 4 U!';
       tweetIt(newtweet);
    }
}    

function tweetIt(txt){
var tweet = {
    status: txt
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
    if (err) {
        console.log ("Something went wrong master");
    } else {
        console.log ("It Worked Master I sent your reply and saved your JSON file");
        
}
}
}  