import { NewChatIcon } from "./assets/new-chat-icon.jsx";
import { useContext } from "react";
import { ChatContext } from "./context/global-context";

export default function History() {
  const { historyList } = useContext(ChatContext);
  return (
    <div className="flex flex-col h-screen w-64 bg-gray-900 text-white p-4">
      <div className="flex flex-col items-start">
        <span className="mb-4">Logo</span>
        <div className="p-1 mt-4">
          <button className="flex p-2 bg-blue-600 rounded-lg w-full">
            <NewChatIcon />
            Nuevo chat
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
