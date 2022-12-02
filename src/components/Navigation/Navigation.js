import { NavLink } from "react-router-dom";
import home from "../../assets/icons/home-outline.svg";
import person from "../../assets/icons/person-outline.svg";
import chatbox from "../../assets/icons/chatbox-outline.svg";
import workout from "../../assets/icons/bicycle-outline.svg";

import '../Navigation/Navigation.scss'

function Navigation() {
    return (
        <header>
            <nav className="navigation">
                <NavLink className="navigation__link" to='/'>
                    <img className="navigation__link__icons" src={home}/>
                </NavLink>

                <NavLink className="navigation__link" to='/workout'>
                    <img className="navigation__link__icons" src={workout}/>
                </NavLink>

                <NavLink className="navigation__link" to='/profile'>
                    <img className="navigation__link__icons" src={person}/>
                </NavLink>

                <NavLink className="navigation__link" to='/chat'>
                    <img className="navigation__link__icons" src={chatbox}/>
                </NavLink>

            </nav>
        </header>
    )
}



export default Navigation;