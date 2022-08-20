import bcryptjs, { hash } from 'bcryptjs';

export class Encryption {

    encrypt;
    
    constructor(encrypt){
        this.encrypt = encrypt;
    }

    // To hash a password
    async hash(){
        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(this.encrypt, salt);

        return hash;
    }

    // To check a password
    compare(){
        const compare = bcryptjs.compare(this.encrypt, hash);

        return compare;
    }
}