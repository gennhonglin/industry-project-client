import "./HomePage.scss";
import settings from "../../assets/icons/settings_White.png";
import data from '../../workouts.json';
import arrow from '../../assets/icons/Arrow_Charcoal.png';
import { Link } from "react-router-dom";

function HomePage() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function getMonth(timestamp) {
        const date = new Date(timestamp);

        const month = date.getMonth();
        const dayOfMonth = date.getDate();


        return months[month] + " " + dayOfMonth;

    }

    function getDayAndTime(timestamp) {
        const date = new Date(timestamp);

        const day = date.getDay();
        const hour = date.getHours();
        const min = date.getMinutes();
        let timeOfDay = "am";

        if (hour < 12) {
            timeOfDay = "am";
        } else {
            timeOfDay = "pm";
        }

        const time = ('0' + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);

        return days[day] + " at " + time + " " + timeOfDay;

    }
    return (
        <div className="homepage">
            <div className="header__container">
                <div className="header__container__welcome">
                    <h4 className="header__container__welcome__title">Welcome Back</h4>
                    <h1 className="header__container__welcome__username">Odin!</h1>
                </div>
                <img alt="settings-icon" className="header__container__profile-icon" src={settings} />
            </div>

            <p className="welcome__message">Here's what you've done so far today</p>

            <div className="health__container">
                <div className="health__container__hydration">
                    <h2 className="health__container__hydration-intake">64</h2>
                    <p className="health__container__hydration-measurement">mL</p>
                </div>

                <div className="health__container__calories">
                    <h1 className="health__container__calories-lost">260</h1>
                    <p className="health__container__calories-measurement">kcal burned</p>
                </div>

                <div className="health__container__heart">
                    <h2 className="health__container__heart-rate">82</h2>
                    <p className="health__container__heart-measurement">bpm</p>
                </div>
            </div>

            <div className="exercise__button__container">
                <Link to={`/workout`} className="exercise__button__container-button">+ Exercise</Link>
            </div>

            <div className="exercise__list">
                <div className="exercise__list__workout">
                    <div className="exercise__list__workout__container1">
                        <h4 className="exercise__list__workout__container1-today">Today</h4>
                        <h2 className="exercise__list__workout__container1-title">No Workouts Logged!</h2>
                    </div>

                    <div className="exercise__list__workout__container2">
                        <img alt="expand-arrow-icon" className="exercise__list__workout__container2-arrow" src={arrow}></img>
                    </div>
                </div>
                {data.map((e) => {
                    return (
                        <div key={e.title} className="exercise__list__workout">
                            <div className="exercise__list__workout__container1">
                                <div className="exercise__list__workout__container1__header">
                                    <h4 className="exercise__list__workout__container1__header-date">{getMonth(e.timestamp)}</h4>
                                    <h4 className="exercise__list__workout__container1__header-daytime">{getDayAndTime(e.timestamp)}</h4>
                                </div>
                                <div className="exercise__list__workout__container1__body">
                                    <h2 className="exercise__list__workout__container1__body-title">{e.title}</h2>
                                </div>
                            </div>

                            <div className="exercise__list__workout__container2">
                                <img alt="expand-arrow-icon" className="exercise__list__workout__container2-arrow" src={arrow}></img>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage;