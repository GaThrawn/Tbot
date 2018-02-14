function basictweet() {
var Twit = require('twit');
var fs = require('fs');
var config = require('../user/config');
var params = require('../user/params');
var T = new Twit(config);
//Bot Twitter Username
var userHandel = params.tusername;

//Random Var Chooses Post Type
//Radom Hash Text and Random Image Post are 2 Default Choices

var pt = Math.floor((Math.random() * 6) + 0);
//console.log(pt);
if (pt==0){
    //console.log('I choose Picture');
    tweetpic();
}else if (pt==1){
    //console.log('I choose Picture');
    tweetpic1();
  }else if (pt==2){
    //console.log('I choose Picture');
    tweetpic2();
  }else if (pt==3){
    tweetpic3();
    //console.log('I choose Text');
  }else if (pt==4){
    tweetpic4();
    //console.log('I choose Text');
  }else if (pt==5){
    tweetpic5();
    //console.log('I choose Text');
  }else{
    
    texttweet();
  };


function texttweet(){
var preStatusText = [
    'These are awsome Love using these tools ',
    'Beyond stoked about working with ',
    '#Freelancing Goes Hand-in-Hand with ',
    'WebDev is not a simple straightforward process...but rewarding ',
    'Web Development has always been and exiting What Will Woday Bring! ',
    'You could form an amazing website using ',
    'There are a lot of things to consider when designing with ',
    'I love looking back at the things I have made with ',
    'It is amazing how much you can do with ',
    'What do I love most about web dev? My tools ',
    'Amazing what you can make with a bunch of code & ',
    'Why yes I can do that with ',
    'Great to think how far we have come with ',
    'It is so great to know I have a solid set of tools ',
    'I love being able to say I can do that with '
];

var postStatusText = [
    ' I know I will love my next project with you!',
    ' You complete me',
    ' To the resucue agian thanks for saving my project #freelance',
    ' Heres to learning something new every project',
    ' Yes, yes, I can do that. #Thanks #goodcode',
    ' You make me laugh you make me cry #webdev',
    ' ...Makes you think how far we have come',
    ' are great tools to use for any #webdev or #app project!!!!',
    ' ...heres to never feeling trapped in a project',
    ' are website and app Step #1',
    ' loving my productivity with these',
    ' Great to know your out there',
    ' Your on the list for my new project',
    ' Your on the list for my next project',
    ' Wish I was working with you now'
];

var statusHash = [
    '#MongoDB', '#mondgodb', '#mongo', '#expressjs', '#angularjs', '#angular', '#angular4', '#nodejs', '#reactjs', '#code', '#developer', '#javascript', '#js', '#react', '#npmjs', '#webdev', '#webdesign', '#mongoose' , '#goodcode', '#cleancode' 
];

var prestr = Math.floor((Math.random() * preStatusText.length) + 0);
var poststr = Math.floor((Math.random() * postStatusText.length) + 0);
    
var shr = Math.floor((Math.random() * statusHash.length) + 0);
//console.log('ramdom number ' + shr);
var shr1 = Math.floor((Math.random() * statusHash.length) + 0);
//console.log('ramdom number ' + shr1);
var shr2 = Math.floor((Math.random() * statusHash.length) + 0);
//console.log('ramdom number ' + shr2);

var prex = preStatusText[prestr];
var postx = postStatusText[poststr];
//var midx = midStatusText[midstr];
var y = statusHash[shr];
var y1 = statusHash[shr1];
var y2 = statusHash[shr2];
var prethtstring = prex + y + ' ' + y1 + ' ' + y2;
var postthtstring = y + ' ' + y1 + ' ' + y2 + postx;
var prethtstring1 = prex + y1 + ' ' + y + ' ' + y2;
var postthtstring1 = y1 + ' ' + y2 + ' ' + y + postx;
//console.log(prethtstring);
//console.log(postthtstring);
//console.log(prethtstring1);
//console.log(postthtstring1);

var tweetarr = [
    prethtstring,
    postthtstring,
    prethtstring1,
    postthtstring1
];
var rt = Math.floor((Math.random() * tweetarr.length) + 0);

var tweet = tweetarr[rt];
//console.log(userHandel);
//console.log(tweet);

tweetIt();
function tweetIt(){
T.post('statuses/update', { status: tweet }, tweeted);
function tweeted(err, data, response) {
    if (err) {
        console.log (userHandel + ' Something went wrong posting a Basic Text Hash Tweet!!!');
        tweetpic();
    } else {
        console.log (userHandel + ' has posted a Basic Text Hash Tweet!!!');
       
        };
      };
   
  };
};


function tweetpic(){
// post a tweet with media 
//console.log('ramdom number ' + shr1);
var picnum = Math.floor((Math.random() * 19) + 0);
//console.log('TechBackground-.' + picnum + 'jpg');
        
        
  var b64content =fs.readFileSync('./img/FreeTechBack/BBMN_TechBG_' + picnum + '.jpg', { encoding: 'base64' })
 
  // var b64content =fs.readFileSync('./img/Seahawk.jpg', { encoding: 'base64' })
// first we must post the media to Twitter 
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and 
  // other text-based presentations and interpreters 
  var mediaIdStr = data.media_id_string
  var altText = "BBMN web backgrounds"
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
 
  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet) 
      var params = { status: '#free4use #webdesign #design More colors are available at http://builtbymikenash.com/Project/tech-backgrounds #enjoy #codelove', media_ids: [mediaIdStr] }
 
      T.post('statuses/update', params, function (err, data, response) {
          
        //console.log(data)
          console.log(userHandel + ' Posted an image from FreeTechBack Horizontal Colors')
      })
    }
  })
})             
        
};

    
function tweetpic1(){
// post a tweet with media 
//console.log('ramdom number ' + shr1);
var picnum = Math.floor((Math.random() * 19) + 0);
//console.log('TechBackground-.' + picnum + 'jpg');
        
        
  var b64content =fs.readFileSync('./img/FreeTechBack1/BBMN_TechBG_' + picnum + '.jpg', { encoding: 'base64' })
 
  // var b64content =fs.readFileSync('./img/Seahawk.jpg', { encoding: 'base64' })
// first we must post the media to Twitter 
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and 
  // other text-based presentations and interpreters 
  var mediaIdStr = data.media_id_string
  var altText = "BBMN web backgrounds"
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
 
  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet) 
      var params = { status: '#free4use #webdesign #free More are available at http://builtbymikenash.com/Project/tech-backgrounds-round-2 #enjoy #codelove', media_ids: [mediaIdStr] }
 
      T.post('statuses/update', params, function (err, data, response) {
          
        //console.log(data)
          console.log(userHandel + ' Posted an image from FreeTechBack Horizontal Pictures')
      })
    }
  })
})             
        
};
    
    
function tweetpic2(){
// post a tweet with media 
//console.log('ramdom number ' + shr1);
var picnum = Math.floor((Math.random() * 15) + 0);
//console.log('TechBackground-.' + picnum + 'jpg');
        
        
var b64content =fs.readFileSync('./img/FreeTechBack2/BBMN_CircuitReflect_' + picnum + '.jpg', { encoding: 'base64' })
 
  // var b64content =fs.readFileSync('./img/Seahawk.jpg', { encoding: 'base64' })
// first we must post the media to Twitter 
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and 
  // other text-based presentations and interpreters 
  var mediaIdStr = data.media_id_string
  var altText = "BBMN Tech Reflect Image"
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
 
  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet) 
      var params = { status: '#free4use #webdesign #free More are available at http://builtbymikenash.com/Project/tech-backgrounds-reflection #enjoy #codelove', media_ids: [mediaIdStr] }
 
      T.post('statuses/update', params, function (err, data, response) {
          
        //console.log(data)
          console.log(userHandel + ' Posted an image from Tech Reflect Image')
      })
    }
  })
})             
        
};
    
    
function tweetpic3(){
// post a tweet with media 
//console.log('ramdom number ' + shr1);
var picnum = Math.floor((Math.random() * 11) + 0);
//console.log('TechBackground-.' + picnum + 'jpg');
        
        
var b64content =fs.readFileSync('./img/Quotes/Tech-Quote-' + picnum + '.jpg', { encoding: 'base64' })
 
  // var b64content =fs.readFileSync('./img/Seahawk.jpg', { encoding: 'base64' })
// first we must post the media to Twitter 
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and 
  // other text-based presentations and interpreters 
  var mediaIdStr = data.media_id_string
  var altText = "BBMN Tech and Success Quotes"
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
 
  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet) 
      var params = { status: '#motivation #webdesign #tech Some days we all just need a little bit of You Can Do It #lovecode', media_ids: [mediaIdStr] }
 
      T.post('statuses/update', params, function (err, data, response) {
          
        //console.log(data)
          console.log(userHandel + ' Posted an image from Quotes')
      })
    }
  })
})             
        
};
    

