import connection from './database/connection.js';

const testConnection = async () => {
  try {
    const [rows] = await connection.query('SELECT 1 + 1 AS result');
    console.log('✅ Database Connected!');
    console.log('Test Query Result:', rows);
    console.log(process.env.DB_NAME);
  } catch (error) {
    console.error('❌ Database Connection Failed');
    console.error("Error Message:", error.message);
    console.error("Error Code:", error.code);
  }
};

testConnection();