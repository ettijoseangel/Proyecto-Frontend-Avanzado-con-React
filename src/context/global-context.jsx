/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [historyList, setHistoryList] = useState([
    "¿Qué es React?",
    "Búsqueda avanzada",
    "¿Qué es un componente?",
  ]);

  return (
    // ¡Aquí estamos usando todas esas variables para compartirlas!
    <ChatContext.Provider
      value={{ messages, setMessages, historyList, setHistoryList }}
    >
      {children}
    </ChatContext.Provider>
  );
};
