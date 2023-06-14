const CONFIG = {
    SECRET: process.env.PRIVATE_KEY || 'shhhhh',
    MONGODB_LINK: process.env.MONGODB_LINK || 'mongodb+srv://nuevosena23:aprendiz@cluster0.xzmjye6.mongodb.net/test', //'mongodb://127.0.0.1:27017/test', //'mongodb+srv://nuevosena23:aprendiz@cluster0.xzmjye6.mongodb.net/test',
    PORT: process.env.PORT || 3000
}

export default CONFIG