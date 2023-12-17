const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing body dari request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const routes = require('./routes');

// Routing API
app.use('/api', routes);

// Route untuk halaman tidak ditemukan (404)
app.use((req, res) => {
  res.status(404).send('Halaman tidak ditemukan');
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
