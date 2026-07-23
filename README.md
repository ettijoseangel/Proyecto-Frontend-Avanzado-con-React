# 🤖 ChatGPT Clone (Frontend & Backend Course)

Este repositorio contiene el desarrollo paso a paso de un clon de ChatGPT. El proyecto es una aplicación Fullstack que abarca desde la creación del frontend con React hasta la implementación de un backend con Express, bases de datos (MongoDB) y el consumo de modelos de IA locales mediante Ollama.

Cada rama representa un módulo de aprendizaje independiente.

---

## 📍 Estado Actual: Parte 2 - Consumo de APIs y Ollama (parte-2)

### 🎯 Objetivo de esta fase
Desacoplar la lógica de conexión asíncrona creando un Custom Hook y consumir el servicio local de Inteligencia Artificial (Ollama) para recibir respuestas de DeepSeek R1 en tiempo real mediante *streaming*.

### 🛠️ Tecnologías y Herramientas implementadas
*   **Ollama + DeepSeek R1:** Ejecución local del LLM (modelo de 1.5b) consumido a través de `http://localhost:11434`.
*   **Custom Hooks:** Creación de `useOllamaHook.js` para abstraer la lógica de `fetch`, estado de carga (`loading`), errores y la reconstrucción de los fragmentos de la respuesta (`stream`).
*   **Zod + Hook Form:** Implementación de validación estricta para evitar el envío de prompts vacíos o excesivamente largos.
*   **CSS Grid:** Reestructuración del layout principal en `main.jsx` para integrar el componente de barra lateral (`ChatHistory`).

### 📝 Historial de Ramas
- [x] **rama-1:** Setup inicial, Tailwind y UI con Hook Form.
- [x] **parte-2:** Consumo de APIs y Ollama (useEffect / Custom Hook).
- [ ] **parte-3:** *(Próximamente)* State Management (useContext).
- [ ] **parte-4:** *(Próximamente)* Introducción a Backend (Teoría).
- [ ] **parte-5:** *(Próximamente)* Servidor con Express.
- [ ] **parte-6:** *(Próximamente)* API REST y consumo de IA en el Back.
- [ ] **parte-7:** *(Próximamente)* CRUD Básico (Lowdb).
- [ ] **parte-8:** *(Próximamente)* Base de datos con MongoDB y Dotenv.

---

### 🚀 Cómo correr el proyecto en esta rama

1. Asegúrate de tener [Ollama](https://ollama.com/) instalado y el modelo descargado (`ollama run deepseek-r1:1.5b`).
2. Clona el repositorio.
3. Posiciónate en la rama: `git checkout parte-2`
4. Instala las dependencias: `npm install`
5. Levanta el servidor: `npm run dev`