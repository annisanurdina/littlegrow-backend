const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '34.101.101.88',
  port: 3306,
  user: 'root',
  password: 'ch123',
  database: 'data_anak',
});

connection.connect((err) => {
  if (err) {
    console.error('Error koneksi ke database:', err);
    throw err;
  }
  console.log('Terhubung ke database MySQL');
});

module.exports = connection;