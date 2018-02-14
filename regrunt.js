//This Mode Likes, Retweets, Sends Follow Replys, and ReTweets specific other users from Other Follows Reddit longer times

//Requires all our normal functions. 
var likeTweets = require('./posttypes/likeReTweet');
var reTweet = require('./posttypes/likeReTweet');
var followReply = require('./posttypes/followReply');

var findOtherLike = require('./posttypes/likeReTweetOther');
var findOtherreTweet = require('./posttypes/likeReTweetOther');

var redditpost = require('./posttypes/redditpost');
        
var basictweet = require('./posttypes/basictweet');

var humorchoice = require('./posttypes/devhumor');
       
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
//Bot ReTweet Time For Reddit
var reddtime = params.redtwe;
var redtop = params.redtop;
var redbot = params.redbottom;
//Bot Other Like and ReTweet
var otltime = params.otltime;
var otltop = params.otltop;
var otlbot = params.otlbottom;
var orttime = params.orttime;
var orttop = params.orttop;
var ortbot = params.ortbottom;


var l = Math.floor((Math.random() * tltop) + tlbot);
var r = Math.floor((Math.random() * trttop) + trtbot);
 
var oal = Math.floor((Math.random() * otltop) + otlbot);
var oart = Math.floor((Math.random() * orttop) + ortbot);

var rr = Math.floor((Math.random() * redtop) + redbot); 

var ftlt = tlt +l;
var frtt = trt +r;

var otherl = otltime + oal;
var otherrt = orttime + oart;
//console.log(ftlt);
//console.log(frtt);
var redtime = reddtime +rr;

var bt = Math.floor((Math.random() * 25) + 15);
var ht = Math.floor((Math.random() * 35) + 35);

//Define The Functions And Set Intervals
var x = Math.floor((Math.random() *20) + 5);

console.log('-----STARTUP-----');
console.log('--' + time + '---');
console.log('-----' + userHandel + '-----');
console.log('--PARAMS SET TO-- Base Like-ReTweet Time: -' + tlt + '- Base ReTweet Time: -' + trt + '--');
console.log('--PARAMS SET TO-- Base Other Like-ReTweet Time: -' + otltime + '- Base ReTweet Time: -' + orttime + '--');
console.log('--PARAMS SET TO-- Base Reddit ReTweet Time: -' + reddtime + '--');
console.log('--TWEETLIKE Time Set To: ' + ftlt + ' MINUTES--');
console.log('--RETWEET Time Set To: ' + frtt + ' MINUTES--');
console.log('--OTHER TWEETLIKE Time Set To: ' + otherl + ' MINUTES--');
console.log('--OTHER RETWEET Time Set To: ' + otherrt + ' MINUTES--');
console.log('--REDDIT TWEET Time Set To: ' + redtime + ' MINUTES--');
console.log('--BASIC/PICTURE TWEET Time Set To: ' + bt + ' MINUTES--');
console.log('--DEV HUMOR TWEET Time Set To: ' + ht + ' MINUTES--');
console.log('--STARTTIME DELAY Time Set To: ' + x + ' SECONDS--');
console.log('-----LIKE-RETWEET-OTHER LIKE RETWEET-FOLLOW-REPLY-----');
console.log('');


//Run the Follow Stream
followReply.followReply();


setTimeout(function () {   
    like();

setTimeout(function () {
    retweet();
    
setTimeout(function () {
   otherLike();

setTimeout(function () {
    otherreTweet();

setTimeout(function () {
    runreddit();

setTimeout(function () {
    basictptweet();
    
setTimeout(function () {    
    devhumor();
      }, 1000*x);  
      }, 1000*x);      
     }, 1000*x);    
    }, 1000*x);    
   }, 1000*x);    
  }, 1000*x);
 }, 1000*x);
setTimeout(function () {
    newtime();

}, 1000*60*20);

function newtime(){

console.log('--' + time + '---');
};
setInterval(newtime, 1000*60*20);

function like(){
  likeTweets.likeTweets()
   // console.log('likeTweets running');
};
setInterval(like, 1000*60*ftlt);

function retweet(){
  reTweet.reTweet();
   // console.log('reTweet running');
};
setInterval(retweet, 1000*60*frtt);

function otherLike(){
  findOtherLike.findOtherLike();
     
};
setInterval(otherLike, 1000*60*otherl);

function otherreTweet(){
  findOtherreTweet.findOtherreTweet();
   // console.log('reTweet running');
};
setInterval(otherreTweet, 1000*60*otherrt);

function runreddit(){
  redditpost.redditpost(); 
  //console.log('Started A Reddit Tweet');
};
setInterval(runreddit, 1000*60*redtime);

function basictptweet(){
  basictweet.basictweet();
  //console.log('Started A Reddit Tweet');
};
setInterval(basictptweet, 1000*60*bt);

function devhumor(){
  humorchoice.humorchoice();
  //console.log('Started A Reddit Tweet');
};
setInterval(devhumor, 1000*60*ht);

 