var num1 = prompt('Enter Number 1 :');
var num2 = prompt('Enter Number 2 :');
var num3 = prompt('Enter Number 3 :');

{/* if (number1 < number2 && number1 < number3) {
    alert(number1);
} else if (number2 < number1 && number2 < number3) {
    alert(number2);
} else {
    alert(number3);
} */}


if(num1 < num2){
    if(num1 < num3){
        alert(num1);
    }
    else{
        alert(num3);
    }
}else{
    if(num2 < num3){
        alert(num2);
    }
    else{
        alert(num3);
    }
}