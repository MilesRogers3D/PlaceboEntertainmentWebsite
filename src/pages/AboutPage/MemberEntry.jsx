export const MemberEntry = (props) => {
    return (
        <div className="about-entry-container">
                <img className="about-entry-picture" src={props.image}></img>
                <h2 className="about-entry-name">{props.name}</h2>
                <h3 className="about-entry-title">{props.title}</h3>
                <p className="about-entry-description">{props.description}
                </p>
        </div>)
}