import 'dotenv/config';

// Export environment variables
export default {
    port: process.env.PORT,
    mongoURL: process.env.MONGO_URL,
    mailUser: process.env.MAIL_USER,
    mailPass: process.env.MAIL_PASS
}