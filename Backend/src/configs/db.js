const mongoose = require("mongoose")

module.exports = () => {
    return mongoose.connect(`mongodb+srv://Bhargav:bthegreat008@cluster0.wovgh.mongodb.net/swiggy?retryWrites=true&w=majority`)
}