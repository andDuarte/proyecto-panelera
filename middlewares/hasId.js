import Order from "../models/order.js";

export const checkIdExistsOrder = async (req,res,next) => {
    const idO = req.params.id
    if (req.params.id) {
        const id = await Order.findById({_id:idO})
        // const id = await Order.findById(req.params.id)}
        console.log(id);
        if (!id) return res.status(404).json({ msg: `The id: ${req.params.id} does not exists` })
    }
    next();
}