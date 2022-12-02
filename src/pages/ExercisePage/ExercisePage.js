import WorkoutHeader from "../../components/WorkoutHeader/WorkoutHeader";
import SingleExercise from "../../components/SingleExercise/SingleExercise";
import ExerciseDescription from "../../components/ExerciseDescription/ExerciseDescription";


function ExercisePage() {

    return (
        <div>
            <WorkoutHeader text='Bicep Curls' />
            <SingleExercise />
            <ExerciseDescription />
        </div>
    )
}

export default ExercisePage;