const express = require('express');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routes/transactionRoutes');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use('/api', transactionRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app;
