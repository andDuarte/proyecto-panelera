import Billing from '../models/billing.js';

const billingsHttp = {
    getBillings: async (req, res) => {
        const billings = await Billing.find();

        if (billings.length == 0) {
            return res.status(404).json({ msg: 'no existen facturacines en la base de datos' });
        }

        return res.json(billings);
    },

    createBilling: async (req, res) => {
        const newBilling = new Billing(req.body);

        await newBilling.save();

        return res.status(201).json({ msg: "Billing created", msj: 'Factura creada' })
    },

    updateBillingById: async (req, res) => {
        const updateBilling = await Billing.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.status(204).json({ msg: "Billing updated", msj: 'Factura actualizado' });
    },

    updateBillingActivate: async (req, res) => {
        const isModified = await Billing.findByIdAndUpdate(req.params.id, { state: 1 });

        if (isModified) {
            return res.status(204).json({ msg: "Billing updated and actived", msj: 'Factura activada' });
        } else {
            return res.status(404).json({ msg: "Billing not update", msj: 'Factura no actualizada' });
        }
    },

    updateBillingDesactivate: async (req, res) => {
        const isModified = await Billing.findByIdAndUpdate(req.params.id, { state: 0 });

        if (isModified) return res.status(204).json({ msg: "Billing updated and inactived", msj: 'Factura desactivada' });

        return res.status(404).json({ msg: "Billing not update", msj: 'Factura no actualizada' });
    },

    deleteBillingById: async (req, res) => {
        await Billing.findByIdAndDelete(req.params.id)
        return res.status(204).json({ msg: "Billing updated and deleted", msj: 'Factura eliminada' });
    }
}

export {
    billingsHttp
}