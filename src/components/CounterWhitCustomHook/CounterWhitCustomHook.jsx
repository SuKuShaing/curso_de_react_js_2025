import useCounter from "../../Hooks/useCounter";

const CounterWhitCustomHook = () => {
	const { count, increment, decrement, reset } = useCounter(10);

	return (
		<>
			<p>Contador: {count}</p>
			<div className="flex gap-3">
				<button
					onClick={increment}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Aumentar
				</button>
				<button
					onClick={decrement}
					className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
				>
					Disminuir
				</button>
				<button
					onClick={reset}
					className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
				>
					Reiniciar
				</button>
			</div>
		</>
	);
};

export default CounterWhitCustomHook;
