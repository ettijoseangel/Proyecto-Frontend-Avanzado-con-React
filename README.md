# 🤖 ChatGPT Clone (Frontend & Backend Course)

Este repositorio contiene el desarrollo paso a paso de un clon de ChatGPT, desde el frontend con React hasta el backend con Express, bases de datos y consumo de Inteligencia Artificial local.

---

## 📍 Estado Actual: Parte 7 - CRUD Básico con LowDB (parte-7)

### 🎯 Objetivo de esta fase
Implementar persistencia de datos utilizando una base de datos ligera basada en JSON (LowDB). Desarrollar las operaciones fundamentales (CRUD) en el servidor para almacenar, recuperar y eliminar el historial de chat, conectando estos endpoints con la interfaz de React.

### 🛠️ Tecnologías y Herramientas implementadas
*   **LowDB:** Configuración del adaptador `FileSync` para gestionar un archivo `db.json` local como base de datos.
*   **Operaciones CRUD:**
    *   **Read (GET):** Endpoint `/api/messages` para cargar el historial persistente al inicializar la aplicación.
    *   **Create (POST):** Modificación del endpoint `/api/chat` para registrar secuencialmente el prompt del usuario y la respuesta de DeepSeek R1 en el almacenamiento local.
    *   **Delete (DELETE):** Creación de un endpoint para truncar la base de datos y limpiar la interfaz gráfica desde la barra lateral.

### 📝 Historial de Ramas
- [x] **rama-1:** Setup inicial, Tailwind y UI con Hook Form.
- [x] **parte-2:** Consumo de APIs y Ollama (useEffect / Custom Hook).
- [x] **parte-3:** State Management (useContext).
- [x] **parte-4:** Introducción a Backend (Servidor Express 'Hola Mundo').
- [x] **parte-5:** Endpoints en Express y Middlewares.
- [x] **parte-6:** API REST y consumo de IA en el Back.
- [x] **parte-7:** CRUD Básico (Lowdb).
- [ ] **parte-8:** *(Próximamente)* Base de datos con MongoDB y Dotenv.