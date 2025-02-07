from flask import Flask, request, jsonify
import numpy as np
import joblib
import pandas as pd

app = Flask(__name__)

def print_information(predicted_disease):
    description = pd.read_csv('../csv/description.csv')
    workout = pd.read_csv('../csv/workout_df.csv')
    precautions = pd.read_csv('../csv/precautions_df.csv')
    symtoms = pd.read_csv('../csv/symtoms_df.csv')
    medications = pd.read_csv('../csv/medications.csv')
    diets = pd.read_csv('../csv/diets.csv')

    desc = description[description['Disease'] == predicted_disease]['Description'].values
    syms = symtoms[symtoms['Disease'] == predicted_disease][['Symptom_1','Symptom_2','Symptom_3','Symptom_4']].values
    med = medications[medications['Disease'] == predicted_disease]['Medication'].values
    prec = precautions[precautions['Disease'] == predicted_disease][['Precaution_1','Precaution_2','Precaution_3','Precaution_4']].values
    diet = diets[diets['Disease'] == predicted_disease]['Diet'].values
    work = workout[workout['disease'] == predicted_disease]['workout'].values

    syms_list = pd.unique(syms.ravel())
    syms_list = pd.Series(syms_list).dropna().tolist()
    prec_list = pd.unique(prec.ravel())
    prec_list = pd.Series(prec_list).dropna().tolist()

    return desc, syms_list, med, prec_list, diet, work

@app.route('/diagnosis', methods=['POST'])
def diagnosis():
    data = request.json or {}
    s1 = data.get('Symptom1', '')
    s2 = data.get('Symptom2', '')
    s3 = data.get('Symptom3', '')
    s4 = data.get('Symptom4', '')
    s5 = data.get('Symptom5', '')

    all_symptoms = [
        'itching','skin_rash','nodal_skin_eruptions','continuous_sneezing','shivering','chills','joint_pain','stomach_pain','acidity','ulcers_on_tongue',
        'muscle_wasting','vomiting','burning_micturition','spotting_ urination','fatigue','weight_gain','anxiety','cold_hands_and_feets','mood_swings','weight_loss',
        'restlessness','lethargy','patches_in_throat','irregular_sugar_level','cough','high_fever','sunken_eyes','breathlessness','sweating','dehydration',
        'indigestion','headache','yellowish_skin','dark_urine','nausea','loss_of_appetite','pain_behind_the_eyes','back_pain','constipation','abdominal_pain',
        'diarrhoea','mild_fever','yellow_urine','yellowing_of_eyes','acute_liver_failure','fluid_overload','swelling_of_stomach','swelled_lymph_nodes','malaise',
        'blurred_and_distorted_vision','phlegm','throat_irritation','redness_of_eyes','sinus_pressure','runny_nose','congestion','chest_pain','weakness_in_limbs',
        'fast_heart_rate','pain_during_bowel_movements','pain_in_anal_region','bloody_stool','irritation_in_anus','neck_pain','dizziness','cramps','bruising',
        'obesity','swollen_legs','swollen_blood_vessels','puffy_face_and_eyes','enlarged_thyroid','brittle_nails','swollen_extremeties','excessive_hunger',
        'extra_marital_contacts','drying_and_tingling_lips','slurred_speech','knee_pain','hip_joint_pain','muscle_weakness','stiff_neck','swelling_joints',
        'movement_stiffness','spinning_movements','loss_of_balance','unsteadiness','weakness_of_one_body_side','loss_of_smell','bladder_discomfort',
        'foul_smell_of urine','continuous_feel_of_urine','passage_of_gases','internal_itching','toxic_look_(typhos)','depression','irritability','muscle_pain',
        'altered_sensorium','red_spots_over_body','belly_pain','abnormal_menstruation','dischromic _patches','watering_from_eyes','increased_appetite','polyuria',
        'family_history','mucoid_sputum','rusty_sputum','lack_of_concentration','visual_disturbances','receiving_blood_transfusion','receiving_unsterile_injections',
        'coma','stomach_bleeding','distention_of_abdomen','history_of_alcohol_consumption','fluid_overload.1','blood_in_sputum','prominent_veins_on_calf',
        'palpitations','painful_walking','pus_filled_pimples','blackheads','scurring','skin_peeling','silver_like_dusting','small_dents_in_nails',
        'inflammatory_nails','blister','red_sore_around_nose','yellow_crust_ooze'
    ]

    flags = [0]*len(all_symptoms)
    for symptom in [s1, s2, s3, s4, s5]:
        if symptom in all_symptoms:
            idx = all_symptoms.index(symptom)
            flags[idx] = 1

    clf = joblib.load('../models/decision_tree.pkl')
    prediction = clf.predict([flags])[0]

    desc, syms, med, prec, diet, work = print_information(prediction)
    return jsonify({
      'result': prediction,
      'description': desc.tolist() if len(desc) else [],
      'symptoms': syms,
      'medications': med.tolist() if len(med) else [],
      'precautions': prec,
      'diet': diet.tolist() if len(diet) else [],
      'workout': work.tolist() if len(work) else []
    })

# Add your Flask run invocation as needed
# For example:
if __name__ == '__main__':
    app.run(port=5000, debug=True)