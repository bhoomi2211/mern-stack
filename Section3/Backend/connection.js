const { log } = require('console');
const mongoose = require('mongoose');

const url="mongodb+srv://bhoomi2211:1234@cluster0.9qsot2y.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then((result) => {
    console.log("Database connected successfully");
    
    
}).catch((err) => {
    console.log(err);
    
    
});

 module.exports = mongoose;
 
 