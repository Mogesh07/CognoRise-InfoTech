function calculateBMI() {
	var weight = document.getElementById("weight").value;
	var height = document.getElementById("height").value;
	var bmi = weight / (height * height);
	var result = document.getElementById("result");
	
	if (bmi < 18.5) {
		result.textContent = "Underweight: " + bmi.toFixed(2);
	} else if (bmi < 25) {
		result.textContent = "Normal weight: " + bmi.toFixed(2);
	} else if (bmi < 30) {
		result.textContent = "Overweight: " + bmi.toFixed(2);
	} else {
		result.textContent = "Obese: " + bmi.toFixed(2);
	}
}
