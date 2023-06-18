import Billing from '../models/billing.js';

import Pedido from '../models/order.js';

const billingsHttp = {
    getBillings: async (req, res) => {
        const billings = await Billing.find().populate('order');

        // if (billings.length == 0) {
        //     return res.status(404).json({ msg: 'No records found', msj: 'No se encontraron registros' });
        // }

        return res.json(billings);
    },

    createBilling: async (req, res) => {
        const { order, payment } = req.body;

        const orderTemp = await Pedido.findOne({_id: order});
        
        let totalWorth = 0;

        for (let position = 0; position < orderTemp.products.length; position++) {
            totalWorth = totalWorth + (orderTemp.products[position].quantity * orderTemp.products[position].worth);
        }

        await Pedido.findByIdAndUpdate(order, {orderStatus: 'entregado'});

        const newBilling = new Billing({order: order, payment: payment, totalWorth: totalWorth});

        await newBilling.save();

        return res.status(201).json({ msg: "Billing created", msj: 'Factura creada' })
    },

    updateBillingById: async (req, res) => {
        const { order, payment } = req.body;

        const orderTemp = await Pedido.findOne({_id: order});
        
        let totalWorth = 0;

        for (let position = 0; position < orderTemp.products.length; position++) {
            totalWorth = totalWorth + (orderTemp.products[position].quantity * orderTemp.products[position].worth);
        }

        const updateBilling = await Billing.findByIdAndUpdate(req.params.id, {order: order, payment: payment, totalWorth: totalWorth}, { new: true });

        return res.status(201).json({ msg: "Billing updated", msj: 'Factura actualizado' });
    },

    updateBillingActivate: async (req, res) => {
        const updatedBilling = await Billing.findByIdAndUpdate(req.params.id, { state: 1 });

        if (updatedBilling) {
            return res.status(201).json({ msg: "Billing updated and actived", msj: 'Factura activada' });
        } else {
            return res.status(404).json({ msg: "Billing not update", msj: 'Factura no actualizada' });
        }
    },

    updateBillingDesactivate: async (req, res) => {
        const updatedBilling = await Billing.findByIdAndUpdate(req.params.id, { state: 0 });

        if (updatedBilling) return res.status(201).json({ msg: "Billing updated and inactived", msj: 'Factura desactivada' });

        return res.status(404).json({ msg: "Billing not update", msj: 'Factura no actualizada' });
    },

    deleteBillingById: async (req, res) => {
        await Billing.findByIdAndDelete(req.params.id);
        
        return res.status(201).json({ msg: "Billing updated and deleted", msj: 'Factura eliminada' });
    }
}

export {
    billingsHttp
}