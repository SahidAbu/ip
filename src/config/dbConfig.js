const mongoose = require('mongoose');


module.exports = async function connectDB() {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected!", [connect.connection.name])
    } catch (error) {
        console.log(error);
    }
}