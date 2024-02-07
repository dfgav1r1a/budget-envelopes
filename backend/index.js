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
    if (!envelope) res.status(400).send('Envelope not found');
    res.status(200).send(envelope); 
});

app.post('/envelopes', (req, res, next) => {
    const payload = req.body;
    envelopes.envelopesData.data.push(payload);
    res.send(envelopes)
});

app.put('/envelopes/envelope/:id', (req, res, next) => {
    const id = Number(req.params.id);
    const edits = req.body;
    const envelope = envelopes.envelopesData.data.find(obj => obj.id === id);
    if (!envelope) {
        res.status(400).send('Nothing to edit, envelope does not exist');
    } else {
    const index = envelopes.envelopesData.data.indexOf(envelope);
    const saved = envelopes.envelopesData.data.splice(index, 1, edits);
    res.send(`Your edit was successful`);
    }
});

app.delete('/envelopes/envelope/:id', (req, res, next) => {
    const id = Number(req.params.id);
    //finding envelope
    const envelope = envelopes.envelopesData.data.find(obj => obj.id === id);
    //finding the index
    const indexToDelete = envelopes.envelopesData.data.indexOf(envelope);
    //deleting the envelope in the data array using its index
    envelopes.envelopesData.data.splice(indexToDelete, 1)
    res.send('deleted')
});

app.listen(PORT, () => {
    console.log(`Listening in port ${PORT}`);
});



