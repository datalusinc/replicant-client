'use strict';
// var auth = require('../../auth');
// var User = require('./user.model');

var validationError = function(res, err) {
    return res.json(422, err);
};

// controller.login = function *(next){
//     console.log('Request', this.request.body)
//     this.body ='Bearer ' + auth.signToken(123)
// }

/**
 * Get list of spam
 * restriction: 'admin'
 */
exports.index = async function index(ctx, next){
 
}




function delay(time){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
}