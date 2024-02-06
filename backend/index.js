const express = require('express');
const app = express();
const PORT = 3000;
const envelopes= require('./envelopesData');

app.use(express.json());

app.get('/envelopes', (req, res, next) => {
 res.send(envelopes.envelopesData.data);
});

app.get('/envelopes/envelope/:id', (req, res, next) => {
    const id = Number(req.params.id);
    const envelope = envelopes.envelopesData.data.find(obj => obj.id === id);
    console.log(envelope);
    if (!envelope) res.status(400).send('Envelope not found');
    res.status(200).send(envelope); 
});

app.post('/envelopes', (req, res, next) => {
    const payload = req.body;
    envelopes.envelopesData.data.push(payload);
    console.log(envelopes);
    res.send(envelopes)
});

app.put('/envelopes/envelope/id', (req, res, next) => {
    const id = Number(req.params.id);

});

app.listen(PORT, () => {
    console.log(`Listening in port ${PORT}`);
});



