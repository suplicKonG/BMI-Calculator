function bmiCalculator (weight, height) {

    var bmi = weight / (height * height);
    var roundedBmi = bmi.toFixed(2);


    if (bmi <= 18.5){
        alert("Your BMI is " + roundedBmi + ", so you are underweight.");
    }

    if (bmi > 18.5 && bmi <= 24.9){
        alert("Your BMI is " + roundedBmi + ", so you have a normal weight.");
    }

    if (bmi > 24.9){
        alert("Your BMI is " + roundedBmi + ", so you are overweight.");
    }
}

document.getElementById('result').addEventListener('click', () => {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    bmiCalculator(weight, height);
});

