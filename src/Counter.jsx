import React, { useState } from 'react';

function Counter() {
    // Déclare une nouvelle variable d'état, qu’on va appeler « count »
    // Déclare une fonction setCount qui permet de modifier la valeur de count
    const [count, setCount] = useState("");

    return (
        <div>
            <input type="text" name="Valeur de départ" onChange={(e) => setCount(+e.target.value)}/>
            <p>Le compteur est  à : {count} </p>
            <button onClick={() => setCount(count + 1)}>
                +1
      </button>
            <button onClick={() => setCount(count - 1)}>
                -1
      </button>
        </div>
    );
}

export default Counter;