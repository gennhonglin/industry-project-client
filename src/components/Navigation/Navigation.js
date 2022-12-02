import { NavLink } from "react-router-dom";
import home from "../../assets/icons/Inactive Home.png";
import workout from "../../assets/icons/Inactive Workouts.png";
import profile from "../../assets/icons/inactive profile.png";
import messages from "../../assets/icons/inactive messages.png";
import activehome from "../../assets/icons/Active Home.png";


import '../Navigation/Navigation.scss'

function Navigation() {
    return (
        <header>
            <nav className="navigation">
                <NavLink className="navigation__link" to='/'>
                    <img src={activehome} className="navigation__link--home" />
                </NavLink>

                <NavLink className="navigation__link" to='/workout'>
                    <img src={workout} className="navigation__link--home" />
                </NavLink>

                <NavLink className="navigation__link" to='/profile'>
                    <img src={profile} className="navigation__link--home" />
                </NavLink>

                <NavLink className="navigation__link" to='/chat'>
                    <img src={messages} className="navigation__link--home" />
                </NavLink>

            </nav>
        </header>
    )
}



export default Navigation;