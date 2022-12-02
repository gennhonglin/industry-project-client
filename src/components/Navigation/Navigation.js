import { NavLink } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import '../Navigation/Navigation.scss'

function Navigation() {
    return (
        <header>
            <nav className="navigation">
                <NavLink className="navigation__link" to='/'>
                    <HomeIcon className="navigation__link--home"/>
                </NavLink>

                <NavLink className="navigation__link" to='/workout'>
                    <FitnessCenterIcon className="navigation__link--fitness"/>
                </NavLink>

                <NavLink className="navigation__link" to='/profile'>
                    <PersonIcon className="navigation__link--person"/>
                </NavLink>

                <NavLink className="navigation__link" to='/chat'>
                    <QuestionAnswerIcon className="navigation__link--chat"/>
                </NavLink>

            </nav>
        </header>
    )
}



export default Navigation;