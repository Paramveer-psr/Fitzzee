import React from 'react'
import '../calorie-calculator/Calorie.css'
import calorieCalculate from '../calorie-calculator/calorieCalculate'

const Calorie = () => {
    return (
        <div>
            <div className="calorie-page">
                <div className="calorie-container">
                    <h1>Calorie Calculator</h1>
                    <label for="age"><b>Age:</b></label>
                    <input type="number" id="age" placeholder="Enter age" /><br /><br />
                    <label for="weight"><b>Weight (kg):</b></label>
                    <input type="number" id="weight" placeholder="Enter weight in kg" /><br /><br />
                    <label for="height"><b>Height (cm):</b></label>
                    <input type="number" id="height" placeholder="Enter height in cm" /><br /><br />
                    <label for="gender"><b>Gender:</b></label>
                    <select id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br /><br />
                    <label for="activity-level"><b>Activity Level:</b></label>
                    <select id="activity-level">
                        <option value="" disabled selected>Select an option</option>
                        <option value="sedentary">Sedentary (little or no exercise)</option>
                        <option value="lightly-active">Lightly active (light exercise/sports 1-3 days/week)</option>
                        <option value="moderately-active">Moderately active (moderate exercise/sports 3-5 days/week)</option>
                        <option value="very-active">Very active (hard exercise/sports 6-7 days a week)</option>
                        <option value="extra-active">Extra active (very hard exercise/sports & physical job)</option>
                    </select><br /><br />
                    <button className='calorie-button' onClick={calorieCalculate}>Calculate Calories</button><br /><br />
                    <div id="result"></div>
                </div>
                <div className="calorie-content">
                    <h1>Daily Calories Requirement</h1>
                </div>
            </div>
        </div>
    )
}

export default Calorie
