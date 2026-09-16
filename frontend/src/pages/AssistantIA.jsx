import { useState } from "react";

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
    <div>
      <h1 className="text-2xl font-semibold mb-6">Assistant IA</h1>

      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4 space-y-3 max-w-2xl">
        {messages.length === 0 && (
          <p className="text-sm text-ink-soft">
            Pose une question sur tes prospects.
          </p>
        )}
        {messages.map((m, index) => (
          <div key={index}>
            <p className="font-medium text-ink">{m.question}</p>
            <p className="text-sm text-brand mt-1">{m.reponse}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2 max-w-2xl">
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