import TypePay from '../models/typePay.js';

const typePayHttp = {
    typePayGet: async(req, res) => {
        const typePay = await TypePay.find();

        if(typePay.length == 0) {
            return res.json({msg: 'no existen tipos de pago'});
        }

        return res.json({tipoPago: typePay});
    },

    createTypePay: async(req, res)=>{
        const typePay = new TypePay(req.body);
        
        await typePay.save();

        return res.json({msg:'tipo de pago creado'});
    },

    typePayPut: async(req, res) => {
        const { id } = req.params;
 
        const { name, description, amount, payCategory } = req.body;

        // const typePay = await TypePay.find({_id: id});

        const typePay = await TypePay.findByIdAndUpdate(id, {name:name, description:description, amount:amount, payCategory:payCategory});
 
        typePay.save()

        return res.json({msg: 'tipo de pago actulizado'});
    },

    typePayActivate: async(req, res) => {
        const { id } = req.params;

        const typePay = await TypePay.findByIdAndUpdate(id, {state: 1});

        await typePay.save();

        return res.json({msg: 'tipo de pago activado'});
    },

    typePayDesactivate: async(req, res) => {
        const { id } = req.params;

        const typePay = await TypePay.findByIdAndUpdate(id, {state: 0});

        await typePay.save();

        return res.json({msg: 'tipo de pago desactivado'});
    },
}

export{
    typePayHttp
}