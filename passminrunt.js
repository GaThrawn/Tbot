//This Mode Just Likes and Retweets and Sends Follow Replys with a added 10 minute delay

//Requires all our normal functions. 
var likeTweets = require('./posttypes/likeReTweet');
var reTweet = require('./posttypes/likeReTweet');
var followReply = require('./posttypes/followReply');

//Where the Basics About the Bot are Stored
var params = require('./user/params');
//Prints the time the bot is started
var time = params.thetime;
//Bot Twitter Username
var userHandel = params.tusername;
//Bot Twitter Like Time and Retweet Times
var tlt = params.tltime;
var trt = params.trttime;
//Bot Like Random Minutes Generator Top and Bottom Number
var tltop = params.tltop;
var tlbot = params.tlbottom;
//Bot ReTweet Random Minutes Generator Top and Bottom Number
var trttop = params.trttop;
var trtbot = params.trtbottom;

//Set Random Minute Variables
var l = Math.floor((Math.random() * tltop) + tlbot);
var r = Math.floor((Math.random() * trttop) + trtbot);

//Add Random Minutes To Set Minutes
var ftlt = tlt +l;
var frtt = trt +r;

//Define The Functions And Set Intervals
var x = Math.floor((Math.random() *4) + 1);

//Log That Everything Is Starting
console.log('-----STARTUP DEAD RUN-----');
console.log('--' + time + '---');
console.log('-----' + userHandel + '-----');
console.log('--PARAMS SET TO-- Base Like Time: -' + tlt + '- Base ReTweet Time: -' + trt + '--');
console.log('--TWEETLIKE Time Set To: ' + ftlt + ' MINUTES--');
console.log('--RETWEET Time Set To: ' + frtt + ' MINUTES--');
console.log('--STARTTIME DELAY Time Set To: ' + x + ' SECONDS--');
console.log('-----LIKE-RETWEET-FOLLOW-REPLY-----');
console.log('');


//Run the Follow Stream
followReply.followReply();

setTimeout(function () {
    like();

setTimeout(function () {   
    retweet();
 
 }, 1000*x);
}, 1000*x);

//Declare The Functions Interval Times To Run Them
function like(){
  likeTweets.likeTweets();
};
setInterval(like, 1000*60*ftlt);

function retweet(){
  reTweet.reTweet();   
};
setInterval(retweet, 1000*60*frtt);
