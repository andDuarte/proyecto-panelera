import Billing from '../models/billing.js';

const billingsHttp = {
    getBillings: async (req, res) => {
        const billings = await Billing.find().populate('order');

        // if (billings.length == 0) {
        //     return res.status(404).json({ msg: 'No records found', msj: 'No se encontraron registros' });
        // }

        return res.json(billings);
    },

    createBilling: async (req, res) => {
        const newBilling = new Billing(req.body);

        await newBilling.save();

        return res.status(201).json({ msg: "Billing created", msj: 'Factura creada' })
    },

    updateBillingById: async (req, res) => {
        const updateBilling = await Billing.findByIdAndUpdate(req.params.id, req.body, { new: true });

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

        if (updatedBilling) return res.status(204).json({ msg: "Billing updated and inactived", msj: 'Factura desactivada' });

        return res.status(404).json({ msg: "Billing not update", msj: 'Factura no actualizada' });
    },

    deleteBillingById: async (req, res) => {
        await Billing.findByIdAndDelete(req.params.id);
        
        return res.status(204).json({ msg: "Billing updated and deleted", msj: 'Factura eliminada' });
    }
}

export {
    billingsHttp
}