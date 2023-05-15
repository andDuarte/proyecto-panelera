import Order from '../models/order.js';

const ordersHttp = {
    getOrders: async (req, res) => {
        const orders = await Order.find();

        if (orders.length == 0) {
            return res.status(404).json({ msg: 'no existen pedidos en la base de datos' });
        }

        return res.json({ pedidos: orders });
    },

    createOrder: async (req, res) => {
        const newOrder = new Order(req.body);

        await newOrder.save();

        return res.status(201).json({ msg: 'Pedido creado' })
    },

    updateOrderById: async (req, res) => {
        const updateOrder = await Order.findByIdAndUpdate(req.params.id, {
            orderStatus: req.body.orderStatus
        }, {
            new: true
        });

        return res.status(204).json({ msg: 'Pedido actualizado' });
    },

    updateOrderActivate: async (req, res) => {
        const order = await Order.findByIdAndUpdate(req.params.id, { state: 1 });

        // await order.save();

        return res.json({ msg: 'Pedido activado' });
    },

    updateOrderDesactivate: async (req, res) => {
        const orders = await Order.findByIdAndUpdate(req.params.id, { state: 0 });

        // await orders.save();

        return res.json({ msg: 'Pedido desactivado' });
    },

    deleteOrderById: async (req, res) => {
        await Order.findByIdAndDelete(req.params.id)
        return res.status(204).json({ msg: 'Pedido eiminado' });
    }
}

export {
    ordersHttp
}