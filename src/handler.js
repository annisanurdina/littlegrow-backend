const input = require('./connection');
const connection = require('./connection');

const addData = (req, res) => {
  const { nama_anak, jenis_kelamin, berat_badan, tinggi_badan, umur, riwayat_penyakit, jarak_kelahiran } = req.body; // Ganti dengan nama kolom yang sesuai di tabel Anda
  const insertQuery = 'INSERT INTO input (nama_anak, jenis_kelamin, berat_badan, tinggi_badan, umur, riwayat_penyakit, jarak_kelahiran) VALUES (?, ?, ?, ?, ?, ?, ?)'; // Ganti dengan nama tabel dan kolom yang sesuai

  connection.query(insertQuery, [nama_anak, jenis_kelamin, berat_badan, tinggi_badan, umur, riwayat_penyakit, jarak_kelahiran], (err, result) => {
    if (err) {
      console.error('Gagal menambahkan data:', err);
      res.status(500).json({ error: 'Gagal menambahkan data' });
      return;
    }
    console.log('Data berhasil ditambahkan:', result);
    res.status(200).json({ message: 'Data berhasil ditambahkan' });
  });
};

const getData = (req, res) => {
  const selectQuery = 'SELECT * FROM input'; // Ganti dengan nama tabel yang sesuai

  connection.query(selectQuery, (err, results) => {
    if (err) {
      console.error('Gagal mengambil data:', err);
      res.status(500).json({ error: 'Gagal mengambil data' });
      return;
    }
    console.log('Data berhasil diambil:', results);
    res.status(200).json(results);
  });
};

const deleteData = (req, res) => {
  const { nama_anak } = req.params; // Ganti dengan parameter yang sesuai dengan kebutuhan Anda
  const deleteQuery = 'DELETE FROM input WHERE nama_anak = ?'; // Ganti dengan nama tabel dan kolom yang sesuai

  connection.query(deleteQuery, [nama_anak], (err, result) => {
    if (err) {
      console.error('Gagal menghapus data:', err);
      res.status(500).json({ error: 'Gagal menghapus data' });
      return;
    }
    console.log('Data berhasil dihapus:', result);
    res.status(200).json({ message: 'Data berhasil dihapus' });
  });
};

const updateData = (req, res) => {
  const { nama_anak, jenis_kelamin, berat_badan, tinggi_badan, umur, riwayat_penyakit, jarak_kelahiran } = req.body;
  const updateQuery = 'UPDATE input SET jenis_kelamin=?, berat_badan=?, tinggi_badan=?, umur=?, riwayat_penyakit=?, jarak_kelahiran=? WHERE nama_anak=?';

  connection.query(updateQuery, [jenis_kelamin, berat_badan, tinggi_badan, umur, riwayat_penyakit, jarak_kelahiran, nama_anak], (err, result) => {
    if (err) {
      console.error('Gagal memperbarui data:', err);
      res.status(500).json({ error: 'Gagal memperbarui data' });
      return;
    }
    console.log('Data berhasil diperbarui:', result);
    res.status(200).json({ message: 'Data berhasil diperbarui' });
  });
};


module.exports = {
    addData,
    getData,
    deleteData,
    updateData
};