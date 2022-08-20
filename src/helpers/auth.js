import { User } from "../models/User";

export class Auth {
    email = '';
    password = '';

    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    async register() {
        // Create new user
        const user = new User({
            email: this.email,
            password: this.password
        });
        const saveUser = await user.save();

        return {
            saveUser
        };
    };

    async login() {
        // Check if the user exists with the email
        const userDB = await User.findOne({email: this.email});

        if(!userDB){
            return 'Wrong email';
        };

        return userDB;
    };

}