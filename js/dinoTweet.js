exports.DinoTweet = function( verb, dino, job, fruit, corporation) {
  this.verb = verb;
  this.dino = dino;
  this.job = job;
  this.fruit = fruit;
  this.corporation = corporation;
};

exports.getVerb = function(displayVerb) {
  var newVerb = $.get('http://corpora-api.herokuapp.com/words/verbs').then(function(response) {
    newVerb = response.verbs[Math.floor((Math.random() * response.verbs.length) + 1)].past;
    displayVerb(newVerb);
  });
};

exports.getOccupation = function(displayOccupation) {
  var newOccupation = $.get('http://corpora-api.herokuapp.com/humans/occupation').then(function(response) {
    newOccupation = response.occupations[Math.floor((Math.random() * response.occupations.length) + 1)];
    displayOccupation(newOccupation);
  });
};

exports.getCompany = function(displayCompany) {
  var newCompany = $.get('http://corpora-api.herokuapp.com/corporations/fortune500').then(function(response) {
    newCompany = response.data.companies[Math.floor((Math.random() * response.data.companies.length) + 1)];
    displayCompany(newCompany);
  });
};

exports.getFruit = function(displayFruit) {
  var newFruit = $.get('http://corpora-api.herokuapp.com/foods/fruits').then(function(response) {
    newFruit = response.data.fruits[Math.floor((Math.random() * response.data.fruits.length) + 1)];
    displayFruit(newFruit);
  });
};

exports.getDino = function(displayDino) {
  var newDino = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1').then(function(response) {
    newDino= response.replace(".", "").replace("<p>", "").replace("</p>", "");
    displayDino(newDino);
  });
};
exports.getDinoTwitter = function(displayDinoTwitter) {
  var newDinoTwitter = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1').then(function(response) {
    newDinoTwitter = response.replace(".", "").replace("<p>", "").replace("</p>", "");
    displayDinoTwitter(newDinoTwitter);
  });
};
