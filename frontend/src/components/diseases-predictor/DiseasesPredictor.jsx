import React, { useState } from 'react';
import { useEffect } from 'react';
import '../diseases-predictor/DiseasesPredictor.css'

const DiseasesPredictor = () => {
    // State to store selected symptoms from dropdown
    const [firstSymptom, setFirstSymptom] = useState('');
    const [secondSymptom, setSecondSymptom] = useState('');
    const [thirdSymptom, setThirdSymptom] = useState('');
    const [fourthSymptom, setFourthSymptom] = useState('');
    const [fifthSymptom, setFifthSymptom] = useState('');

    // Array for dropdown options (you can replace this with actual symptom options)
    const [symptoms, setSymptoms] = useState([
        'itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 'joint_pain', 'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting', 'burning_micturition', 'spotting_ urination', 'fatigue', 'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy', 'patches_in_throat', 'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish_skin', 'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate', 'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes', 'enlarged_thyroid',
        'brittle_nails', 'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort', 'foul_smell_of urine', 'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)', 'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 'belly_pain', 'abnormal_menstruation', 'dischromic _patches', 'watering_from_eyes', 'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration', 'visual_disturbances', 'receiving_blood_transfusion', 'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen', 'history_of_alcohol_consumption', 'fluid_overload', 'blood_in_sputum', 'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze'
    ]);

    const sortSymptoms = () => {
        const sortedSymptoms = [...symptoms].sort(); // Sorting in ascending order
        setSymptoms(sortedSymptoms); // Update the state with the sorted array
    };

    useEffect(() => {
        sortSymptoms(); // Automatically sorts the symptoms when component loads
    }, []);

    const handleSubmit = () => {
        // You can handle prediction logic here (API calls or algorithm)
        alert('Prediction logic would go here!');
    };

    return (
        <div>
            <div className="diseases-predictor-container">
                <h1>Disease Prediction</h1>
                <div className="symptom-selection">
                    <div className="symptom-item">
                        <label><b>1st Symptom:</b></label>
                        <select value={firstSymptom} onChange={(e) => setFirstSymptom(e.target.value)}>
                            <option value="">Select symptom</option>
                            {symptoms.map((symptom, index) => (
                                <option key={index} value={symptom}>
                                    {symptom}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="symptom-item">
                        <label><b>2nd Symptom:</b></label>
                        <select value={secondSymptom} onChange={(e) => setSecondSymptom(e.target.value)}>
                            <option value="">Select symptom</option>
                            {symptoms.map((symptom, index) => (
                                <option key={index} value={symptom}>
                                    {symptom}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="symptom-item">
                        <label><b>3rd Symptom:</b></label>
                        <select value={thirdSymptom} onChange={(e) => setThirdSymptom(e.target.value)}>
                            <option value="">Select symptom</option>
                            {symptoms.map((symptom, index) => (
                                <option key={index} value={symptom}>
                                    {symptom}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="symptom-item">
                        <label><b>4th Symptom:</b></label>
                        <select value={fourthSymptom} onChange={(e) => setFourthSymptom(e.target.value)}>
                            <option value="">Select symptom</option>
                            {symptoms.map((symptom, index) => (
                                <option key={index} value={symptom}>
                                    {symptom}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="symptom-item">
                        <label><b>5th Symptom:</b></label>
                        <select value={fifthSymptom} onChange={(e) => setFifthSymptom(e.target.value)}>
                            <option value="">Select symptom</option>
                            {symptoms.map((symptom, index) => (
                                <option key={index} value={symptom}>
                                    {symptom}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <button onClick={handleSubmit}>Predict Disease</button>
            </div>
        </div>
    );
};

export default DiseasesPredictor;
