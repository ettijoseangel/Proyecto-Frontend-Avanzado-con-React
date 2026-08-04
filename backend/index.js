require("dotenv").config(); // Cargamos las variables ocultas del .env
const express = require("express");
const cors = require("cors"); // Importamos el middleware CORS

//const low = require("lowdb"); // Importamos LowDB
//const FileSync = require("lowdb/adapters/FileSync"); // Importamos su adaptador de archivos sincrono
const mongoose = require('mongoose'); // Importamos Mongoose para conectarnos a MongoDB

const app = express();
const PORT = process.env.PORT || 4000;

// ==========================================
// CONFIGURACIÓN DE LA BASE DE DATOS
// ==========================================
// const adapter = new FileSync("db.json");
// const db = low(adapter);

// Si el archivo db.json no existe, lo crea con un arreglo de mensajes vacio
//db.defaults({ messages: [] }).write();

// ==========================================
// CONEXIÓN A MONGODB
// ==========================================
mongoose
  .connect(process.env.MONGO_URI, {
    family: 4, // Esto obliga a Node.js a usar IPv4 y suele saltarse el error de red
  })
  .then(() => console.log("🟢 Conectado exitosamente a MongoDB"))
  .catch((err) => console.error("🔴 Error conectando a MongoDB:", err));

// ==========================================
// MIDDLEWARES (Las aduanas de nuestra app)
// ==========================================

// Permititmos que otros puertos (como el 3000 de React) nos hagan peticiones
app.use(cors());

// Permite que Express entienda los datos enviados en formato JSON
app.use(express.json());

// ==========================================
// MODELO DE DATOS (Schema)
// ==========================================
// Le decimos a MongoDB cómo se verá cada mensaje

const messageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  sender: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

// ==========================================
// ENDPOINTS CRUD con MongoDB
// ==========================================

// 1. Leer (GET)
app.get("/api/messages", async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener mensajes" });
  }
});

// 2. Crear (POST)
app.post("/api/chat", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "El prompt es requerido" });

  try {
    // A. Guardamos mensaje del usuario en MongoDB
    await Message.create({ text: prompt, sender: "user" });

    console.log(`Consultando a DeepSeek R1...`);
    const ollamaResponse = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "deepseek-r1:1.5b",
        prompt: prompt,
        stream: false,
      }),
    });

    if (!ollamaResponse.ok) throw new Error("Falló conexión con Ollama");

    const data = await ollamaResponse.json();
    const aiText = data.response;

    // B. Guardamos respuesta de la IA en MongoDB
    await Message.create({ text: aiText, sender: "bot" });

    res.status(200).json({ response: aiText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error procesando la IA" });
  }
});

// 3. Borrar (DELETE)
app.delete("/api/messages", async (req, res) => {
  try {
    await Message.deteleMany({}); // Borra todos los documentos de la coleccion
    res.status(200).json({ status: "Historial borrado con exito" });
  } catch (error) {
    res.status(500).json({ error: "Error al borrar historial" });
  }
});

// ==========================================
// ENDPOINTS CRUD
// ==========================================

//  1. GET historial: Devuelve todo el historial guardado
// app.get("/api/messages", (req, res) => {
//   const messages = db.get("messages").value();
//   res.status(200).json(messages);
// });

//  2. POST chat: Guarda el prompt, consulta a Ollama y guarda la respuesta
// app.post("/api/chat", async (req, res) => {
//   const { prompt } = req.body;

//   if (!prompt) {
//     return res.status(400).json({ error: "El prompt es requerido" });
//   }

//   // A. guardamos el mensaje del USUARIO
//   db.get("messages")
//   .push({ text: prompt, sender: 'user', timestamp: Date.now() })
//   .write();

//   console.log(`Consultando a DeepSeek R1... (Prompt: "${prompt}")`);

//   try {
//     const ollamaResponse = await fetch('http://localhost:11434/api/generate', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             model: 'deepseek-r1:1.5b',
//             prompt: prompt,
//             stream: false
//         })
//     });

//     if (!ollamaResponse.ok) throw new Error('Falló la conexión con Ollama');

//     const data = await ollamaResponse.json();
//     const aiText = data.response;

//     // B. Guardamos la respuesta de la IA
//     db.get('messages')
//     .push({ text: aiText, sender: 'bot', timestamp: Date.now() })
//     .write();

//     console.log('Respuesta guardada en bd.json y enviada al cliente');

//     res.status(200).json({ response: aiText });

//   } catch (error) {
//     console.error('Error en el servidor:', error.message);
//     res.status(500).json({ error: 'Error procesando la IA' });
//   }
// });

//  3. DELETE chat: Limpia el arreglo de mensajes
// app.delete('/api/messages', (req, res) => {
//     db.set('messages', []).write();
//     res.status(200).json({ status: 'Historial borrado con éxito' });
// });

// ==========================================
// INICIO DEL SERVIDOR
// ==========================================
app.listen(PORT, () => {
  console.log(
    `Servidor Express corriendo exitosamente en http://localhost:${PORT}`,
  );
});
