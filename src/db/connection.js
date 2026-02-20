import { createPool } from 'mysql2/promise';
import config from '../config/app.config.js';

const connection = createPool({
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    waitForConnections: true,
    connectionLimit: 10,
});

export default connection;