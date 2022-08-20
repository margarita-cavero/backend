import { Auth } from "../helpers/auth";
import { GenerateJWT } from "../helpers/generateJWT";
import { Encryption } from "../helpers/encryption";

export const register = async (req, res) => {

    try {

        const { email, password } = req.body;

        // Encrypting the password
        const encryptPassword = new Encryption(password);
        const hash = await encryptPassword.hash();

        // Register user
        const auth = new Auth(email, hash);
        const register = await auth.register();

        // Create JWT
        const jwt = new GenerateJWT(register._id);
        const JWTgenerated = jwt.sign();

        return res.status(201).json({
            register,
            JWTgenerated
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: error
        });
    };
};

export const login = async (req, res) => {

    try {
        const { email, password } = req.body;

        const auth = new Auth(email, password);
        const login = await auth.login();

        if (login === 'Wrong email'){
            return res.status(400).json({
                msg: 'The email address entered is not registered 😑'
            });
        }

        const encryption = new Encryption(login.password, password);
        const validPassword = await encryption.compare();

        if(validPassword === false){
            return res.status(400).json({
                msg: 'Incorrect password 😑'
            });
        };

        // Create JWT
        const jwt = new GenerateJWT(login._id);
        const JWTgenerated = jwt.sign();

        res.status(201).json({
            msg: 'Successful authentication 🥳🎉🎊',
            JWTgenerated
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error
        });
    };
};