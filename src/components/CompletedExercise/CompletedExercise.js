//import close from '../../assets/Icons/close-24px.svg'
import { Link } from 'react-router-dom';
import './CompletedExercise.scss';
import close from '../../assets/icons/close-24px.svg';

function ExerciseDescription({onClose, display}) {
    if (!display) {
        return null
    }


    return (
        <section className='modal'>
            <div className='modal-content'>
                <button onClick={onClose} className='modal-content-close'><img className='modal-content-img' alt="close-icon" src={close}/></button>
                <div className='modal-content-header'>
                    <h1 className='modal-content-header-title'>Congratulations!</h1>
                    <p className='modal-content-header-congrats'>Good job on completing this exercise. You just burned:</p>
                </div>

                <div className='modal-content-calories'>
                    <div className='modal-content-calories-display'>
                        <h2 className='modal-content-calories-display-title'>100cal</h2>
                    </div>
                </div>

                <div className='modal-content-button'>
                    <Link to={`/workout`} className='modal-content-button-btn'>Back to Exercises</Link>
                </div>

            </div>
        </section>
    )
}

export default ExerciseDescription;