require('dotenv').config();
const options = {
    user:process.env.MONGO_ROOT_USER,
    pass:process.env.MONGO_ROOT_PASSWORD,
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const mongoUri = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`
module.exports = {mongoUri, options};