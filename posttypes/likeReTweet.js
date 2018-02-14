function likeTweets(){ 
var Twit = require('twit');
var config = require('../user/config');
var params = require('../user/params');
var T = new Twit(config);
var userHandel = params.tusername;

// function to generate a random search from params
var y = Math.floor((Math.random() * 9) + 0);
//console.log('ramdom number' + y);
var x = params.tsarra[y];
//console.log(userHandel + ' Like Tweet running... looking at tweets about ' + x.q);
var search = x;
// function to generate a random tweet from results
function ranDom (arr) {  
  var index = Math.floor((Math.random() * 14) + 0);
  return arr[index];
};
T.get('search/tweets', search, function(err,data){
    // find tweets
    var tweet = data.statuses;
    var randomTweet = ranDom(tweet);   // pick a random tweet
    // if random tweet exists
    if(typeof randomTweet != 'undefined'){
      // Tell TWITTER to 'favorite'
      T.post('favorites/create', {id: randomTweet.id_str}, function(err, response){
        // if there was an error while 'favorite'
        if(err){
          console.log(userHandel + ' CANNOT like Tweet about ' + x.q + '...Error');
//           var basictweet = require('./basictweet');
//           basictweet.basictweet();
        }
        else{
          console.log(userHandel + ' LIKED a Tweet about ' + x.q + '...Success!');
        }
      });
    }
});
};
module.exports.likeTweets = likeTweets;

function reTweet(){
var Twit = require('twit');
var config = require('../user/config');
var params = require('../user/params');
var T = new Twit(config);
var userHandel = params.tusername;
//console.log(params.tsarra);



var y = Math.floor((Math.random() * 9) + 0);
//console.log('ramdom number' + y);
var z = Math.floor((Math.random() * 14) + 0);
//console.log('ramdom number' + z);
var x = params.tsarra[y];
//console.log(x);
var search = x;

  T.get('search/tweets', search, function(err, data) {
  // if there no errors
    if (!err) {
  // grab ID of tweet to retweet
    var retweetId = data.statuses[(z)].id_str;
    // Tell TWITTER to retweet
    T.post('statuses/retweet/:id', {id: retweetId}, function(err, response) {
    if (response) {
        console.log(userHandel + ' has ReTweeted about ' + x.q + '!!!');
    }
    // if there was an error while tweeting
    if (err) {
        console.log(userHandel + ' Something went wrong while RETWEETING... Duplication maybe...');
//        var basictweet = require('./basictweet');
//        basictweet.basictweet();
    }
    });
    }
    // if unable to Search a tweet
    else {
      console.log(userHandel + ' Something went wrong while SEARCHING...');
    }
});
};
module.exports.reTweet = reTweet;