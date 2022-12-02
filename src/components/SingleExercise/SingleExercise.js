import "./SingleExercise.scss";
import playImage from "../../assets/icons/Play.png";

function SingleExercise({play, handleClick}) {
    if(play === "play") {

        return (
            <div className="exercise__image__loading">
                <div className="exercise__image__loading-container">
                </div>
            </div>
        )
    }

    return (
        <div className="exercise__image__container">
            <button onClick={handleClick} className="exercise__image__container-button"><img alt="play-icon" src={playImage}/></button>
        </div>
    )
}

export default SingleExercise;