const express = require('express');
const app = express();

app.use('/api', require('./routers/api'));
app.all('/' , (req, res) =>
{
    res.send('Some many text');
})
app.listen(3030, '127.0.0.1', () =>
{
    console.log('Server started ...');
})