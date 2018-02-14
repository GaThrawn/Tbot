
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var _ = require('lodash');
//var reddithashtexttweet = require('./reddithashtexttweet');
var params = require('../user/params');
var userHandel = params.tusername;
var url = params.redu;
var srh = params.redh;
var srt =params.redt;

redditstart()
//THIS SECTION STARTS THE PROGRAM AND CREATES THE FILE
function redditstart(){
   // console.log('Start reddit tweet Search from reddittweetfinder.js'); 
    var rsb = "[ ";
    fs.writeFile("./posttypes/redditresults.json", (rsb), (err) => {
    if (err) {
        console.error(err);
        return;
     };
   });
  redditsearch(url);    
};

//THE ACTUAL SEARCH OF THE REDDIT SUBREDDITS ALSO WHERE WE GRAB OUR LINKS
function redditsearch(url){
  console.log(userHandel + 'Started Reddit search for ' + url);
request(url, function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  //console.log('Reddit is not Broken...Status code: ' + response.statusCode);
  var $ = cheerio.load(body);
  $('div#siteTable > div.link').each(function( i, index ) {

    var href = $(this).find('a.outbound').attr('href');
    var hreffix = " " + href;
    //var rresults = JSON.stringify({link:hreffix}, null, 4);
    var results = hreffix + ",";
    // console.log('Checking reddit');
    //Check String Lengths and weed out self hopefully 
    var myString = results;
    var length = myString.length;
    //console.log("The string" + results + "is this long: " + length); 
if (length >= 30){
    //console.log(length + " The string is this long: </br>" + results + " " + i);
    var tweets = myString;
    
    var redditTweet1 = srt + ' ' + srh + ' ' + tweets;  
    var redditTweet2 = srh + ' ' + srt + ' ' + tweets; 
    var redditTweet3 = tweets + ' ' + srh + ' ' + srt; 
    var redditTweet = [redditTweet1, redditTweet2, redditTweet3]; 
    var trt = Math.floor((Math.random() * 3) + 0);
    var redresults = redditTweet[trt];
    var redresultsjson = JSON.stringify({link:redresults}, null, 4);
    var redresultsfix = redresultsjson + ",";
    
    var redtweet = redresultsfix;
    
    console.log(redtweet);
    //console.log(selectweet);    
    fs.appendFile("./posttypes/redditresults.json", (redtweet), (err) => {
    if (err) {
        console.error(err);
        return;
       };
     });
    };            
  });
 });    
 redditseachfinish();    
};

function redditseachfinish(){
    setTimeout(function () {    
    
    var reb = "{} ]";
    fs.appendFile("./posttypes/redditresults.json", (reb), (err) => {   
   // redditread(); 
    console.log(userHandel + 'New Reddit Tweet Search Saved!!!');    
    if (err) {
        console.error(err);
        return;
     };
   });
 }, 1000*50);
};


//module.exports.redditstart = redditstart; 