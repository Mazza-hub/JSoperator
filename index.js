let para = document.getElementsByClassName("pg")
let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
let operator = document.getElementById("operator");
let res = document.getElementById("result");

function calculation(){
    let num1 = parseInt(input1.value);
    let num2 = parseInt(input2.value);
    let op = operator.value;
    
    if(op === "/" && num2 == 0){
        res.innerText = "You cannot perform this operation";
        return;
    }

    switch(op){
        case '+': res.innerText = "Ans = " + (num1 + num2);
                  break;
        case '-': res.innerText = "Ans = " + (num1 - num2);
                  break;
        case '*': res.innerText = "Ans = " + (num1 * num2);
                  break;
        case '/': res.innerText = "Ans = " + (num1 / num2);
                  break;
    }
}


console.log(para);
function changeText(){
    para[0].innerHTML = "Bye";
    para[1].innerHTML = "GoodBye";
    para[2].innerHTML = "world";
    para[3].innerHTML = "earth";
    para[4].innerHTML = "json";
    para[4].style.color ="red";
}