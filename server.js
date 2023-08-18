const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Import file db.js
require("./db.js");

const app = express();
const port = 4000;

// Mengaktifkan CORS
app.use(cors());

// Menampilkan log request ke console
app.use(morgan("tiny"));

// Mengkonfigurasi app agar menerima data JSON
app.use(express.json());

// Memulai server pada port 4000
app.listen(port, () => {
  console.log("Server Berhasil running pada port : " + port);
});
