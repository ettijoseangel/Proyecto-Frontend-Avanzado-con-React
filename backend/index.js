const express = require("express");
const cors = require("cors"); // Importamos el middleware CORS

const low = require("lowdb"); // Importamos LowDB
const FileSync = require("lowdb/adapters/FileSync"); // Importamos su adaptador de archivos sincrono

const app = express();
const PORT = 4000;

// ==========================================
// CONFIGURACIÓN DE LA BASE DE DATOS
// ==========================================
const adapter = new FileSync("db.json");
const db = low(adapter);

// Si el archivo db.json no existe, lo crea con un arreglo de mensajes vacio
db.defaults({ messages: [] }).write();

// ==========================================
// MIDDLEWARES (Las aduanas de nuestra app)
// ==========================================

// Permititmos que otros puertos (como el 3000 de React) nos hagan peticiones
app.use(cors());

// Permite que Express entienda los datos enviados en formato JSON
app.use(express.json());

// ==========================================
// ENDPOINTS CRUD
// ==========================================

// 1. GET historial: Devuelve todo el historial guardado
app.get("/api/messages", (req, res) => {
  const messages = db.get("messages").value();
  res.status(200).json(messages);
});

// 2. POST chat: Guarda el prompt, consulta a Ollama y guarda la respuesta
app.post("/api/chat", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "El prompt es requerido" });
  }

  // A. guardamos el mensaje del USUARIO
  db.get("messages")
  .push({ text: prompt, sender: 'user', timestamp: Date.now() })
  .write();

  console.log(`Consultando a DeepSeek R1... (Prompt: "${prompt}")`);

  try {
    const ollamaResponse = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: 'deepseek-r1:1.5b',
            prompt: prompt,
            stream: false
        })
    });

    if (!ollamaResponse.ok) throw new Error('Falló la conexión con Ollama');
    
    const data = await ollamaResponse.json();
    const aiText = data.response;

    // B. Guardamos la respuesta de la IA
    db.get('messages')
    .push({ text: aiText, sender: 'bot', timestamp: Date.now() })
    .write();

    console.log('Respuesta guardada en bd.json y enviada al cliente');

    res.status(200).json({ response: aiText });

  } catch (error) {
    console.error('Error en el servidor:', error.message);
    res.status(500).json({ error: 'Error procesando la IA' });
  }
});

// 3. DELETE chat: Limpia el arreglo de mensajes
app.delete('/api/messages', (req, res) => {
    db.set('messages', []).write();
    res.status(200).json({ status: 'Historial borrado con éxito' });
});

// ==========================================
// INICIO DEL SERVIDOR
// ==========================================
app.listen(PORT, () => {
  console.log(
    `Servidor Express corriendo exitosamente en http://localhost:${PORT}`,
  );
});
