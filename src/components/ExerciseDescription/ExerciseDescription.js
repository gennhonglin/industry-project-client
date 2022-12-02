import "./ExerciseDescription.scss";
import heart from "../../assets/icons/heart.png";
import intensity from "../../assets/icons/intensity.png";
import time from "../../assets/icons/clock.png";
import flame from "../../assets/icons/🦆 icon _fire_.png";



function ExerciseDescription({ play, handleClick, click}) {



        if(play === "pause") {
            return (
                <div className="description">
                    <div className="description__header">
                        <h1 className="description__header__title">Bicep Curls</h1>
                        <img className="description__header__heart" alt="heart-icon" src={heart} />
                    </div>
    
                    <div className="description__container">
                        <div className="description__container__info">
                            <div className="description__container__info__intensity">
                                <img className="description__container__info__intensity-img" alt="intensity" src={intensity} />
                                <span className="description__container__info__intensity-text">intensity</span>
                            </div>
    
                            <div className="description__container__info__time">
                                <img className="description__container__info__time-img" alt="time-icon" src={time} />
                                <span className="description__container__info__time-text">30 mins</span>
                            </div>
    
    
                            <div className="description__container__info__calories">
                                <img className="description__container__info__calories-img" alt="calories-icon" src={flame} />
                                <span className="description__container__info__calories-text">100 cal burned</span>
                            </div>
    
                        </div>
    
                        <div className="description__container__explaination">
                            <p>The Bicep Curl is an essential strength training exercise you can do with dumbbells, a barbell, resistance bands or a cable machine to build strength in the upper arms.</p>
                            <p>Bicep curls teach also teach your core to engage.</p>
                        </div>
                    </div>
    
                    <div className="description__button__container">
                        <button onClick={() => click(true)}  className="description__button__container-button">Exercise Complete</button>
                    </div>
                </div>
            )
        }

        return (
            <div className="description__active">
                <div className="description__active__button__container">
                    <button onClick={handleClick} className="description__active__button__container-button">Pause</button>
                </div>
                <div className="description__header">
                    <h1 className="description__header__title">Bicep Curls</h1>
                    <img className="description__header__heart" alt="heart-icon" src={heart} />
                </div>

                <div className="description__container">
                    <div className="description__container__info">
                        <div className="description__container__info__intensity">
                            <img className="description__container__info__intensity-img" alt="intensity" src={intensity} />
                            <span className="description__container__info__intensity-text">intensity</span>
                        </div>

                        <div className="description__container__info__time">
                            <img className="description__container__info__time-img" alt="time-icon" src={time} />
                            <span className="description__container__info__time-text">30 mins</span>
                        </div>


                        <div className="description__container__info__calories">
                            <img className="description__container__info__calories-img" alt="calories-icon" src={flame} />
                            <span className="description__container__info__calories-text">100 cal burned</span>
                        </div>

                    </div>

                    <div className="description__container__explaination">
                        <p>The Bicep Curl is an essential strength training exercise you can do with dumbbells, a barbell, resistance bands or a cable machine to build strength in the upper arms.</p>
                        <p>Bicep curls teach also teach your core to engage.</p>
                    </div>
                </div>

                <div className="description__button__container">
                    <button className="description__button__container-button">Exercise Complete</button>
                </div>
            </div>
        )
}

export default ExerciseDescription;