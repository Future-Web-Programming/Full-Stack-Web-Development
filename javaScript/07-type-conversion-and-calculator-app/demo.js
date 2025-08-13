// apply dark theme
let theme = 'dark'

let themeColor = theme === 'dark' ? "#1f1f1f" : "#fff";
let textColor = theme === 'dark' ? "#fff" : "#000";
document.body.style.backgroundColor = themeColor;
document.body.style.color = textColor;

// Simple Calculator 

let num1 = Number(prompt("Enter 1st Number"));
let num2 = Number(prompt("Enter 2nd Number"));
let result;
let operator  = prompt("Enter Operator: e.g + , - , * , / , %");

if(operator == "+"){
    result = num1 + num2;
}else if(operator == "-"){
    result = num1 - num2;
}else if(operator == "*"){
    result = num1 * num2;
}else if(operator == '/'){
    result = num1 / num2;
}else if(operator == '%'){
    result = num1 % num2;
}else{
    alert("Sorry Invalid Operator")
}

alert(result)


// BMI calcuator

let weight = prompt('Enter ur Weight');
let height = prompt("Enter your height");

// convert height into meeters 

let heightFeets = height.charAt(0) * 0.3048 ?? "";
let heightInches = height.charAt(2) * 0.0254 ?? "";

let totalHeight = heightFeets + heightInches;

// bmi formula

let bmi = weight / totalHeight ** 2;

let weightStatus;

if(bmi <= 18.5){
    weightStatus = ("Underweight");
}else if(bmi >= 18.5 &&  bmi <= 24.9){
    weightStatus = ("Healthy Weight")
}else if(bmi >= 25.0 && bmi <= 29.9){
    weightStatus = ("Overweight")
}else{
    weightStatus = ("Obesity")
}

alert(weightStatus);