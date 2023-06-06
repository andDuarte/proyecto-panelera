import { ROLES } from "../models/Role.js";
import User from "../models/user.js";

export const checkChangeDuplicateEmail = async (req, res, next) => {
    const _user = await User.findById(req.params.id);
    if (_user && _user.email == req.body.email) {
        delete req.body.email
    }

    next();
}

export const checkDuplicateEmail = async (req, res, next) => {
    // TODO: Verfcar mejor esta parte!
    const email = await User.findOne({ email: req.body.email })
    if (email) return res.status(404).json({ msg: "The email already exists" })

    next();
}

export const checkRolesExisted = (req, res, next) => {
    try {
        if (req.body.roles) {
            for (let i = 0; i < req.body.roles.length; i++) {
                let rol = req.body.roles[i].toString().trim()
    
                if (!ROLES.includes(rol)) {
                    return res.status(400).json({
                        msg: `Role ${rol} does not exists`
                    })
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
    next();
}