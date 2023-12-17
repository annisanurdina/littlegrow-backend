const express = require('express');
const router = express.Router();
const { addData, getData, deleteData, updateData } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/',
    handler: addData,
  },
  {
    method: 'GET',
    path: '/',
    handler: getData,
  },
  {
    method: 'DELETE',
    path: '/',
    handler: deleteData,
  },
  {
    method: 'PUT',
    path: '/',
    handler: updateData,
  },
];

// Masukkan rute-rute ke dalam objek router
routes.forEach((route) => {
  router[route.method.toLowerCase()](route.path, route.handler);
});

module.exports = router;
