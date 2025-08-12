// apply dark theme
let theme = 'dark'

let themeColor = theme === 'dark' ? "#1f1f1f" : "#fff";
let textColor = theme === 'dark' ? "#fff" : "#000";
document.body.style.backgroundColor = themeColor;
document.body.style.color = textColor;


// let num1 = Number(prompt("Enter 1st Number"));
// let num2 = Number(prompt("Enter 2nd Number"));
// let result;
// let operator  = prompt("Enter Operator: e.g + , - , * , / , %");

// if(operator == "+"){
//     result = num1 + num2;
// }else if(operator == "-"){
//     result = num1 - num2;
// }else if(operator == "*"){
//     result = num1 * num2;
// }else if(operator == '/'){
//     result = num1 / num2;
// }else if(operator == '%'){
//     result = num1 % num2;
// }else{
//     alert("Sorry Invalid Operator")
// }

// alert(result)


// BMI calcuator

let weight = prompt('Enter ur Weight');
let height = prompt("Enter your height");

// bmi formula

let bmi = weight / (height * height);
let weightStatus;

if(bmi <= 36){
    weightStatus = ("Underweight");
}else if(bmi >= 36 &&  bmi <= 66){
    weightStatus = ("Healthy Weight")
}else if(bmi >= 66 && bmi <= 66){
    weightStatus = ("Overweight")
}else{
    weightStatus = ("Obsity")
}

alert(weightStatus);