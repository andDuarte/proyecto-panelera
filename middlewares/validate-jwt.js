import jwt from 'jsonwebtoken';

async function createToken(payload) {
const token = jwt.sign(payload, "shhhhh" , {
        expiresIn: '10h',
        algorithm: 'HS256'
    });
    // 'process.env.PRIVATE_KEY'

    return{
        token
    }
};

const validateToken = async(token, { req }) => {
    jwt.verify(token, "shhhhh", function(err, decode){
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