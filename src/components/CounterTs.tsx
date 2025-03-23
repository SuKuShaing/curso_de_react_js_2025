import { useState } from 'react';

const CounterTs = () => {
    const [count, setCount] = useState<number>(0);
    // <number> le especifica a TypeScript que el estado es un número y evita errores de tipo en un futuro

    const increment = () => {
        // setCount(count + 1);
        setCount(prev => prev + 1);
        // React agrupa las actualizaciones de estado y puede ser asíncrono, por lo que usar la función que recibe el estado anterior garantiza que siempre se incrementa a partir del valor actualizado
    };

    return (
        <button onClick={increment} className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">
            increment {count}
        </button>
    )
};

export default CounterTs;