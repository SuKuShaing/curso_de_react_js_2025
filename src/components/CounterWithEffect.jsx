import { useEffect, useState } from "react";

const CounterWithEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`el contador es ${count}`);
    }, [count]);

    return (
        <div>
            <h1>Counter With Effect</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
};

export default CounterWithEffect;