import { useState } from 'react';

const NameForm = () => {
    const [name, setName] = useState('');

    return (
        <div>
            <input 
                type="text"
                placeholder='Escribe tu nombre'
                value={name}
                onChange={(event) => setName(event.target.value)}
                className='border border-gray-300 p-2 rounded-lg m-2'
            />
            <p className='m-2'>Hola, {name || "Visitante"}</p>
        </div>
    );
};

export default NameForm;