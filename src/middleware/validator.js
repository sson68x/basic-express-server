'use strict';

function validator(req, res, next) {
  let { name } = req.query;
  if (!name) {
    next('Please enter a name query parameter like this:  /hello?name=Simon');
  } else {
    console.log('name:', name);
  }
  next();
}

module.exports = validator;
