import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="m-4">
            <p className="font-bold text-xl pl-29">{count}</p>
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
                onClick={() => setCount(count + 1)}
                >Increment</button>
            <button 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setCount(count - 1)}
                >Decrement</button>
        </div>
    );
};

export default Counter;