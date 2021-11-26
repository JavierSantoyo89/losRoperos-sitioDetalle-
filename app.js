const express = require('express')
const app = express()
const path = require('path')
const port = 1689

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/detalleProducto.html"))
});

app.listen(port,()=>{
    console.log('Servidor activado en el puerto: http://localhost:'+port);
});
