import config from '../config.js'
import jwt from 'jsonwebtoken';
import Role from '../models/Role.js';
import User from '../models/user.js';

async function createToken(payload) {
    const token = jwt.sign(payload, config.SECRET, {
        expiresIn: '10h',
        algorithm: 'HS256'
    });

    return { token }
}

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["token"]
        // const token = req.headers["x-access-token"]

        if (!token) return res.status(403).json({ msg: "No token provided" })

        const decoded = jwt.verify(token, config.SECRET, { algorithm: 'HS256' })
        req.userId = decoded.id // saved id
        const user = await User.findById(req.userId, { password: 0 })
        // console.log(user);
        if (!user) return res.status(404).json({ msg: "No user found" })

        next()
    } catch (error) {
        return res.status(401).json({ msg: "Unauthorized" })
    }
}

const isModerator = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({ _id: { $in: user.roles } })

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
            next()
            return;
        }
    }
    return res.status(403).json({ msg: "Require Moderator Role" })
    // next()
}

const isAuthorised = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({ _id: { $in: user.roles } })

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator" || roles[i].name === "admin") {
            next()
            return;
        }
    }
    return res.status(403).json({ msg: "Require Authorised" })
    // next()
}

const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({ _id: { $in: user.roles } })

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
            next()
            return;
        }
    }
    return res.status(403).json({ msg: "Require Admin Role" })
    // next()
}

const validateToken = async (token, { req }) => {
    jwt.verify(token, config.SECRET, function (err, decode) {
        if (err) {
            throw new Error('token no valido');
        }
    });
}

export {
    createToken,
    validateToken,
    verifyToken,
    isModerator,
    isAdmin,
    isAuthorised
}