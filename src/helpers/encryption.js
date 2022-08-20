import bcryptjs from 'bcryptjs';

export class Encryption {

    encrypt = '';
    receivedPassword = '';

    constructor(encrypt, receivedPassword) {
        this.encrypt = encrypt;
        this.receivedPassword = receivedPassword;
    }

    // To hash a password
    async hash() {
        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(this.encrypt, salt);

        return hash;
    }

    // To check a password
    async compare() {
        const compare = await bcryptjs.compare(this.receivedPassword, this.encrypt);

        return compare;
    }
}