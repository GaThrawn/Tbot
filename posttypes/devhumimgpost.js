function devhumimgpost(){ 
var Twit = require('twit');
var fs = require('fs');
var config = require('../user/config');
var params = require('../user/params');
var T = new Twit(config);
var userHandel = params.tusername;

var devhumorhash = [
    '#webdevfunny #geekhumor #js',
    '#nerdfunny #geekhumor #coding',
    '#humor #nodejs #js #coding',
    '#lol #nodejs #nerdhumor #js',
    '#webdevhumor #webdev #npm',
    '#coding #npm #funny #geekhumor'
  
];

var devhumortweettext = [
  'Wow HA! ',
  'LOL This is amazing ',
  'Working on not laughing...',
  'Take the time to laugh ',
  'Sooooo glad I found this',
  'This is why I love webdev',
  'Some days you need to laugh ',
  'WHHHAAATTTT I love stuff like this!',
  'This would have helped last project :(',
  'Thanks for making this!!! '
       
];
var w = Math.floor((Math.random() * devhumortweettext.length) + 0);
var wtt = devhumortweettext[w];
var y = Math.floor((Math.random() * devhumorhash.length) + 0);
//console.log('ramdom number' + y);
var wh = devhumorhash[y];

//devhumimgpost();

 
 
var contents = fs.readFileSync('./posttypes/devhumimgresults.json');
// Define to JSON type
var jsonContent = JSON.parse(contents); 
//console.log("------------");
//console.log("------------");
//console.log("------------");        
//console.log(jsonContent);

var rt = Math.floor((Math.random() * 6) + 0);        
//console.log(jsonContent[rt]); 
//console.log(rt);
var rlink = jsonContent[rt].link; 
//console.log(srt + " " + srh + " " + rlink);

var devhumorTweet1 = wtt + " " + wh + " " + rlink;  
var devhumorTweet2 = wh + " " + wtt + " " + rlink; 
var devhumorTweet3 = rlink + " " + wh + " " + wtt; 
//console.log(devhumorTweet1); 
// console.log(devhumorTweet2); 
// console.log(devhumorTweet3); 
var devhumorTweet = [devhumorTweet1, devhumorTweet2, devhumorTweet3];

var trt = Math.floor((Math.random() * 3) + 0);
var status = devhumorTweet[trt];
var myString = status;
var length = myString.length;
//console.log('From Dev Post' + status + length);    
    
    
var tweet = status;
for (i =0; i <= 0; i++){
  tweetIt(); 
  //console.log(userHandel + ' Devhumor Image Tweet: ' + tweet);     
};


function tweetIt(){

T.post('statuses/update', { status: tweet }, tweeted);

function tweeted(err, data, response) {
    if (err) {
        console.log (userHandel + ' Something went wrong posting a DevHumor Image Tweet!!!');
        var basictweet = require('./basictweet');
        basictweet.basictweet();
    } else {
        console.log (userHandel + ' has posted a DevHumor Image Tweet!!!');
        
    };
   };  
  };
};
module.exports.devhumimgpost = devhumimgpost;