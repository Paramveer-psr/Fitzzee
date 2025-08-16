import React from "react"
import '../bmi-calculator/bmi.css'
import calculateBMI from '../bmi-calculator/bmiCalculate'
import myImage from '../../../src/images/BMItable.png'

const Bmi = () => {

    return (
        <>
            <div className="bmi-page">
                <div className="bmi-container">
                    <h1>BMI Calculator</h1>
                    <label htmlFor="height"><b>Height:</b></label>
                    <input type="number" id="height" placeholder="Enter height" />
                    <select id="height-unit">
                        <option value="cm">cm</option>
                        <option value="m">m</option>
                        <option value="in">in</option>
                        <option value="ft">ft</option>
                    </select><br /><br />
                    <label htmlFor="weight"><b>Weight:</b></label>
                    <input type="number" id="weight" placeholder="Enter weight" />
                    <select id="weight-unit">
                        <option value="kg">kg</option>
                        <option value="lbs">lbs</option>
                    </select><br /><br />
                    <label htmlFor="gender"><b>Gender:</b></label>
                    <select id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br /><br />
                    <button className="bmi-button" onClick={calculateBMI} >Calculate BMI</button>
                    <div id="result"></div>
                    <div className="bmi-table">
                        <img src={myImage} alt="BMI-Table" />
                    </div>
                </div>
                <div className="bmi-content">
                    <h1>What is BMI?</h1>
                    <p>BMI, or Body Mass Index, is a measure of body fat based on a person's height and weight. It's a simple yet
                        effective tool to assess whether a person has a healthy weight htmlFor their height. BMI is widely used by
                        healthcare professionals and individuals alike to gauge their risk of various health conditions associated with
                        weight.
                    </p>
                    <h1>How BMI is Calculated?</h1>
                    <p>BMI is calculated using the following htmlFormula: <br /><i className="fa-regular fa-hand-point-right"></i> BMI =
                        weight (kg) / (height (m) * height (m)) <br />Or, in the imperial system: <br />
                        <i className="fa-regular fa-hand-point-right"></i> BMI = (weight (lbs) /
                        (height (in) * height (in))) * 703</p>
                    <h1>Importance of BMI</h1>
                    <p>Maintaining a healthy BMI is crucial htmlFor overall health and well-being. Here are some reasons why
                        monitoring BMI is important:</p>
                    <ul>
                        <li>
                            <p><b>Health Risks:</b>Being underweight or overweight increases the risk of various health conditions such as
                                heart disease, diabetes, hypertension, and certain cancers.</p>
                        </li>
                        <li>
                            <p><b>Fitness Assessment:</b>BMI serves as a quick and easy way to assess whether a person's weight is within
                                a healthy range relative to their height.</p>
                        </li>
                        <li>
                            <p><b>Weight Management:</b>Understanding one's BMI can help in setting realistic weight loss or gain goals
                                and tracking progress over time.</p>
                        </li>
                    </ul>
                    <h1>Conclusion</h1>
                    <p>Maintaining a healthy BMI is an essential aspect of overall health and well-being. By using this BMI
                        calculator and understanding the results, you can take proactive steps towards achieving and maintaining a
                        healthy weight, thereby reducing the risk of weight-related health issues and improving your quality of life.
                    </p>
                </div>
            </div>
        </>

    );

}

export default Bmi