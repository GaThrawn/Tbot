var Twit = require('twit');
var fs = require('fs');
var config = require('../user/config');
var params = require('../user/params');
var T = new Twit(config);

//The number to start with called globally in the file
var callCount = 0;

//All the repeat function stuff
var repeater = setInterval(function () {
  if (callCount < 19) {
    callCount += 1;
   // console.log(callCount);     
   var x = callCount;  
      
function tweetpic(){
console.log('../img/FreeTechBack3/BBMN_BWDiag_' + x + 'jpg');
        
        
  var b64content =fs.readFileSync('../img/FreeTechBack3/BBMN_BWDiag_' + x + '.jpg', { encoding: 'base64' })
 
  // var b64content =fs.readFileSync('./img/Seahawk.jpg', { encoding: 'base64' })
// first we must post the media to Twitter 
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and 
  // other text-based presentations and interpreters 
  var mediaIdStr = data.media_id_string
  var altText = "BBMN web image backgrounds"
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
 
  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet) 
      var params = { status: 'Backgrounds made based on request #free4use #webdesign all colors available at http://builtbymikenash.com/Project/circuit-black-and-white', media_ids: [mediaIdStr] }
 
      T.post('statuses/update', params, function (err, data, response) {
        //console.log(data)
          console.log('Posted a PictureTextHashTweet')
      })
    }
  })
})             
        
};
      
tweetpic();

    
      
  } else {
    clearInterval(repeater);
  }
}, 1000*60*9);



