import Order from '../models/order.js';

const ordersHttp = {
    getOrders: async (req, res) => {
        const orders = await Order.find().populate('customer').populate('products.element');

        // if (orders.length == 0) {
        //     return res.status(404).json({ msg: 'No records found', msj: 'No se encontraron registros' });
        // }

        return res.json(orders);
    },

    createOrder: async (req, res) => {
        const newOrder = new Order(req.body);

        await newOrder.save();

        return res.status(201).json({ msg: 'Pedido creado' })
    },

    updateOrderById: async (req, res) => {
        const updateOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (updateOrder) return res.status(201).json({ msg: "Order updated", msj: 'Pedido actualizado' });
        return res.status(404).json({ msg: "Order not update", msj: 'pedido no actualizado' });
    },

    updateOrderActivate: async (req, res) => {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { state: 1 });

        if (updatedOrder) return res.status(201).json({ msg: 'Order updated and actived', msj: 'Pedido activado' });
        
        return res.status(404).json({ msg: "Order not update", msj: 'pedido no actualizado' });

    },

    updateOrderDesactivate: async (req, res) => {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { state: 0 });

        if (updatedOrder) return res.status(201).json({ msg: 'Order updated and inactived', msj: 'Pedido desactivado' });
        
        return res.status(404).json({ msg: "Order not update", msj: 'Pedido no actualizado' });
    },

    deleteOrderById: async (req, res) => {
        await Order.findByIdAndDelete(req.params.id);
        
        return res.status(201).json({ msg: 'Order update and deleted', msj: 'Pedido eliminado' });
    }
}

export {
    ordersHttp
}