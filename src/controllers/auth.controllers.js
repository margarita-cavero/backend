import { User } from "../models/User";
import { Encryption } from "../helpers/encryption";

export const register = async (req, res) => {
    
    try {
        
        const { email, password } = req.body;
        const encryptPassword = new Encryption(password);
    
        const pass = await encryptPassword.hash();
    
        const user = await new User({ 
            email, 
            password: pass
        });

        const saveUser = await user.save();

        return res.status(201).json({
            saveUser
        });
        
    } catch (error) {
        return res.status(500).json({
            msg: error
        });
    }

};

export const login = async (req, res) => {

    
}