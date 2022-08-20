import jwt from 'jsonwebtoken';

export class JWT {
    payload;

    constructor(payload){
        this.payload = payload;
    }

    sign(){
        // const sign = jwt.sign(this.payload, process.env.)
    }
}