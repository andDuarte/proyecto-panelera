import { ROLES } from "../models/Role.js";
import user from "../models/user.js";

export const checkDuplicateEmail = async (req, res, next) => {
    const email = await user.finOne({ username: req.body.username })
    if (email) return res.status(404).json({ msg: "The email already exists" })

    next();
}

export const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                return res.status(400).json({
                    msg: `Role ${req.body.roles[i]} does not exists`
                })
            }
        }
    }
    next();
}