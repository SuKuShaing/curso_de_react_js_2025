import { useState, memo, useCallback, useMemo } from 'react';

const Child = memo(({ counter }) => {
    console.log("Render: Child");
    return <p>Contador: {counter}</p>;
});

function ExpensiveCalculation({ num }) {
    const result = useMemo(() => {
        console.log("Calculando ExpensiveCalculation...");
        return num * 2;
    }, [num]);

    return <p>Resultado: {result}</p>;
};

function CounterWithReactMemo() {
    const [counter, setCounter] = useState(0);

    const increment = useCallback(() => {
        setCounter(prev => prev + 1)
    });

    return (
        <div>
            <button onClick={increment}>Incrementar</button>
            <Child counter={counter} />
            <ExpensiveCalculation num={counter} />
        </div>
    )
};

export default CounterWithReactMemo;