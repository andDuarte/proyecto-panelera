import jwt from 'jsonwebtoken';

async function createToken(payload) {
    const token = jwt.sign(payload, process.env.PRIVATE_KEY, {
        expiresIn: '10h',
        algorithm: 'HS256'
    });
    // 'shhhhh'

    return{
        token
    }
};

const validateToken = async(token, { req }) => {
    jwt.verify(token, process.env.PRIVATE_KEY, function(err, decode){
        if(err) {
            throw new Error('token no valido');
        }
    });
    // 'shhhhh'
};

export{
    createToken,
    validateToken
}