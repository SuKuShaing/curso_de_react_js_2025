import { useState, useEffect } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Error fetching data", error))
    }, [])

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id} className="flex items-center space-x-4">
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                            <p>{user.address.city}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UserList;