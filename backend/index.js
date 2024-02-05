const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res, next) => {
 res.send('Hey');
});

app.listen(PORT, () => {
    console.log(`Listening in port ${PORT}`);
});



