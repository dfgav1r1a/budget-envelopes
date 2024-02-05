const express = require('express');
const app = express();
const PORT = 3000;
const envelopes= require('./envelopesData');

app.use(express.json());

app.get('/envelopes', (req, res, next) => {
 res.send(envelopes);
});

app.post('/envelopes', (req, res, next) => {
    const payload = req.body;
    envelopes.envelopesData.data.push(payload);
    console.log(envelopes);
    res.send(envelopes)
});

app.listen(PORT, () => {
    console.log(`Listening in port ${PORT}`);
});



