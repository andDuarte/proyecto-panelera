import mongoose from 'mongoose';

async function connection() {
    await mongoose.connect(process.env.MONGODB_LINK)
    // 'mongodb+srv://nuevosena23:aprendiz@cluster0.xzmjye6.mongodb.net/test'
    // 'mongodb://127.0.0.1:27017/test'
    .then(() => { console.log('connected!'); })
    .catch(error => console.log(error));
}

export {
    connection
}