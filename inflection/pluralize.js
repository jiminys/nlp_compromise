// Generated by CoffeeScript 1.6.3
var natural, nounInflector;

natural = require('natural');

nounInflector = new natural.NounInflector();

exports.pluralize = function(str) {
  if (!str) {
    return null;
  }
  return nounInflector.pluralize(str);
};