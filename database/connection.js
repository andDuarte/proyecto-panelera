import mongoose from 'mongoose';

async function connection() {
    // 'mongodb+srv://nuevosena23:aprendiz@cluster0.xzmjye6.mongodb.net/test'
    // 'mongodb://127.0.0.1:27017/test'
    // process.env.MONGODB_LINK
    await mongoose.connect('mongodb+srv://nuevosena23:aprendiz@cluster0.xzmjye6.mongodb.net/test')
    .then(() => { console.log('Db is connected!'); })
    .catch(error => console.log(error));
}

export {
    connection
}