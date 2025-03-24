const = require("mongoose");

let blogsSchema = new mongoose.Schema({
    title: String,
    content: {
        type: String,
        required: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Blog", blogsShema);