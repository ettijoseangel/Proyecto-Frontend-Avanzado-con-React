const express = require('express');
const app = express();
const PORT = 4000;

// Primer endpoint
app.get('/', (req, res) => {
    res.send('Hola Mundo desde el backend del clon de ChatGPT');
});

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo exitosamente en http://localhost:${PORT}`);
});