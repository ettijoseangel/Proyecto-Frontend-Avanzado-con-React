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
// app.post('/api/chat', (req, res) => {
//     // Gracias a express.json(), podemos acceder directamente a req.body
//     const mensajeUsuario = req.body.prompt;

//     // Validacion rapida
//     if (!mensajeUsuario) {
//         return res.status(400).json({ error: 'El prompt es requerido' });
//     }

//     // Imprimimos en la consola del servidor los datos que llegaron
//     console.log('Mensaje recibido:', mensajeUsuario);

//     // Respondemos al cliente confirmando la recepcion
//     res.status(200).json({
//         status: 'exito',
//         mensaje: `Backend dice: He recibido tu texto -> "${mensajeUsuario}"`
//     });
// });

// ENDPOINT RESTful
app.post('/api/chat', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'El prompt es requerido' });
    }
    console.log(`Consultando a DeepSeek R1... (Prompt: "${prompt}")`);

    try {
        // 1. El backend hace la llamada a la IA local (Ollama)
        const ollamaResponse = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'deepseek-r1:1.5b',
                prompt: prompt,
                stream: false // Esperamos a que piense toda la respuesta
            })
        });

    if (!ollamaResponse.ok) {
        throw new Error('Ha fallado la conexión con Ollama');
    }

    // 2. Extraemos el JSON que nos da Ollama
    const data = await ollamaResponse.json();
    console.log('Respuesta generada exitosamente.');

    // 3. Formateamos la respuesta y se la enviamos a React
    res.status(200).json({
        response: data.response
    });

    } catch (error) {
        console.error('Error en el servidor:', error.message);
        res.status(500).json({ error: 'Hubo un problema procesando la solicitud a la IA' });
    }
});


// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo exitosamente en http://localhost:${PORT}`);
});