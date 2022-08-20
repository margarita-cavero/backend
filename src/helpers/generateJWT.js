import jwt from 'jsonwebtoken';

import config from '../config';

export class GenerateJWT {
    payload;

    constructor(payload){
        this.payload = payload;
    }

    sign(){
        const sign = jwt.sign({id: this.payload}, config.privateKeyJWT, {
            expiresIn: '4h'
        });

        return sign;
    };

    validate(){
        jwt.verify(this.payload, config.privateKeyJWT);
    };
};