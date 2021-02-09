const express = require('express');
const app = express();
const path = require('path');
const publicFolderPath = path.resolve(__dirname, './public');

app.use(express.static(publicFolderPath));

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname + '/views/product-detail.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname + '/views/login.html'));
});