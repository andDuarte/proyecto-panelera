import { isValidObjectId } from 'mongoose';

export const checkId = async (req,res,next) => {
    // try {
        req.params.id = req.params.id.trim()
        if (!isValidObjectId(req.params.id)) return res.status(404).json({ msg: `The id: ${req.params.id} does not exists` })
        next();
    // } catch (error) {
    //     return res.status(401).json({ msg: "Unauthorized" })
    // }
    
}