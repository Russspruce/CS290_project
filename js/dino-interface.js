var DinoTweet = require('./../js/dinoTweet.js').DinoTweet;
var getVerb = require('./../js/dinoTweet.js').getVerb;
var getOccupation = require('./../js/dinoTweet.js').getOccupation;
var getCompany = require('./../js/dinoTweet.js').getCompany;
var getFruit = require('./../js/dinoTweet.js').getFruit;
var getDino = require('./../js/dinoTweet.js').getDino;
var getDinoTwitter = require('./../js/dinoTweet.js').getDinoTwitter;


var displayVerb = function(dataReturnedFromAPI) {
  $('#verb').text(dataReturnedFromAPI);
};

var displayOccupation = function(dataReturnedFromAPI) {
  $('#occupation').text(dataReturnedFromAPI);
};

var displayCompany = function(dataReturnedFromAPI) {
  $('#companies').text(dataReturnedFromAPI);
};

var displayFruit = function(dataReturnedFromAPI) {
  $('#fruits').text(dataReturnedFromAPI);
};

var displayDino = function(dataReturnedFromAPI) {
  $('#dino').text(dataReturnedFromAPI);
};

var displayDinoTwitter = function(dataReturnedFromAPI) {
  $('#dinoTwitter').text(dataReturnedFromAPI);
};

$(document).ready(function() {
  $('.btn').click(function() {
    $('#allTweets').show();
    getVerb(displayVerb);
    getOccupation(displayOccupation);
    getCompany(displayCompany);
    getFruit(displayFruit);
    getDino(displayDino);
    getDinoTwitter(displayDinoTwitter);


   });
  });
