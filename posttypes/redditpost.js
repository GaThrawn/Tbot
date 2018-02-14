function redditpost() {
var fs = require('fs');
var Twit = require('twit');
var config = require('../user/config');
var params = require('../user/params');
var T = new Twit(config);


var userHandel = params.tusername;


//GRAB ALL THE STUFF FROM THE REDDITRESULTS.JSON FILE
var contents = fs.readFileSync('./posttypes/redditresults.json');
// Define to JSON type
var jsonContent = JSON.parse(contents); 

var rt = Math.floor((Math.random() * 6) + 0);        
var rlink = jsonContent[rt].link; 


var tweet = rlink;

for (i =0; i <= 0; i++){
  tweetIt(); 
  //console.log(userHandel + ' Reddit Tweet: ' + tweet);     
};


function tweetIt(){

T.post('statuses/update', { status: tweet }, tweeted);

function tweeted(err, data, response) {
    if (err) {
        console.log (userHandel + ' Something went wrong posting a Reddit Tweet!!!');
        var basictweet = require('./basictweet');
        basictweet.basictweet();
    } else {
        console.log (userHandel + ' has posted a Reddit Tweet!!!');
        findnew();
};
};
   
};
function findnew(){
console.log(userHandel + ' Starting a new Reddit Tweet Search From Post');     

 setTimeout(function () {
     var redditstart = require('./reddittweetfinder');
     redditstart.redditstart();
}, 1000*30);   

    
};    
};   
module.exports.redditpost = redditpost;
        
    
