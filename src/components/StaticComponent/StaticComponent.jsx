const StaticComponent = () => {
    const items = ["Manzana", "Pera", "Banana"];

    return (
        <ul>
            {
                items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    );
}

export default StaticComponent;