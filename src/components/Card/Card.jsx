// import '../styles.css'
import { card } from './Card.module.css'

const Card = ({ title, description }) => {
    return (
        <section className={card}>
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    )
}

export default Card;