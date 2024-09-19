require('dotenv').config();
const express = require('express');
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', bookRoutes);

app.listen(PORT, () => console.log('App listening on port:', PORT));
