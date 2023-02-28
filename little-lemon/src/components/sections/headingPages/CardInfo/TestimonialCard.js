import Star from '../../../../assets/star.png';
export default function TestimonialCard(props) {
    return (
        <article className="testimonial-card container">
            <img src={Star} alt="delivery Icon"></img>
            <label>{props.name}</label>
            <p>{props.description}</p>
        </article>
    );
}