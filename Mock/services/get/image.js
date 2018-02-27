const image = require('dyson-image');

// http://localhost:3000/image/200x100
module.exports = {
  path: '/image/*',
  callback: image.asMiddleware,
};
