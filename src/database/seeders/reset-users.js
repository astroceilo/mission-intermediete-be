import connection from '../connection.js';

await connection.query('TRUNCATE TABLE users');
console.log('Users table cleared');
process.exit();
