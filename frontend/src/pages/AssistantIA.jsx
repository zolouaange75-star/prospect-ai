import { useState } from "react";
import { Sparkles } from "lucide-react";

function AssistantIA() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  function handleSend() {
    if (question.trim() === "") return;

    const reponseSimulee = `Je note ta question : "${question}". (Réponse simulée — sera remplacée par une vraie IA plus tard.)`;

    setMessages([...messages, { question, reponse: reponseSimulee }]);
    setQuestion("");
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold mb-6">Assistant IA</h1>

      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4 min-h-[300px] space-y-4">
        {messages.length === 0 && (
          <p className="text-sm text-ink-soft">
            Pose une question sur tes prospects.
          </p>
        )}

        {messages.map((m, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-end">
              <div className="bg-brand text-white rounded-lg rounded-br-none px-3 py-2 text-sm max-w-[80%]">
                {m.question}
              </div>
            </div>

            <div className="flex justify-start">
              <div className="flex items-start gap-2 max-w-[80%]">
                <Sparkles size={16} className="text-gold mt-1 shrink-0" />
                <div className="bg-gray-100 text-ink rounded-lg rounded-bl-none px-3 py-2 text-sm">
                  {m.reponse}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ex : Quel prospect a le meilleur score ?"
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
        <button
          onClick={handleSend}
          className="bg-brand text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-light"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}

export default AssistantIA;