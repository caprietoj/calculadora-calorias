document.getElementById("calorieForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const activity = parseFloat(document.getElementById("activity").value);
    const age = parseFloat(document.getElementById("age").value);

    // Calcular la Tasa Metabólica Basal (TMB) usando la fórmula de Harris-Benedict
    let bmr;
    if (gender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Calcular las calorías totales al multiplicar la TMB por el factor de actividad
    const maintainCalories = bmr * activity;
    const loseCalories = maintainCalories - 500;
    const gainCalories = maintainCalories + 500;

    // Mostrar el resultado en la página
    document.getElementById("result").innerHTML = `
        <p>Calorías diarias necesarias para mantener el peso: ${Math.round(maintainCalories)}</p>
        <p>Calorías diarias necesarias para perder peso: ${Math.round(loseCalories)}</p>
        <p>Calorías diarias necesarias para ganar peso: ${Math.round(gainCalories)}</p>
    `;
});

