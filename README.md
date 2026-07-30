# 🤖 ChatGPT Clone (Frontend & Backend Course)

Este repositorio contiene el desarrollo paso a paso de un clon de ChatGPT, desde el frontend con React hasta el backend con Express y bases de datos.

---

## 📍 Estado Actual: Parte 3 - State Management (parte-3)

### 🎯 Objetivo de esta fase
Evitar el *Prop Drilling* y centralizar el manejo de la información creando un Estado Global. Esto permite que componentes hermanos (como el Chat y el Historial) compartan y actualicen los mismos datos sin necesidad de pasarlos a través de componentes padre.

### 🛠️ Tecnologías y Herramientas implementadas
*   **Context API (`createContext`):** Creación del `ChatContext` para almacenar la nube de datos.
*   **Provider Pattern:** Implementación de `ChatProvider` en la raíz (`main.jsx`) para envolver la aplicación.
*   **`useContext`:** Consumo directo del estado global desde `App.jsx` y `History.jsx` para renderizar los mensajes y la lista de historiales de forma independiente.

### 📝 Historial de Ramas
- [x] **rama-1:** Setup inicial, Tailwind y UI con Hook Form.
- [x] **parte-2:** Consumo de APIs y Ollama (useEffect / Custom Hook).
- [x] **parte-3:** State Management (useContext).
- [ ] **parte-4:** *(Próximamente)* Introducción a Backend (Teoría).
- [ ] **parte-5:** *(Próximamente)* Servidor con Express.
- [ ] **parte-6:** *(Próximamente)* API REST y consumo de IA en el Back.
- [ ] **parte-7:** *(Próximamente)* CRUD Básico (Lowdb).
- [ ] **parte-8:** *(Próximamente)* Base de datos con MongoDB y Dotenv.