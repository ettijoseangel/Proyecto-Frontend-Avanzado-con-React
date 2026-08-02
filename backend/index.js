const express = require('express');
const cors = require('cors');   // Importamos el middleware CORS

const app = express();
const PORT = 4000;

// ==========================================
// MIDDLEWARES (Las aduanas de nuestra app)
// ==========================================

// Permititmos que otros puertos (como el 3000 de React) nos hagan peticiones
app.use(cors());

// Permite que Express entienda los datos enviados en formato JSON
app.use(express.json());

// ==========================================
// ENDPOINTS (Nuestras rutas)
// ==========================================

// GET: Hola Mundo
app.get('/', (req, res) => {
    res.send('Hola Mundo desde el backend del clon de ChatGPT');
});

// POST: Recibir datos
app.post('/api/chat', (req, res) => {
    // Gracias a express.json(), podemos acceder directamente a req.body
    const mensajeUsuario = req.body.prompt;

    // Validacion rapida
    if (!mensajeUsuario) {
        return res.status(400).json({ error: 'El prompt es requerido' });
    }

    // Imprimimos en la consola del servidor los datos que llegaron
    console.log('Mensaje recibido:', mensajeUsuario);

    // Respondemos al cliente confirmando la recepcion
    res.status(200).json({
        status: 'exito',
        mensaje: `Backend dice: He recibido tu texto -> "${mensajeUsuario}"`
    });
});


// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo exitosamente en http://localhost:${PORT}`);
});