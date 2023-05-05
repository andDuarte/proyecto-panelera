import { ordersModel } from '../models/orders.js';

const ordersHttp = {
    ordersGet: async(req, res) => {
        const orders = await ordersModel.find();

        if(orders.length == 0) {
            return res.json({msg: 'no existen pedidos en la base de datos'});
        }

        return res.json({pedidos: orders});
    },
    
    ordersPost: async(req, res) => {
        const { customerName, documentType, documentNumber, phoneNumber, email, descriptionOfPanela,  preferencesOfPanela, orderStatus, quantityOfPanela, sendAddress } = req.body;

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
            sendAddress: sendAddress
        });

        await orders.save();

        return res.json({msg: 'Pedido creado'})
    },

    ordersPut: async(req, res) => {
        const { id } = req.params;

        const { customerName, documentType, documentNumber, phoneNumber, email, descriptionOfPanela,  preferencesOfPanela, orderStatus, quantityOfPanela, sendAddress } = req.body;

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
            sendAddress: sendAddress
        });

        await orders.save();

        return res.json({msg: 'Pedido actualizado'});
    },

    ordersActivate: async(req, res) => {
        const { id } = req.params;

        const orders = await ordersModel.findByIdAndUpdate(id, {state: 1});

        await orders.save();

        return res.json({msg: 'Pedido activado'});
    },

    ordersDesactivate: async(req, res) => {
        const { id } = req.params;

        const orders = await ordersModel.findByIdAndUpdate(id, {state: 0});

        await orders.save();

        return res.json({msg: 'Pedido desactivado'});
    },
}

export{
    ordersHttp
}