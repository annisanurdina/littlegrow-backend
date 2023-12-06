const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '34.101.101.88',
  port: 3306,
  user: 'root',
  password: 'ch123',
  database: 'data_anak',
  ssl: {
    ca: require('fs').readFileSync('.server-ca.pem'),
  },
});

connection.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Database connected');
});

function getUsers() {
  return connection.query('SELECT * FROM input');
}

function createUser(nama_anak, jenis_kelamin, berat_badan, tinggi_badan, umur, riwayat_penyakit, jarak_kelahiran) {
  return connection.query('INSERT INTO input (nama_anak, jenis_kelamin, berat_badan, tinggi_badan, umur, riwayat_penyakit, jarak_kelahiran) VALUES ($1, $2, $3, $4, $5, $6, $7)', [nama_anak, jenis_kelamin, berat_badan, tinggi_badan, umur, riwayat_penyakit, jarak_kelahiran]);
}

module.exports = data