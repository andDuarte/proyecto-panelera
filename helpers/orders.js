import { ordersModel } from '../models/orders.js';

const orderValidate = {
    orderId: async(id) => {
        const order = await ordersModel.find({_id: id});

        if(order.length == 0) {
            throw new Error('el id no existe en la base de datos');
        }
    },
}

export{
    orderValidate
}