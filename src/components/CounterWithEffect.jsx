import { useEffect, useState } from "react";

const CounterWithEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`el contador es ${count}`);
    }, [count]);

    return (
        <div>
            <p className="m-4">{count}</p>
            <button 
                className="py-2 px-4 bg-blue-500 text-white rounded" 
                onClick={() => setCount(count + 1)}
            >Incrementar</button>
        </div>
    );
};

export default CounterWithEffect;