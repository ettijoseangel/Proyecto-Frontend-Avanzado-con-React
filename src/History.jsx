import { NewChatIcon } from "./assets/new-chat-icon.jsx";
import { useContext } from "react";
import { ChatContext } from "./context/global-context";

export default function History() {
  // Extraemos setMessages para poder limpiar la pantalla tambien
  const { historyList, setMessages } = useContext(ChatContext);
  // Funcion para borrar la base de datos y la pantalla
  const handleNewChat = async () => {
    try {
      await fetch("http://localhost:4000/api/messages", {
        method: "DELETE",
      });
      // Limpiamos el estado global de React
      setMessages([]);
    } catch (error) {
      console.error("Error al borrar el historial:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen w-64 bg-gray-900 text-white p-4">
      <div className="flex flex-col items-start">
        <span className="mb-4">ClonGPT</span>
        <div className="p-1 mt-4">
          <button
            onClick={handleNewChat}
            className="mt-4 w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-600 rounded shadow transition-colors"
          >
            <NewChatIcon />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto mt-4 mb-4">
        {historyList.map((item, index) => (
          <li
            key={index}
            className="p-2 hover:bg-gray-800 rounded-md cursor-pointer transition-colors"
          >
            {item}
          </li>
        ))}
      </div>
    </div>
  );
}
