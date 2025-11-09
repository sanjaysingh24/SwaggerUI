import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt';
export const createuser = async(req,res)=>{
    const{name,email,password} = req.body;
    try{
        const existingOne = await User.findOne({email});
        if(existingOne){
            return res.status(400).json({message:"User with this email already exists"});
        }
        else{
            const hashpassword = await bcrypt.hash(password,10);
            const newUser = new User({name,email,password:hashpassword});
            await newUser.save();
            const userdata = {
                name:newUser.name,
                email:newUser.email,
                id:newUser._id
            }
            res.status(201).json({message:"User created successfully", user:userdata});
        }
    }catch(err){

        res.status(500).json({message:"Internal Server Error", error: err.message});
    }
}