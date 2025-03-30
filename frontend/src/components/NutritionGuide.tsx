import React, { useState } from 'react';

interface MealPlan {
  id: string;
  title: string;
  description: string;
  calories: number;
  meals: {
    type: string;
    items: string[];
    nutrients: {
      protein: number;
      carbs: number;
      fats: number;
    };
  }[];
}

const mealPlans: MealPlan[] = [
  {
    id: '1',
    title: 'Weight Loss Plan',
    description: 'A balanced, calorie-controlled meal plan designed for healthy weight loss.',
    calories: 1500,
    meals: [
      {
        type: 'Breakfast',
        items: [
          'Oatmeal with berries',
          'Greek yogurt',
          'Almonds',
          'Green tea'
        ],
        nutrients: {
          protein: 20,
          carbs: 45,
          fats: 15
        }
      },
      {
        type: 'Lunch',
        items: [
          'Grilled chicken salad',
          'Quinoa',
          'Olive oil dressing',
          'Apple'
        ],
        nutrients: {
          protein: 30,
          carbs: 40,
          fats: 15
        }
      },
      {
        type: 'Dinner',
        items: [
          'Baked salmon',
          'Steamed vegetables',
          'Brown rice',
          'Lemon herb sauce'
        ],
        nutrients: {
          protein: 35,
          carbs: 35,
          fats: 20
        }
      }
    ]
  },
  {
    id: '2',
    title: 'Muscle Gain Plan',
    description: 'High-protein meal plan designed for muscle growth and strength.',
    calories: 2500,
    meals: [
      {
        type: 'Breakfast',
        items: [
          'Protein smoothie bowl',
          'Eggs and toast',
          'Banana',
          'Peanut butter'
        ],
        nutrients: {
          protein: 35,
          carbs: 60,
          fats: 20
        }
      },
      {
        type: 'Lunch',
        items: [
          'Grilled steak',
          'Sweet potato',
          'Mixed vegetables',
          'Greek yogurt'
        ],
        nutrients: {
          protein: 45,
          carbs: 50,
          fats: 25
        }
      },
      {
        type: 'Dinner',
        items: [
          'Grilled chicken breast',
          'Brown rice',
          'Broccoli',
          'Protein shake'
        ],
        nutrients: {
          protein: 40,
          carbs: 55,
          fats: 20
        }
      }
    ]
  },
  {
    id: '3',
    title: 'Vegetarian Plan',
    description: 'Plant-based meal plan rich in nutrients and protein.',
    calories: 2000,
    meals: [
      {
        type: 'Breakfast',
        items: [
          'Tofu scramble',
          'Whole grain toast',
          'Avocado',
          'Fruit smoothie'
        ],
        nutrients: {
          protein: 25,
          carbs: 50,
          fats: 20
        }
      },
      {
        type: 'Lunch',
        items: [
          'Lentil soup',
          'Quinoa salad',
          'Mixed greens',
          'Nuts'
        ],
        nutrients: {
          protein: 30,
          carbs: 45,
          fats: 15
        }
      },
      {
        type: 'Dinner',
        items: [
          'Chickpea curry',
          'Brown rice',
          'Steamed vegetables',
          'Tofu'
        ],
        nutrients: {
          protein: 35,
          carbs: 50,
          fats: 20
        }
      }
    ]
  }
];

const healthyEatingTips = [
  {
    title: 'Stay Hydrated',
    description: 'Drink at least 8 glasses of water daily to maintain proper hydration.',
    icon: '💧'
  },
  {
    title: 'Eat More Fiber',
    description: 'Include plenty of fruits, vegetables, and whole grains in your diet.',
    icon: '🥗'
  },
  {
    title: 'Portion Control',
    description: 'Use smaller plates and practice mindful eating to control portions.',
    icon: '🍽️'
  },
  {
    title: 'Protein Rich Foods',
    description: 'Include lean proteins in every meal to support muscle health.',
    icon: '🥩'
  }
];

const NutritionGuide: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<MealPlan>(mealPlans[0]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nutrition Guide</h2>
        
        {/* Healthy Eating Tips */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Healthy Eating Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthyEatingTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h4 className="text-xl font-medium mb-2">{tip.title}</h4>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meal Plans */}
        <section>
          <h3 className="text-2xl font-semibold mb-8">Meal Plans</h3>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-8">
              <select
                value={selectedPlan.id}
                onChange={(e) => setSelectedPlan(mealPlans.find(plan => plan.id === e.target.value) || mealPlans[0])}
                className="mb-4 p-2 border rounded-md"
              >
                {mealPlans.map(plan => (
                  <option key={plan.id} value={plan.id}>{plan.title}</option>
                ))}
              </select>
              <h4 className="text-xl font-medium mb-2">{selectedPlan.title}</h4>
              <p className="text-gray-600 mb-4">{selectedPlan.description}</p>
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {selectedPlan.calories} calories per day
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selectedPlan.meals.map((meal, index) => (
                <div key={index} className="border rounded-lg p-6">
                  <h5 className="text-lg font-medium mb-4">{meal.type}</h5>
                  <ul className="space-y-2 mb-4">
                    {meal.items.map((item, i) => (
                      <li key={i} className="text-gray-600">• {item}</li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <h6 className="font-medium mb-2">Nutrients</h6>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Protein</span>
                        <p>{meal.nutrients.protein}g</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Carbs</span>
                        <p>{meal.nutrients.carbs}g</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Fats</span>
                        <p>{meal.nutrients.fats}g</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors">
            Download Meal Plan PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default NutritionGuide; 