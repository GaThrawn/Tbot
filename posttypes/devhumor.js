
function humorchoice(){
//var humchoice [img, gif];
var hc = Math.floor((Math.random() * 2) + 0);
//console.log(hc);
if (hc==0){
    devhumimg();
    //console.log('DevhumorImage');
    
}else{
    devhumgif();
    //console.log('DevhumorGif');
   
};
};

function image(){
    devhumimg();
};
function gif(){
    devhumgif();
};

module.exports.humorchoice = humorchoice; 
module.exports.image = image;
module.exports.gif = gif;


function devhumimg(){
    
var config = require('../user/config');
var params = require('../user/params');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var _ = require('lodash');


var devhumorurl = [
    'http://devhumor.com/category/comics'
 
];


var x = devhumorurl[0];


var url = x;
//console.log(url);
//THIS SECTION STARTS THE PROGRAM AND CREATES THE FILE
function devhumorstart(){
    //console.log('start devhumortweet'); 
    var rsb = "[ ";
    fs.writeFile("./posttypes/devhumimgresults.json", (rsb), (err) => {
    if (err) {
        console.error(err);
        return;
     };
   });
  devhumorsearch(url);    
};


devhumorstart();

//THE ACTUAL SEARCH OF THE REDDIT SUBREDDITS ALSO WHERE WE GRAB OUR LINKS
function devhumorsearch(url){
   // console.log('start devhumor search');
request(url, function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
    var basictweet = require('./basictweet');
    basictweet.basictweet();  
  }
  //console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
    //console.log(body);
 $('div#media > div.animated').each(function( i, index ) {


      
    var href = $(this).find('div.item-large > a').attr('href');
   var hreffix = " " + href;
    var rresults = JSON.stringify({link:hreffix}, null, 4);
    var results = rresults + ",";
   // console.log('checking devhumor');
 
var myString = results;

var length = myString.length;

//console.log("The string" + results + "is this long: " + length);
  
if (length >= 50){
    //console.log(length + " The string is this long: </br>" + results + " " + i);
    var tweets = myString;
   // console.log(tweets);
    //console.log(selectweet);
     
    fs.appendFile("./posttypes/devhumimgresults.json", (tweets), (err) => {
    if (err) {
        console.error(err);
        return;
     };
   });
}; 
      
 });
    
});    
devhumorseachfinish();    
};

function devhumorseachfinish(){
    setTimeout(function () {    
   // console.log('go go speed racer LAUGH!!!!');
    var reb = "{} ]";
    fs.appendFile("./posttypes/devhumimgresults.json", (reb), (err) => {
    
    devpost();        
    if (err) {
        console.error(err);
        return;
     };
   });
 }, 1000*15);
};

     
//console.log(status + length);

function devpost(){
setTimeout(function () {
var devhumimgpost = require('./devhumimgpost');    
//console.log('sending to devpost');
devhumimgpost.devhumimgpost();    
}, 1000*10);    
};
    
};

function devhumgif(){
  
    var config = require('../user/config');
var params = require('../user/params');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var _ = require('lodash');


var devhumorurl = [
    'http://devhumor.com/category/gifs'
 
];

var x = devhumorurl[0];

var url = x;
//console.log(url);
//THIS SECTION STARTS THE PROGRAM AND CREATES THE FILE
function devhumorgifstart(){
    //console.log('start devhumortweet'); 
    var rsb = "[ ";
    fs.writeFile("./posttypes/devhumgifresults.json", (rsb), (err) => {
    if (err) {
        console.error(err);
        return;
     };
   });
  devhumorsearch(url);    
};


devhumorgifstart();

//THE ACTUAL SEARCH OF THE REDDIT SUBREDDITS ALSO WHERE WE GRAB OUR LINKS
function devhumorsearch(url){
   // console.log('start devhumor search');
request(url, function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
    var basictweet = require('./basictweet');
    basictweet.basictweet();  
  }
 // console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
    //console.log(body);
 $('div#media > div.animated > div.item-large').each(function( i, index ) {


      
    var href = $(this).find('div.animated-gif > img').attr('data-animation');    
//     var href1 = $(this).find('div.animated-gif').next().html();
//     var href2 = $(this).find('div.animated-gif > img').attr('src');
//     console.log(href);
//     console.log(href1);
//     console.log(href2);
     
          
   var hreffix = " " + href;
    var rresults = JSON.stringify({link:hreffix}, null, 4);
    var results = rresults + ",";
  //  console.log('checking devhumor GIF');
 
var myString = results;

var length = myString.length;

//console.log("The string" + results + "is this long: " + length);
  
if (length >= 50){
    //console.log(length + " The string is this long: </br>" + results + " " + i);
    var tweets = myString;
   // console.log(tweets);
    //console.log(selectweet);
     
    fs.appendFile("./posttypes/devhumgifresults.json", (tweets), (err) => {
    if (err) {
        console.error(err);
        return;
     };
   });
}; 
      
 });
    
});    
devhumorseachfinish();    
};

function devhumorseachfinish(){
    setTimeout(function () {    
 //  console.log('go go speed racer LAUGH GIF!!!!');
    var reb = "{} ]";
    fs.appendFile("./posttypes/devhumgifresults.json", (reb), (err) => {
    
     devpost();        
    if (err) {
        console.error(err);
        return;
     };
   });
 }, 1000*15);
};
function devpost(){
setTimeout(function () {
var devhumgifpost = require('./devhumgifpost');    
//console.log('sending to devpost');
devhumgifpost.devhumgifpost();    
}, 1000*10);    
};
    

    
};
