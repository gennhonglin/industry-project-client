import arms from '../assets/Images/Vector.png'
import chest from '../assets/Images/Vector-1.png'
import back from '../assets/Images/Vector-2.png'
import abs from '../assets/Images/Vector-3.png'
import shoulders from '../assets/Images/Vector-4.png'
import arms1 from '../assets/Images/Vector-5.png'

const exercises = [
        {
            id: 1,
            name: "Bicep Curls",
            category: "arms",
            image: arms,
        },
        {
            id: 2,
            name: "Incline Bicep Curl",
            category: 'arms',
            image: arms1,
        },
        {
            id: 3,
            name: "Lat Pulldown",
            category: 'back',
            image: back,
        },
        {
            id: 4,
            name: "Inverted Row",
            category: 'back',
            image: back,
        },
        {
            id: 5,
            name: "Cable Crossover",
            category: 'chest',
            image: chest,
        },
        {
            id: 6,
            name: "Bench Press",
            category: 'chest',
            image: chest,
        },
        {
            id: 7,
            name: 'crunch',
            category: 'abs',
            image: abs,
        },
        {
            id: 8,
            name: 'plank',
            category: 'abs',
            image: abs,
        },
        {
            id: 9,
            name: "Push Press",
            category: 'shoulders',
            image: shoulders,
        },
        {
            id: 10,
            name: 'Arnold Press',
            category: 'shoulders',
            image: shoulders
        }
]
    
export default exercises;