import { useState, memo, useCallback, useMemo } from 'react';

// con memo, solo sí counter cambia, se renderiza el componente
// evita que un componente se renderice de nuevo si sus props no han cambiado
const Child = memo(({ counter }) => {
    console.log("Render: Child");
    return <p>Contador: {counter}</p>;
});

function ExpensiveCalculation({ num }) {
    // solo se recalcula si num cambia
    // Solo se recalcula el valor cuando cambian las dependencias
    const result = useMemo(() => {
        console.log("Calculando ExpensiveCalculation...");
        return num * 2;
    }, [num]);

    return <p>Resultado: {result}</p>;
};

function CounterWithReactMemo() {
    const [counter, setCounter] = useState(0);

    // el useCallback solo se vuelve a crear si counter cambia
    // memoriza el resultado de una función para que no se vuelva a crear en cada render
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


/*
En resumen:

- memo se encarga de memorizar el output de un componente.
- useMemo memoriza el resultado de un cálculo o función.
- useCallback memoriza una función en sí.
*/