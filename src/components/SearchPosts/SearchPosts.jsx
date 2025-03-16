import { useState, useEffect } from "react";

const SearchPosts = () => {
	const [query, setQuery] = useState("");
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}&_limit=10`)
			.then((response) => response.json())
			.then((data) => setPosts(data))
			.catch((error) => console.error("Error fetching data", error));
	}, [query]);

	return (
		<>
			<input 
                type="text" 
                placeholder="Buscar por Titulo"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className='border border-gray-300 p-2 rounded-lg m-2'
                />
			<ul>
				{posts.map((post) => (
					<li key={post.id} className="flex items-center space-x-4">
						{post.title}
					</li>
				))}
			</ul>
		</>
	);
};

export default SearchPosts;
