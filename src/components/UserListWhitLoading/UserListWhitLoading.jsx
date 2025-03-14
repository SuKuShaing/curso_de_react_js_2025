import { useState, useEffect } from 'react';

const UserListWhitLoading = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // is se coloca porque es un dato booleano
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!response.ok) {
                    throw new Error("Ha ocurrido un error al obtener los datos")
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching data", error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, [])

    if (isLoading) return <p>Cargando...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id} className="flex items-center space-x-4">
                            <h3>{user.name} - </h3>
                            <p>{user.address.street}</p>
                            <p>{user.address.suite},</p>
                            <p>{user.address.city}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UserListWhitLoading;