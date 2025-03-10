import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Calorie from '../../components/calorie-calculator/Calorie'
import MiniFooter from '../../components/mini-footer/MiniFooter'

const CalorieCalculator = () => {
    return (
        <div>
            <Navbar />
            <Calorie />
            <MiniFooter />
        </div>
    )
}

export default CalorieCalculator
