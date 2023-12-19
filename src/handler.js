const connection = require('./connection');

const addData = (req, res) => {
  const { nama_anak, jenis_kelamin, berat_badan, tinggi_badan, umur, riwayat_penyakit, jarak_kelahiran, lingkar_lengan, lingkar_kepala, status_user, user_id, profile_id } = req.body; // Ganti dengan nama kolom yang sesuai di tabel Anda
  const insertQuery = 'INSERT INTO input (nama_anak, jenis_kelamin, berat_badan, tinggi_badan, umur, riwayat_penyakit, jarak_kelahiran, lingkar_lengan, lingkar_kepala, status_user, user_id, profile_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'; // Ganti dengan nama tabel dan kolom yang sesuai

  connection.query(insertQuery, [nama_anak, jenis_kelamin, berat_badan, tinggi_badan, umur, riwayat_penyakit, jarak_kelahiran, lingkar_lengan, lingkar_kepala, status_user, user_id, profile_id], (err, result) => {
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

const getByProfileId = (req, res) => {
    const profile_id = req.params.profileId;
    const selectQuery = 'SELECT * FROM input WHERE profile_id = ?'; // Ganti dengan nama tabel yang sesuai
  
    connection.query(selectQuery, [profile_id], (err, results) => {
      if (err) {
        console.error('Gagal mengambil data:', err);
        res.status(500).json({ error: 'Gagal mengambil data' });
        return;
      }
      console.log('Data berhasil diambil:', results);
      res.status(200).json(results);
    });
  };
  
const getByUserId = (req, res) => {
    const user_id = req.params.userId;
    const selectQuery = 'SELECT * FROM input WHERE user_id = ?'; // Ganti dengan nama tabel yang sesuai
  
    connection.query(selectQuery, [user_id], (err, results) => {
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
  const profile_id = req.params.profileId; // Ganti dengan parameter yang sesuai dengan kebutuhan Anda
  const deleteQuery = 'DELETE FROM input WHERE profile_id = ?'; // Ganti dengan nama tabel dan kolom yang sesuai

  connection.query(deleteQuery, [profile_id], (err, result) => {
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
  const {profile_id} = req.params;
  const { nama_anak, jenis_kelamin, berat_badan, tinggi_badan, umur, riwayat_penyakit, jarak_kelahiran, lingkar_lengan, lingkar_kepala, status_user, user_id } = req.body;
  const updateQuery = 'UPDATE input SET nama_anak=?, jenis_kelamin=?, berat_badan=?, tinggi_badan=?, umur=?, riwayat_penyakit=?, jarak_kelahiran=?, lingkar_lengan=?, lingkar_kepala=?, status_user=?, user_id=?  WHERE profile_id=?';

  connection.query(updateQuery, [nama_anak, jenis_kelamin, berat_badan, tinggi_badan, umur, riwayat_penyakit, jarak_kelahiran, lingkar_lengan, lingkar_kepala, status_user, user_id, profile_id], (err, result) => {
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
    getByProfileId,
    getByUserId,
    deleteData,
    updateData
};
