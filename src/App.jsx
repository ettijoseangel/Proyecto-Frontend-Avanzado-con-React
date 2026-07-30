import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizontal } from "lucide-react";
import useOllamaHook from "./api/useOllamaHook";
import { useContext } from "react";
import { ChatContext } from "./context/global-context";

const messageSchema = z.object({
  text: z
    .string()
    .min(3, "El mensaje debe tener al menos 3 caracteres")
    .max(200, "El mensaje es demasiado largo"),
});

export default function App() {
  //const [messages, setMessages] = useState([]);
  const { messages, setMessages } = useContext(ChatContext);

  const {
    handleSubmit: submitOllama,
    response,
    loading,
    error,
  } = useOllamaHook();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(messageSchema),
  });

  const onSubmit = (data) => {
    // Actualizamos el historial de mensajes antes de llamar a la IA
    setMessages((prev) => {
      const newHistory = [...prev];

      // Si ya había una respuesta del bot en pantalla, la guardamos definitivamente
      if (response) {
        newHistory.push({ text: response, sender: "bot" });
      }

      // Guardamos el nuevo mensaje que acaba de escribir el usuario
      newHistory.push({ text: data.text, sender: "user" });

      return newHistory;
    });

    reset();

    // Llamamos a la IA (el hook se encarga de limpiar el 'response' anterior internamente)
    submitOllama(data.text);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-900 text-white justify-end">
      <div className="flex-1 overflow-y-auto p-4 space-y-2 flex flex-col">
        {/* 1. Renderizamos el historial de mensajes completados */}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-lg max-w-2xl ${
              msg.sender === "user"
                ? "bg-blue-600 self-end"
                : "bg-gray-700 self-start mt-2"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {/* 2. Burbuja activa: Muestra el streaming en vivo o el estado de "Pensando..." */}
        {(loading || response) && (
          <div className="px-4 py-2 rounded-lg max-w-2xl bg-gray-700 self-start mt-2">
            {response ? (
              response // Muestra el texto letra por letra
            ) : (
              <span className="italic text-gray-400">Pensando...</span>
            )}
          </div>
        )}

        {/* 3. Error de conexión */}
        {error && (
          <div className="px-4 py-2 rounded-lg max-w-2xl bg-red-900/50 text-red-300 self-start mt-2 border border-red-700">
            Error de conexión. ¿Ollama está corriendo?
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 flex flex-col bg-gray-800 space-y-2"
      >
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Escribe un mensaje a DeepSeek..."
            disabled={loading}
            className="flex-1 p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none disabled:opacity-50"
            {...register("text")}
          />
          <button
            type="submit"
            disabled={loading}
            className="ml-2 p-2 bg-blue-600 rounded-lg disabled:opacity-50"
          >
            <SendHorizontal size={20} />
          </button>
        </div>
        {errors.text && (
          <span className="text-red-400 text-sm">{errors.text.message}</span>
        )}
      </form>
    </div>
  );
}
