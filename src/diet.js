const bmiCategory = localStorage.getItem('bmiCategory') || 'normal'; // Default: normal

// Menu berdasarkan kategori BMI
const dietaryPlans = {
    underweight: [
        { meal: 'Breakfast', details: ['Avocado toast with egg: 400 calories', 'Smoothie with whole milk, banana, and peanut butter: 450 calories'] },
        { meal: 'Lunch', details: ['Grilled chicken with quinoa and roasted vegetables: 600 calories', 'Beef burger with avocado and sweet potato fries: 650 calories'] },
        { meal: 'Snack', details: ['Greek yogurt with honey and granola: 300 calories', 'Protein bar with nuts and dried fruits: 350 calories'] },
        { meal: 'Dinner', details: ['Salmon steak with mashed potatoes and steamed broccoli: 700 calories', 'Pasta with cream sauce, chicken, and mushrooms: 650 calories'] },
        { meal: 'Exercise', details: ['Strength training 3 times a week', 'Light jogging or brisk walking to improve appetite'] }
    ],
    normal: [
        { meal: 'Breakfast', details: ['Oatmeal with fruits and almond milk: 300 calories', 'Scrambled eggs with spinach and whole-grain toast: 350 calories'] },
        { meal: 'Lunch', details: ['Grilled chicken salad with olive oil dressing: 450 calories', 'Brown rice with grilled fish and sautéed green beans: 500 calories'] },
        { meal: 'Snack', details: ['Mixed nuts (almonds, walnuts, cashews): 250 calories', 'Apple slices with almond butter: 200 calories'] },
        { meal: 'Dinner', details: ['Steamed fish with vegetables and brown rice: 400 calories', 'Grilled chicken breast with roasted sweet potatoes and asparagus: 450 calories'] },
        { meal: 'Exercise', details: ['Cardio exercises such as running or cycling (30 minutes daily)', 'Yoga or pilates for flexibility and core strength'] }
    ],
    overweight: [
        { meal: 'Breakfast', details: ['Green smoothie (spinach, kale, green apple, lemon): 200 calories', 'Egg white omelette with mushrooms and tomatoes: 250 calories'] },
        { meal: 'Lunch', details: ['Vegetable stir-fry with tofu and cauliflower rice: 350 calories', 'Grilled salmon with a side of steamed zucchini and carrots: 400 calories'] },
        { meal: 'Snack', details: ['Carrot and celery sticks with hummus: 150 calories', 'Low-fat Greek yogurt with blueberries: 180 calories'] },
        { meal: 'Dinner', details: ['Grilled chicken breast with steamed broccoli and quinoa: 400 calories', 'Lentil soup with a side of cucumber salad: 350 calories'] },
        { meal: 'Exercise', details: ['High-intensity interval training (HIIT) for 20 minutes', 'Walking or cycling at a moderate pace for 45 minutes daily'] }
    ],
};

// Fungsi untuk menampilkan menu sesuai kategori BMI
function loadDietaryPlan(category) {
    const menuSection = document.querySelector('.menu');
    const categoryInfo = document.getElementById('categoryInfo');
    const detailsSection = document.getElementById('details');

    categoryInfo.textContent = `Your BMI category is: ${category.toUpperCase()}`;

    dietaryPlans[category].forEach((item) => {
        const button = document.createElement('button');
        button.textContent = item.meal;
        button.classList.add('menu-button');
        button.addEventListener('click', () => {
            detailsSection.innerHTML = `
                <h3>${item.meal}</h3>
                <ul>
                    ${item.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            `;
        });
        menuSection.appendChild(button);
    });
}

window.addEventListener('load', () => {
    loadDietaryPlan(bmiCategory);
});
