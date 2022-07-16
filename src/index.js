import Server from './models/Server';
import 'dotenv/config';

const server = new Server();

server.listen();

// TODO Registro de admins.
// TODO Guardar el formulario en la BD.
// TODO Nodemailer.
// TODO Trabajos.