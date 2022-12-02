import "./SingleExercise.scss";
import play from "../../assets/icons/Play.png";

function SingleExercise() {
    return (
        <div className="exercise__image__container">
            <button className="exercise__image__container-button"><img src={play}/></button>
        </div>
    )
}

export default SingleExercise;