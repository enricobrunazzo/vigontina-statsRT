// components/modals/PostCrossbarModal.jsx
import React, { useState } from "react";

const PostCrossbarModal = ({ availablePlayers, opponentName, onConfirm, onCancel }) => {
  const [selectedType, setSelectedType] = useState("palo"); // "palo" o "traversa"
  const [selectedTeam, setSelectedTeam] = useState("vigontina");
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleConfirm = () => {
    if (selectedTeam === "vigontina" && !selectedPlayer) {
      alert("Seleziona il giocatore che ha colpito");
      return;
    }
    onConfirm(selectedType, selectedTeam, selectedPlayer);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          🧱 Palo/Traversa
        </h3>

        {/* Selezione tipo: Palo o Traversa (icona uniforme 🧱) */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Cosa è stato colpito?</label>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              onClick={() => setSelectedType("palo")}
              className={`p-3 rounded border text-sm font-medium ${
                selectedType === "palo"
                  ? "bg-yellow-600 text-white border-yellow-600"
                  : "bg-white border-gray-300"
              }`}
            >
              🧱 Palo
            </button>
            <button
              onClick={() => setSelectedType("traversa")}
              className={`p-3 rounded border text-sm font-medium ${
                selectedType === "traversa"
                  ? "bg-yellow-600 text-white border-yellow-600"
                  : "bg-white border-gray-300"
              }`}
            >
              🧱 Traversa
            </button>
          </div>
        </div>

        {/* Selezione squadra */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Chi ha colpito?</label>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              onClick={() => {
                setSelectedTeam("vigontina");
                setSelectedPlayer(null);
              }}
              className={`p-3 rounded border text-sm font-medium ${
                selectedTeam === "vigontina"
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white border-gray-300"
              }`}
            >
              Vigontina
            </button>
            <button
              onClick={() => {
                setSelectedTeam("opponent");
                setSelectedPlayer(null);
              }}
              className={`p-3 rounded border text-sm font-medium ${
                selectedTeam === "opponent"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white border-gray-300"
              }`}
            >
              {opponentName}
            </button>
          </div>
        </div>

        {/* Selezione giocatore se Vigontina */}
        {selectedTeam === "vigontina" && (
          <div className="mb-4">
            <label className="block font-medium mb-2">Giocatore Vigontina *</label>
            <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
              {availablePlayers.map((player) => (
                <button
                  key={player.num}
                  onClick={() => setSelectedPlayer(player.num)}
                  className={`p-2 rounded border text-sm ${
                    selectedPlayer === player.num
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {player.num} {player.name}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-200 py-2 rounded"
          >
            Annulla
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 bg-yellow-600 text-white py-2 rounded"
          >
            Conferma
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCrossbarModal;
