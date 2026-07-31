# 🤖 ChatGPT Clone (Frontend & Backend Course)

Este repositorio contiene el desarrollo paso a paso de un clon de ChatGPT, desde el frontend con React hasta el backend con Express, bases de datos y consumo de Inteligencia Artificial local.

---

## 📍 Estado Actual: Parte 4 - Introducción al Backend (parte-4)

### 🎯 Objetivo de esta fase
Integrar Node.js y Express en el proyecto creando un servidor web básico. El propósito es establecer los cimientos para la comunicación entre el front-end y el back-end, aislando las dependencias del servidor y creando el primer endpoint de prueba.

### 🛠️ Tecnologías y Herramientas implementadas
*   **Node.js & npm:** Inicialización de un entorno independiente (`package.json`) dentro de la carpeta `backend` para no mezclar dependencias con Vite.
*   **Express.js:** Implementación de un servidor web ligero configurado para escuchar en el puerto 4000.
*   **Routing HTTP:** Creación del primer endpoint `GET /` que responde con un mensaje de "Hola Mundo".
*   **Gitignore:** Configuración de reglas de exclusión para evitar subir la carpeta `node_modules` del backend al repositorio.

### 📝 Historial de Ramas
- [x] **rama-1:** Setup inicial, Tailwind y UI con Hook Form.
- [x] **parte-2:** Consumo de APIs y Ollama (useEffect / Custom Hook).
- [x] **parte-3:** State Management (useContext).
- [x] **parte-4:** Introducción a Backend (Servidor Express 'Hola Mundo').
- [ ] **parte-5:** *(Próximamente)* Middlewares y estructura avanzada con Express.
- [ ] **parte-6:** *(Próximamente)* API REST y consumo de IA en el Back.
- [ ] **parte-7:** *(Próximamente)* CRUD Básico (Lowdb).
- [ ] **parte-8:** *(Próximamente)* Base de datos con MongoDB y Dotenv.

---

### 🚀 Cómo correr el proyecto en esta rama

**Para el Frontend:**
1. Posiciónate en la raíz del proyecto.
2. Instala dependencias si no lo has hecho: `npm install`
3. Levanta el entorno de React: `npm run dev`

**Para el Backend:**
1. Abre una nueva terminal y entra a la carpeta del servidor: `cd backend`
2. Instala dependencias: `npm install`
3. Levanta el servidor Express: `node index.js`
4. Visita `http://localhost:4000` para ver el endpoint funcionando.