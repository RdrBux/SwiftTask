import { useState } from 'react';
import { CloseMini } from './Icons';

export default function HintCard() {
  const [showCard, setShowCard] = useState(true);
  function handleClick() {
    // hide entire component on click
    setShowCard(false);
  }

  return (
    showCard && (
      <div className="text-sm border relative text-zinc-600 rounded-lg p-2 mt-4 mb-12 lg:mb-4 shadow-md">
        <button
          onClick={handleClick}
          className="p-4 absolute -right-2 -top-2 hover:text-zinc-800"
        >
          {CloseMini}
        </button>
        <h3 className="font-bold">CONSEJO</h3>
        <p>
          Presiona y arrastra una carta para moverla de columna o de ubicación.
        </p>
      </div>
    )
  );
}