function tweetpic4(){
// post a tweet with media 
//console.log('ramdom number ' + shr1);
var picnum = Math.floor((Math.random() * 19) + 0);
//console.log('TechBackground-.' + picnum + 'jpg');
        
        
var b64content =fs.readFileSync('./img/FreeTechBack3/BBMN_BWDiag_' + picnum + '.jpg', { encoding: 'base64' })
 
  // var b64content =fs.readFileSync('./img/Seahawk.jpg', { encoding: 'base64' })
// first we must post the media to Twitter 
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and 
  // other text-based presentations and interpreters 
  var mediaIdStr = data.media_id_string
  var altText = "BBMN Tech Diagonal Image"
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
 
  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet) 
      var params = { status: '#free4use #webdesign #free More are available at http://builtbymikenash.com/Project/circuit-white-and-black #enjoy #codelove', media_ids: [mediaIdStr] }
 
      T.post('statuses/update', params, function (err, data, response) {
          
        //console.log(data)
          console.log(userHandel + ' Posted an image from Quotes')
      })
    }
  })
})             
        
};
    
    
function tweetpic5(){
// post a tweet with media 
//console.log('ramdom number ' + shr1);
var picnum = Math.floor((Math.random() * 19) + 0);
//console.log('TechBackground-.' + picnum + 'jpg');
        
        
var b64content =fs.readFileSync('./img/FreeTechBack4/BBMN_WBDiag_' + picnum + '.jpg', { encoding: 'base64' })
 
  // var b64content =fs.readFileSync('./img/Seahawk.jpg', { encoding: 'base64' })
// first we must post the media to Twitter 
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and 
  // other text-based presentations and interpreters 
  var mediaIdStr = data.media_id_string
  var altText = "BBMN Tech Diagonal Image"
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
 
  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet) 
      var params = { status: '#free4use #webdesign #free More are available at http://builtbymikenash.com/Project/circuit-white-and-black #enjoy #codelove', media_ids: [mediaIdStr] }
 
      T.post('statuses/update', params, function (err, data, response) {
          
        //console.log(data)
          console.log(userHandel + ' Posted an image from Quotes')
      })
    }
  })
})             
        
};
    
    
};
module.exports.basictweet = basictweet;