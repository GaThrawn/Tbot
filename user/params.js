//SET INTERVAL TIME FOR RUN TWEET TASKS

//Bot Twitter Like Time and Retweet Times
var tltime = 5;
var trttime = 5;
//Bot Like Random Minutes Generator Top and Bottom Number
var tltop = 5;
var tlbottom = 0;
//Bot ReTweet Random Minutes Generator Top and Bottom Number
var trttop = 10;
var trtbottom =0;
//Bot ReTweet From Reddit
var redtwe = 10;
var redtop = 5;
var redbottom = 0;
//Bot Like Others Time
var otltime = 5;
var otltop = 5;
var otlbottom = 0;
//Bot Retweet Others Time
var orttime = 5;
var orttop = 5;
var ortbottom = 0;

//Twitter Account User Name
//The Username of the twitter account
var tusername = '@BuiltByMikeN';

//TARGET NAME
//Use This if you want the account to Target a Specific User
var tarusername = '@BuiltByMikeN';


//-------------------------
//OTHER TAGET NAMES
//Here is where your other bot like and reply stuff goes
var botnames = [
  '@JavascriptBot_',
  '@NodeJsQnA',
  '@smashingmag',
  '@dev_dashboard',
  //'@ProjectClipcom',
  //'@FreelancersDir',
  //'@facetimeJS',
  '@_100DaysOfCode',
  '@acquia',
  '@cssawards',
  //'@topnotifier'
];


//-------------------------
//SET TWITTER SEARCHES
//Set 10 Different Twitter Search Terms To Like/ReTweet on Twitter
//Search Term Variables
var s0 = 'nodejs';
var s1 = 'expressjs';
var s2 = 'CMS';
var s3 = 'CSS';
var s4 = 'javascript';
var s5 = 'web design';
var s6 = 'wordpress';
var s7 = 'web development';
var s8 = 'mongodb';
var s9 = 'drupal';
//# of Tweets Searches to Return
var nts = 15;
// Language of Tweets Searched Set to English by default
var tl = 'en';
// Newest oldest ect
var trt = 'mixed';


//-------------------------
//SET YOUR RELPLYS TO NEW FOLLOWERS
//Here is where your reply stuff goes for new followers
//MAKE SURE THE NUMBER OF PRES MATCH AND CORESPOND TO POSTS TAGS
 var replypre = [
    'Thanks @',
    '@',
    'Wow thanks @', 
    '@',
    'Thanks alot for the follow @',
    '@',
    'Your why I love Twitter @',
    'Thanks for the follow @',
    'Hope your #javascript & #webdev project are succesful @',
    'I will do my best to keep it entertaining @',
    'Best of luck in all your #webdev and #coding projects! @',
    'Thanks for following me. @',
    'Have some #twitterlove @',
    'Awesome Thanks for the follow @',
    'Thanks @'
     
];
var replypost = [
    '! for the follow. I will do my best to keep it entertaining and informative #javascript #js #html #css #webdev',
    ' Thanks for following me. I hope you have fun  at #webdev and no errors in your #code #javascript !',
    ' for the follow. Check back for more about #coding #webdev #nodejs #javascript #CMS',
    ' Thanks for following me. Best of luck in all your #webdev and #coding projects!',
    ' I Got 99 Problems but A Glich Aint One #Thanks',
    ' Thanks for following me. I will try to keep it #fun when tweeting about #coding #webdev !!',
    ' Thanks for following me! #cleancode #webdev #javascript',
    ' Hope your #javascript & #webdev project are succesful!',
    ' Have some #twitterlove',
    ' Tweeting about #javascript #js',
    ' Thanks for the Follow!',
    ' I will do my best to keep it up to date about #javasript #webdev #nodejs',
    ' Thanks for the follow!',
    ' Hope your #javascript & #webdev project are succesful!',
    ' Never fear I will deliver more about #coding #webdev #nodejs #javascript #CMS'
    
    
];


//-------------------------
//SET YOUR SUB REDDITS HASHTAGS AND STRINGS
//Here is Where the Reddit Stuff Goes
//MAKE SURE THE NUMBER OF URLS MATCH AND CORESPOND TO HASH TAGS
var subredditurls = [
    'https://www.reddit.com/r/drupal/',
    'https://www.reddit.com/r/javascript/',
    'https://www.reddit.com/r/webdev/',
    'https://www.reddit.com/r/node/',
    'https://www.reddit.com/r/learnjavascript/',
    'https://www.reddit.com/r/mobilewebdev/',
    'https://www.reddit.com/r/mongodb/',
    'https://www.reddit.com/r/reactjs/' 
];
var subreddithashs = [
    '#Drupal #CMS #webdev',
    '#javascript #js #coding #webdev',
    '#javascript #js #coding #webdev',
    '#npm #nodejs #node #javascript #js',
    '#javascript #js #coding #webdev',
    '#mobile #javascript #js #coding #webdev',
    '#javascript #js #mongodb #mongo',
    '#react #reactjs #javascript #js '  
];

