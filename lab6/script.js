function hello(){
    console.log("Hello World!");
}

function SUM(){
    const num1 = parseInt(prompt("Enter Num1 :"));
    const num2 = parseInt(prompt("Enter Num2 :"));
    const summ = num1 + num2;
    return summ;
}

function calc(a ,b){
    const inp = prompt("Enter Operation To perform on Two Integers ");
    if (inp=="+"){
        return a + b;
    }
    else if(inp=="-"){
        return a - b;
    }
    else if(inp=="*"){
        return a * b;
    }
    else if(inp=="/"){
        return a / b;
    }
}

hello();
document.write(SUM());
console.log(calc(5,6));