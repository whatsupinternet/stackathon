var alphabet = {
  "a" : ["Angular.js", "ASP.NET", "Apache", "AWS", "App Engine"],
  "b" : ["Bootstrap", "Bower", "Bitbucket", "Backbone.js"],
  "c" : ["C", "C++", "C#", "CSS", "CoffeeScript", "Cappuccino"],
  "d" : ["D3.js", "DynamoDB", "Docker", "Django", "DigitalOcean"],
  "e" : ["Ember.js", "Express", "Emacs", "Erlang"],
  "f" : ["F#", "Flask", "Flex", "Foundation"],
  "g" : ["Go", "Git", "Grunt"],
  "h" : ["Hadoop", "Heroku", "Handlebars.js"],
  "i" : ["io.js", "IFTTT"],
  "j" : ["Java", "JavaScript", "jQuery", "jQuery UI", "jQuery Mobile", "JSON"],
  "k" : ["KnockoutJS"],
  "l" : ["Linux", "LESS", "LaTeX", "Lua"],
  "m" : ["Materialize", "MongoDB", "MySQL", "Modernizr", "Meteor", "Mocha"],
  "n" : ["Node.js", "nginx", "npm"],
  "o" : ["Objective-C", "Oracle", "OCaml"],
  "p" : ["PHP", "Python", "Perl", "PostgreSQL", "PL/SQL"],
  "q" : ["QUnit.js", "Qualaroo"],
  "r" : ["React.js", "Ruby", "Ruby on Rails", "Redis"],
  "s" : ["SASS", "SQL Server", "Scala", "SQLite", "Socket.io", "Swift"],
  "t" : ["Travis CLI", "Trello", "TypeScript", "TeX"],
  "u" : ["Underscore.js", "UNIX", "Unicode", "UIKit"],
  "v" : ["Vim", "Visual Basic", "VirtualBox"],
  "w" : ["Windows Server", "Windows Azure", "Worpress"],
  "x" : ["XML", "Xcode", "XSLT"],
  "y" : ["YAML", "Yeoman"],
  "z" : ["Zendesk", "Zapier", "ZenHub"]
};

var makeStack = function (word) {
  var currentAlphabet = {};
  
  return _.map(word.split(''), function (letter) {
    letter = letter.toLowerCase();

    if (!currentAlphabet[letter] || !currentAlphabet[letter].length) {
      currentAlphabet[letter] = _.shuffle(alphabet[letter]);
    }

    return currentAlphabet[letter].shift();
  });
};

console.log(makeStack('test'));
console.log(makeStack('aaaaaaaa'));