//HERE IS A LITTLE CLICK BAIT TEXT FOR THE LINK
var subreddittext = [
  'Wow this is awesome! ',
  'This is amazing ',
  'Take the time to check this out ',
  'Sooooo glad I found this ',
  'This is why I love internet ',
  'Can not belive I did not know before ',
  'WHHHAAATTTT I love stuff like this! ',
  'This is great!!! ',
  'Thanks for making this! ',
  'Take the time to check this out ',
  'Sooooo glad I found this ',
  'This is why I love internet ',
  'Can not belive it ',
  'I love stuff like this! ',
  'Here is something cool ',
  'This is great... ',
  'Glad I found this!!! ',
  'Neat Never seen this before ',
  'The Net never fails lol ',
  'Love finding this stuff ',
  'Love finding these gems ',
  'This is interesting... ',
  'This is why I log on ',
  'Sweet thanks google ',
  'What would I do without google ',
  'Amazing what you can find ',
  'Worth a look ',
  'Nice worth the time ',
  'Good to know ',
  'Yes I was looking for this ',
  'Cool worth a moment ',
  'Cool worth a second ',
  'Well it was worth my time ',
  'What did I do before Google ',
  'Great Info ',
  'Good to know...',
  'Yes found what I was lookng for',
  'Worth a few minutes',
  'It never fails',
  'Never change #google ...'
];



//This just handels the other standard stuff for searches
var tsarr = [s0, s1, s2, s3, s4, s5, s6, s7, s8, s9];

var se0 = {
    q: tsarr[0],
    count: nts,
    lang: tl,
    result_type: trt
};

var se1 = {
    q: tsarr[1],
    count: nts,
    lang: tl,
    result_type: trt
};

var se2 = {
    q: tsarr[2],
    count: nts,
    lang: tl,
    result_type: trt
};

var se3 = {
    q: tsarr[3],
    count: nts,
    lang: tl,
    result_type: trt
};

var se4 = {
    q: tsarr[4],
    count: nts,
    lang: tl,
    result_type: trt
};
var se5 = {
    q: tsarr[5],
    count: nts,
    lang: tl,
    result_type: trt
};
var se6 = {
    q: tsarr[6],
    count: nts,
    lang: tl,
    result_type: trt
};
var se7 = {
    q: tsarr[7],
    count: nts,
    lang: tl,
    result_type: trt
};
var se8 = {
    q: tsarr[8],
    count: nts,
    lang: tl,
    result_type: trt
};
var se9 = {
    q: tsarr[9],
    count: nts,
    lang: tl,
    result_type: trt
};
//This just puts all the search parms together into a nice array
var tsarra = [se0, se1, se2, se3, se4, se5, se6, se7, se8, se9];

//RANDOMIZE AND RETURN A SPECIFIC USER ACCOUNT\
//Other Bot Search-Like 1st Run
othernamenum();
function othernamenum(){
var bn = Math.floor((Math.random() * botnames.length) + 0); var botsearch = botnames[bn];   
//console.log(botsearch);
module.exports.botsearch = botsearch;
};
setInterval(othernamenum, 1000*57);

// RANDOMIZE YOUR FOLLOW REPLY STUFF

newreplynum();
function newreplynum(){
var zz = Math.floor((Math.random() * replypre.length) + 0);  var twitxpre = replypre[zz];
 var twitxpost = replypost[zz];   
//console.log(botsearch);

//Pre And Post Replys Text for New Followers
module.exports.twitxpre = twitxpre;
module.exports.twitxpost = twitxpost;
};
setInterval(newreplynum, 1000*57);

newrredditnum();
function newrredditnum(){
// RANDOMIZE YOUR REDDIT STUFF
var subredurlhash = Math.floor((Math.random() * subredditurls.length) + 0);
var subredtext = Math.floor((Math.random() * subreddittext.length) + 0);

var redu =subredditurls[subredurlhash];
var redh =subreddithashs[subredurlhash];
var redt =subreddittext[subredtext]; 
//var redtweet = redt + '' + redh + '' + redu;
//console.log(subredurlhash);
//console.log(subredtext);
//console.log(redtweet);
//Reddit Stuff Reddit URLS HASHS and TEXT for REDDIT TWEETS
module.exports.redu = redu;
module.exports.redh = redh;
module.exports.redt = redt;
};
setInterval(newrredditnum, 1000*60*3);

//-------THE EXPORTS---------
//EXPORTS STATIC VARS AND FUNCTIONS
//Usernames The Bot and Target Bot
module.exports.tusername = tusername;
module.exports.tarusername = tarusername;
//Runtime Base Times for Likes and ReTweets
module.exports.tltime = tltime;
module.exports.trttime = trttime;
module.exports.tltop = tltop;
module.exports.tlbottom = tlbottom;
module.exports.trttop = trttop;
module.exports.trtbottom = trtbottom;
//Runtime Base Times for Reddit Tweets
module.exports.redtwe = redtwe;
module.exports.redtop = redtop;
module.exports.redbottom = redbottom;
//Runtime Base Times for 
module.exports.otltime = otltime;
module.exports.otltop = otltop;
module.exports.otlbottom  = otlbottom;
module.exports.orttime = orttime;
module.exports.orttop = orttop;
module.exports.ortbottom = ortbottom;
//Twitter Search and Like and Retweet
module.exports.tsarr = tsarr;
module.exports.tsarra = tsarra;


function displayTime() {
	var currentTime = new Date();
	var hours = '' + currentTime.getHours();
	var minutes = '' + currentTime.getMinutes();
   	var seconds = '' + currentTime.getSeconds();
    var thetime = currentTime + ' ' + hours + ' ' + minutes;
    module.exports.thetime = thetime;
}
displayTime();


