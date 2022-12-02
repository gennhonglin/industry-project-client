import WorkoutHeader from "../../components/WorkoutHeader/WorkoutHeader";
import SingleExercise from "../../components/SingleExercise/SingleExercise";
import ExerciseDescription from "../../components/ExerciseDescription/ExerciseDescription";
import { useState } from "react";
import CompletedExercise from "../../components/CompletedExercise/CompletedExercise";



function ExercisePage() {
    const [play , setPlay] = useState("pause");
    const [display, setDisplay] = useState(false);

    const click = (status) => {
        setDisplay(status);
    }

    const handleClick = () => {
        if(play === "pause") {
            setPlay("play");
        } else if( play === "play") {
            setPlay("pause");
        }

    };

    return (
        <div>
            <CompletedExercise onClose={()=> {click(false)}} display = {display}/>
            <WorkoutHeader text='Bicep Curls' />
            <SingleExercise play = {play} handleClick = {handleClick}/>
            <ExerciseDescription play = {play} handleClick = {handleClick} click = {click}/>
        </div>
    )
}

export default ExercisePage;