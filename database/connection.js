import mongoose from 'mongoose';

async function connection() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(()=>{console.log('connected!')})
    .catch(error => console.log(error))
}

export {
    connection
}