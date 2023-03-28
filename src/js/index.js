function calculate() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operator = document.getElementById("operator").value;
    var result;
    if (operator == '+') {
        result = parseFloat(num1) + parseFloat(num2);
    } else if (operator == '-') {
        result = num1 - num2;
    } else if (operator == '*') {
        result = num1 * num2;
    } else if (operator == '/') {
        if (num2 == 0) { result = "Không thể chia cho 0"; } else { result = num1 / num2; }
    }
    document.getElementById("result").innerHTML = result;
}
let currentInput = 1;
function setCurrentInput(inputNum) {
    currentInput = inputNum;
}

function addNumber(num) {
    let input = document.getElementById("num" + currentInput);
    input.value = input.value + num;
}
function deleteData(){
    var num1= document.getElementById("num1");
    var num2= document.getElementById("num2");
    var result= document.getElementById("result");
    num1.value="";
    num2.value="";
    result.innerHTML="";
}