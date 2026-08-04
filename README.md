# 🤖 ChatGPT Clone (Frontend & Backend Course)

Este repositorio contiene el desarrollo paso a paso de un clon de ChatGPT, desde el frontend con React hasta el backend con Express, bases de datos en la nube y consumo de Inteligencia Artificial local.

---

## 📍 Estado Actual: Parte 8 - Integración con MongoDB (parte-8)

### 🎯 Objetivo de esta fase
Reemplazar el almacenamiento local (JSON) por un motor de base de datos NoSQL profesional en la nube. Configurar la seguridad del servidor ocultando credenciales e implementar operaciones con Mongoose para manejar los documentos del chat.

### 🛠️ Tecnologías y Herramientas implementadas
*   **MongoDB Atlas:** Despliegue de un clúster de base de datos en la nube para el almacenamiento persistente y escalable del historial de chat.
*   **Mongoose (ODM):** Modelado de datos estructurado mediante esquemas (`Schema`) para definir la forma de los documentos (`text`, `sender`, `timestamp`).
*   **Dotenv:** Implementación de variables de entorno (`.env`) para mantener seguras las cadenas de conexión y configuraciones sensibles del servidor.
*   **Resolución de DNS:** Configuración de cadenas de conexión clásicas para hacer *bypass* a bloqueos de registros SRV por parte de ISPs.

### 📝 Historial de Ramas
- [x] **rama-1:** Setup inicial, Tailwind y UI con Hook Form.
- [x] **parte-2:** Consumo de APIs y Ollama (useEffect / Custom Hook).
- [x] **parte-3:** State Management (useContext).
- [x] **parte-4:** Introducción a Backend (Servidor Express 'Hola Mundo').
- [x] **parte-5:** Endpoints en Express y Middlewares.
- [x] **parte-6:** API REST y consumo de IA en el Back.
- [x] **parte-7:** CRUD Básico (Lowdb).
- [x] **parte-8:** Base de datos en la nube con MongoDB y Dotenv.

---

### 🚀 Cómo ejecutar este proyecto completo

1. Clona el repositorio e instala las dependencias tanto en la raíz como en la carpeta `/backend`.
2. Renombra el archivo `/backend/.env.example` a `.env` y coloca tu propia cadena de conexión de MongoDB.
3. Asegúrate de tener **Ollama** corriendo localmente con el modelo `deepseek-r1:1.5b`.
4. Abre dos terminales:
   - Terminal 1 (Raíz): Ejecuta `npm run dev` para levantar el frontend de React (puerto 3000).
   - Terminal 2 (Backend): Ejecuta `node index.js` para levantar el servidor Express (puerto 4000).