# 🤖 ChatGPT Clone (Frontend & Backend Course)

Este repositorio contiene el desarrollo paso a paso de un clon de ChatGPT, desde el frontend con React hasta el backend con Express, bases de datos y consumo de Inteligencia Artificial local.

---

## 📍 Estado Actual: Parte 6 - API REST (parte-6)

### 🎯 Objetivo de esta fase
Trasladar la lógica de consumo de la Inteligencia Artificial al lado del servidor para ocultar la implementación y mejorar la seguridad, dejando al frontend únicamente como una capa de presentación.

### 🛠️ Tecnologías y Herramientas implementadas
*   **API RESTful:** Creación de un endpoint intermedio en Express para procesar el *prompt* del usuario y gestionar la comunicación con servicios externos.
*   **Fetch en Node.js:** Consumo del motor local de Ollama (modelo `deepseek-r1:1.5b`) directamente desde el backend.
*   **Refactorización de Hooks:** Modificación del custom hook `useOllamaHook` en React para redirigir las peticiones hacia el puerto 4000 (Express) en lugar del puerto 11434 (Ollama), obteniendo la respuesta en un solo bloque (sin streaming).

### 📝 Historial de Ramas
- [x] **rama-1:** Setup inicial, Tailwind y UI con Hook Form.
- [x] **parte-2:** Consumo de APIs y Ollama (useEffect / Custom Hook).
- [x] **parte-3:** State Management (useContext).
- [x] **parte-4:** Introducción a Backend (Servidor Express 'Hola Mundo').
- [x] **parte-5:** Endpoints en Express y Middlewares.
- [x] **parte-6:** API REST y consumo de IA en el Back.
- [ ] **parte-7:** *(Próximamente)* CRUD Básico (Lowdb).
- [ ] **parte-8:** *(Próximamente)* Base de datos con MongoDB y Dotenv.