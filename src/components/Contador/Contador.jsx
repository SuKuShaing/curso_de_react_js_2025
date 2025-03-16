import { useReducer } from "react";

const reducer = (estado, accion) => {
	switch (accion.type) {
		case "INCREMENT":
			return { count: estado.count + 1 };
		case "DECREMENT":
			return { count: estado.count - 1 };
		case "RESET":
			return { count: 0 };
		default:
			return estado;
	}
};

const Contador = () => {
	const [estado, dispatch] = useReducer(reducer, { count: 0 });

	return (
		<>
			<p className="mx-5 text-2xl">{estado.count}</p>
			<div className="flex items-center gap-2">
				<button
					className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => dispatch({ type: "DECREMENT" })}
				>
					-
				</button>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => dispatch({ type: "INCREMENT" })}
				>
					+
				</button>
				<button
					className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => dispatch({ type: "RESET" })}
				>
					Reset
				</button>
			</div>
		</>
	);
};

export default Contador;
