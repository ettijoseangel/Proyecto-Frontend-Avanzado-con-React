import { useState } from "react";
import { useForm } from "react-hook-form";
import { SendHorizontal } from "lucide-react";

export default function App() {
  // Solo conservamos el estado de los mensajes
  const [messages, setMessages] = useState([]);

  // Inicializamos React Hook Form
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm();

  // Esta función es manejada por Hook Form y recibe los datos estructurados
  const onSubmit = (data) => {
    console.log("Enviando prompt:", data.prompt);
    
    // Lo agregamos a la pantalla temporalmente para ver que funciona
    setMessages([...messages, { text: data.prompt, sender: "user" }]);
    
    // Hook Form limpia el input automáticamente con esto
    reset(); 
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-900 text-white justify-end">
      
      {/* Área de mensajes */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 flex flex-col">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs px-4 py-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-600 self-end"
                : "bg-gray-700 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* 
        Cambiamos el <div> contenedor por un <form>.
        Esto hace que al presionar 'Enter' se dispare onSubmit automáticamente.
      */}
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="p-4 flex items-center bg-gray-800"
      >
        <input
          type="text"
          placeholder="Escribe un mensaje a Ollama..."
          /* 
            Si hay un error (ej. envían vacío), el borde se pone rojo.
            Si no, se queda gris.
          */
          className={`flex-1 p-2 rounded-lg bg-gray-700 border ${
            errors.prompt ? 'border-red-500' : 'border-gray-600'
          } text-white focus:outline-none`}
          
          /* Aquí registramos el input en Hook Form y lo hacemos obligatorio */
          {...register("prompt", { required: true })}
        />
        
        {/* El botón ahora es de tipo submit */}
        <button
          type="submit"
          className="ml-2 p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <SendHorizontal size={20} />
        </button>
      </form>
    </div>
  );
}