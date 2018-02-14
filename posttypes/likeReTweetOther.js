function findOtherLike(){ 
var Twit = require('twit');
var config = require('../user/config');
var params = require('../user/params');
var userHandel = params.tusername;
var T = new Twit(config);
var botname = params.botsearch;
   

console.log(userHandel + ' search Tweet for ' + botname);

// function to generate a random tweet from results
function ranDom (arr) {  
  var index = Math.floor((Math.random() * 14) + 0);
  return arr[index];
};

T.get('search/tweets', { q: botname, count: 10, result_type: 'newest' }, function(err,data){
    // find tweets
    var tweet = data.statuses;
    var randomTweet = ranDom(tweet);   // pick a random tweet
//  console.log(data);
    // if random tweet exists
    if(typeof randomTweet != 'undefined'){
      // Tell TWITTER to 'favorite'
      T.post('favorites/create', {id: randomTweet.id_str}, function(err, response){
        // if there was an error while 'favorite'
        if(err){
          console.log(userHandel + ' CANNOT like Tweet about ' + botname + '...Error');
        }
        else{
          console.log(userHandel + ' LIKED a Tweet ' + botname + '...Success!');
        }
      });
    }
});
};

module.exports.findOtherLike = findOtherLike;

function findOtherreTweet(){
var Twit = require('twit');
var config = require('../user/config');
var params = require('../user/params');
var userHandel = params.tusername;
var T = new Twit(config);
var botname = params.botsearch;
   
    
var z = Math.floor((Math.random() * 9) + 0);
//console.log('ramdom number' + z);

  T.get('search/tweets', { q: botname, count: 10, result_type: 'newest' }, function(err, data) {
  // if there no errors
    if (!err) {
  // grab ID of tweet to retweet
    var retweetId = data.statuses[(z)].id_str;
    // Tell TWITTER to retweet
    T.post('statuses/retweet/:id', {id: retweetId}, function(err, response) {
    if (response) {
        console.log(userHandel + ' has ReTweeted about ' + botname + '!!!');
    }
    // if there was an error while tweeting
    if (err) {
        console.log(userHandel + ' Something went wrong while RETWEETING about ' + botname + '... Duplication maybe...');
    }
    });
    }
    // if unable to Search a tweet
    else {
      console.log(userHandel + ' Something went wrong while SEARCHING about ' + botname + '...');
    }
});
};
module.exports.findOtherreTweet = findOtherreTweet;
//findOtherreTweet();