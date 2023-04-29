import jwt from 'jsonwebtoken';

async function createToken(payload) {
    const token = jwt.sign(payload, 'shhhhh', {
        expiresIn: '10h',
        algorithm: 'HS256'
    });

    return{
        token
    }
};

const validateToken = (token) => {
    // jwt.verify(token, privatekey, function(err, decode){
    // console.log(decode)
    // })
};

export{
    createToken,
    validateToken
}