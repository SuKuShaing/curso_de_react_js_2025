import { useState } from 'react';

const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <button 
            onClick={() => setIsActive(!isActive)}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 transition duration-300'
        >
            {isActive ? "Activo" : "Inactivo"}
        </button>
    )
};

export default ToggleButton;