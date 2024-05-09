const mongoose = require("mongoose")


 const connection = mongoose.connect("mongodb://localhost:27017/hukumuNodeB35")

module.exports = {
    connection
}