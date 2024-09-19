require('dotenv').config();
const express = require('express');
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const genreRoutes = require('./routes/genreRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', bookRoutes);
app.use('/authors', authorRoutes);
app.use('/genres', genreRoutes);

app.listen(PORT, () => console.log('App listening on port:', PORT));
