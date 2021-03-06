const wash = require('washyourmouthoutwithsoap');

exports.profanity = function(message) {
    return wash.check('en', message);
}