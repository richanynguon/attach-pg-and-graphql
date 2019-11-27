require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 4000;

module.exports = {
  env,
  port

}