import {usersModel} from '../models/users.js'

const usersHttp={
    usersGet: async(req,res) =>{
        const users = await usersModel.find()
        res.json ({users:users})
    },

    usersGetQuery: async(req,res)=>{
        const {id}=req.params
        if (!id) {
            res.json({msj:'id es incorrecto'})
        }
        const users=await usersModel.find({_id:id})
        res.json({users:users})
    },
    usersPost: async(req,res)=>{
        const{name,identification,email,password,user_type,eps}= req.body;

        const users= new usersModel({name:name, identification:identification, email:email , password:password, user_type:user_type, eps:eps })
    
        users.save()

        res.json({msj:'usuario creado'})
    },
    usersPut: async (req,res)=>{
        const {id}=req.params;
        const { name,identification,email,password,user_type,eps } = req.body

        const users = await usersModel.findByIdAndUpdate(id,{name,identification,email,password,user_type,eps})
        await users.save()
        res.json({msj: "usuario actualizado"})
    },
    
    usersState: async (req,res)=>{
        console.log('lk')
        const { id } = req.params
        const { state } = req.body

        let users = null
        try {
            if (state == "inactivo") {
                console.log(id)
                users = await usersModel.findByIdAndUpdate(id, { state:0 })
        
            }else{
                console.log('lk2')
                console.log(id)
                users = await usersModel.findByIdAndUpdate(id,{ state:1 })
            }
            if(users){
                await users.save();
                res.json({msj:`el estado del usuario es: ${state}` })
            }
    
            return res.send('Michael es una lk') //agregar un else
    
        } catch (error) {
         console.log(error)   
        }

 
    }
}


export {usersHttp}