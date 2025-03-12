// import '../styles.css'
import { card } from './Card.module.css'

const Card = ({ title, description }) => {
    const textStyles = { 
        color: "darkblue", 
        fontSize: "1.5rem", 
        textAlign: "center"
    };

    return (
        // <section className={card} style={{ color: "blue", fontSize: "1.5rem", textAlign: "center" }}>
        <section className={card} style={textStyles}>
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    )
}

export default Card;