const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    SECRET_API_KEY: process.env.SECRET_API_KEY
};