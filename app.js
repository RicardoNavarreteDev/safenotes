const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('<h1>Notas seguras (o no tan seguras)</h1>')
})

// Cambia esta línea:
app.listen(3000, '0.0.0.0', () =>{
    console.log('SafeNotes corriendo en http://localhost:3000');
})