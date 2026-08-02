# 🤖 ChatGPT Clone (Frontend & Backend Course)

Este repositorio contiene el desarrollo paso a paso de un clon de ChatGPT, desde el frontend con React hasta el backend con Express, bases de datos y consumo de Inteligencia Artificial local.

---

## 📍 Estado Actual: Parte 5 - Endpoints y Middlewares (parte-5)

### 🎯 Objetivo de esta fase
Evolucionar el servidor básico para que sea capaz de recibir y procesar datos enviados desde el frontend. Se introduce el concepto de Middlewares como interceptores de peticiones HTTP.

### 🛠️ Tecnologías y Herramientas implementadas
*   **Express.json():** Middleware nativo para parsear el cuerpo de las peticiones (`req.body`) y convertir la carga útil en objetos JavaScript manejables.
*   **CORS (Cross-Origin Resource Sharing):** Implementación del middleware `cors` para autorizar las peticiones provenientes del puerto del cliente (Vite en puerto 3000) hacia el servidor (puerto 4000).
*   **Métodos HTTP:** Creación de un endpoint `POST /api/chat` diseñado específicamente para la recepción de los *prompts* del usuario.

### 📝 Historial de Ramas
- [x] **rama-1:** Setup inicial, Tailwind y UI con Hook Form.
- [x] **parte-2:** Consumo de APIs y Ollama (useEffect / Custom Hook).
- [x] **parte-3:** State Management (useContext).
- [x] **parte-4:** Introducción a Backend (Servidor Express 'Hola Mundo').
- [x] **parte-5:** Endpoints en Express y Middlewares.
- [ ] **parte-6:** *(Próximamente)* API REST y consumo de IA en el Back.
- [ ] **parte-7:** *(Próximamente)* CRUD Básico (Lowdb).
- [ ] **parte-8:** *(Próximamente)* Base de datos con MongoDB y Dotenv.