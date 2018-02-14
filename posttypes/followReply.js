function followReply(){
var params = require('../user/params');
var Twit = require('twit');
var config = require ('../user/config');

var userHandel = params.tusername;
var handel = userHandel.substring(1);
//console.log(handel);    
    
var pre = params.twitxpre;
var post = params.twitxpost;

var T = new Twit(config);
    
//console.log(userHandel + ' TwitterBot is starting...');    
// Setting up a user stream
var stream = T.stream('user');
// Anytime someone follows me
stream.on('follow', followed);

function followed(eventMsg) {
    //console.log('I have detected a Follow event has happend master');
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    var x = pre + screenName + post;  
     
var y = Math.floor((Math.random() *40) + 40);    

setTimeout(function () {

    tweetIt(x);    
}, 1000*y);
}

function tweetIt(txt){
var tweet = {
    status: txt
}
T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
    if (err) {
        console.log (userHandel + ' Somethings up... Did you follow someone??');
    } else {
        console.log (userHandel + ' I sent a reply to a NEW FOLLOWER!!!');
        followers();
  }
 }
};
function followers(){
T.get('followers/ids', { screen_name: 'BuiltbyMikeN' },  function (err, data, response) {
  //console.log(data)
  var myfollows = data.ids;
  var follownum = myfollows.length;
  console.log(userHandel + ' You now have ' + follownum + ' Followers');
  //console.log(myfollows);
});
};
};
module.exports.followReply = followReply;