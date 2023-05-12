import mongoose from 'mongoose';

async function connection() {
//"mongoose.connect(process.env.MONGODB_LINK)"
    // 'mongodb+srv://nuevosena23:aprendiz@cluster0.xzmjye6.mongodb.net/test'
    await mongoose.connect (process.env.MONGODB_LINK)
    .then(() => { console.log('connected!'); })
    .catch(error => console.log(error));
}

export {
    connection
}