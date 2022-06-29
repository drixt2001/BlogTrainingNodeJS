const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/TrainingBlog');
        console.log('Connect DB Done');
    } catch (error) {
        console.log('Error');
    }
    
}
module.exports = {connect};