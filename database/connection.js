import mongoose from 'mongoose';

async function connection() {
    // 'mongodb+srv://nuevosena23:aprendiz@cluster0.xzmjye6.mongodb.net/test'
    await mongoose.connect(process.env.MONGODB_LINK)
    .then(() => { console.log('Db is connected!'); })
    .catch(error => console.log(error));
}

export {
    connection
}