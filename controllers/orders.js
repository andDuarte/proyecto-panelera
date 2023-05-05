import { ordersModel } from '../models/orders.js';

const ordersHttp = {
    ordersGet: async(req, res) => {
        const orders = await ordersModel.find();

        return res.json({pedidos: orders});
    },
    
    ordersPost: async(req, res) => {
        const { customerName, documentType, documentNumber, phoneNumber, email, descriptionOfPanela,  preferencesOfPanela, orderStatus, quantityOfPanela, address } = req.body;

        const orders = new ordersModel({
            customerName: customerName,
            documentType: documentType,
            documentNumber: documentNumber,
            phoneNumber: phoneNumber,
            email: email,
            descriptionOfPanela: descriptionOfPanela,
            preferencesOfPanela: preferencesOfPanela,
            orderStatus: orderStatus,
            quantityOfPanela: quantityOfPanela,
            address: address
        });

        await orders.save();

        return res.json({msj: 'Pedido creado'})
    },

    ordersPut: async(req, res) => {
        const { id } = req.params;

        const { customerName, documentType, documentNumber, phoneNumber, email, descriptionOfPanela,  preferencesOfPanela, orderStatus, quantityOfPanela, address } = req.body;

        const orders = await ordersModel.findByIdAndUpdate(id, {
            customerName: customerName,
            documentType: documentType,
            documentNumber: documentNumber,
            phoneNumber: phoneNumber,
            email: email,
            descriptionOfPanela: descriptionOfPanela,
            preferencesOfPanela: preferencesOfPanela,
            orderStatus: orderStatus,
            quantityOfPanela: quantityOfPanela,
            address: address
        });

        await orders.save();

        return res.json({msj: 'Pedido actualizado'});
    },

    ordersActivate: async(req, res) => {
        const { id } = req.params;

        const orders = await ordersModel.findByIdAndUpdate(id, {state: 1});

        await orders.save();

        return res.json({msj: 'Pedido activado'});
    },

    ordersDesactivate: async(req, res) => {
        const { id } = req.params;

        const orders = await ordersModel.findByIdAndUpdate(id, {state: 0});

        await orders.save();

        return res.json({msj: 'Pedido desactivado'});
    },
}

export{
    ordersHttp
}