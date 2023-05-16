import TypePay from '../models/typePay.js'

const typePayHttp = {
    typePayGet: async(req, res) => {
        const typePay = await TypePay.find();

        if(typePay.length == 0) {
            return res.json({msg: 'no existen personas en la base de datos'});
        }

        return res.json({tipoPago: typePay});
    },

    createTypePay: async(req, res)=>{
        const typePay =new TypePay(req.body)
        await typePay.save();

        return res.json({msg:'tipo de pago hecho'})
    },
    TypePayPut: async(req, res) => {
        const { id } = req.params;
 
        const { name, description, amount, payCategory } = req.body;

        // const typePay = await TypePay.find({_id: id});

        const typePay = await TypePay.findByIdAndUpdate(id, {name:name, description:description, amount:amount, payCategory:payCategory});
 
        typePay.save()
        return res.json({msg: 'typo de pago actulizado'});
    },
    TypePayActivate: async(req, res) => {
        const { id } = req.params;

        const typePay = await TypePay.findByIdAndUpdate(id, {state: 1});

        await typePay.save();

        return res.json({msg: 'tipo de pago activado'});
    },

    TypePayDesactivate: async(req, res) => {
        const { id } = req.params;

        const typePay = await TypePay.findByIdAndUpdate(id, {state: 0});

        await typePay.save();

        return res.json({msg: 'tipo de pago desactivado'});
    },

}
export{
    typePayHttp
}