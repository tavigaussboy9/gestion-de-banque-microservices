const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb://mongo:27017/accountdb', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => {
  console.log(`Account service running on port ${PORT}`);
});