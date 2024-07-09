const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fashionRoutes = require('./routes/fashionRoutes');
const fashionItemRoutes = require('./routes/fashionItemRoutes');

const app = express();
const PORT = 5000;
const MONGO_URI = 'your_mongodb_uri_here';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.use('/api/fashion', fashionRoutes);
app.use('/api/items', fashionItemRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
