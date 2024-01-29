const mongoose = require('mongoose');

const connectDB = () => {
    mongoose
    .connect("mongodb+srv://mvc:mvc@mvc.nanwmbc.mongodb.net/mvc-tutorial?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true, // Fix the typo here
    })
    .then(() => console.log('DB connected'))
    .catch(console.error);
}

module.exports = connectDB;
