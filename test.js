var Twit = require('twit');
var config = require('../user/config');
var params = require('../user/params');
var T = new Twit(config);

T.get('followers/userNames', { screen_name: 'BuiltbyMikeN' },  function (err, data, response) {
  console.log(data)
});