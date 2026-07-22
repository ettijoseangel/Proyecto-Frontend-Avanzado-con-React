# 🤖 ChatGPT Clone (Frontend & Backend Course)

Este repositorio contiene el desarrollo paso a paso de un clon de ChatGPT. El proyecto es una aplicación Fullstack que abarca desde la creación del frontend con React hasta la implementación de un backend con Express, bases de datos (MongoDB) y el consumo de modelos de IA locales mediante Ollama.

Cada rama representa un módulo de aprendizaje independiente.

---

## 📍 Estado Actual: Parte 1 - Formulario UI Base (rama-1)

### 🎯 Objetivo de esta fase
Configurar el entorno inicial del proyecto y construir la interfaz básica del chat, aplicando técnicas de validación de formularios eficientes para evitar re-renderizados innecesarios en la captura del *prompt*.

### 🛠️ Tecnologías y Herramientas implementadas
*   **Vite + React:** Para la base del proyecto.
*   **Tailwind CSS:** Para el diseño visual (modo oscuro y estructura de la caja de chat).
*   **React Hook Form:** Manejo del estado del input principal y validación (evitando el envío de mensajes vacíos).
*   **Lucide React:** Para la iconografía de la interfaz (`SendHorizontal`).

### 📝 Historial de Ramas
- [x] **rama-1:** Setup inicial, Tailwind y UI con Hook Form.
- [ ] **parte-2:** *(Próximamente)* Consumo de APIs y Ollama (useEffect).
- [ ] **parte-3:** *(Próximamente)* State Management (useContext).
- [ ] **parte-4:** *(Próximamente)* Introducción a Backend (Teoría).
- [ ] **parte-5:** *(Próximamente)* Servidor con Express.
- [ ] **parte-6:** *(Próximamente)* API REST y consumo de IA en el Back.
- [ ] **parte-7:** *(Próximamente)* CRUD Básico (Lowdb).
- [ ] **parte-8:** *(Próximamente)* Base de datos con MongoDB y Dotenv.

---

### 🚀 Cómo correr el proyecto en esta rama

1. Clona el repositorio.
2. Posiciónate en la rama: `git checkout rama-1`
3. Instala las dependencias: `npm install`
4. Levanta el servidor: `npm run dev`