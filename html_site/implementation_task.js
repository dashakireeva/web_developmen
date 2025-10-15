function verify() {
    console.log("a, b, c, d")
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    let c = parseInt(elementC.value);
    let d = parseInt(elementD.value);
    console.log(a, b, c, d)

    // Проверяем два варианта размещения:
    // 1. Стороны a,b параллельны c,d 
    // 2. Стороны a,b параллельны d,c
    // let low, high
    if ((a <= c && b <= d) || (a <= d && b <= c)) {
        result = "Прямоугольник ab может уместиться внутри прямоугольника cd";
        check = true;
    } 
    else {
        result = "Прямоугольник ab не может уместиться внутри прямоугольника cd";
        check = false;
    }
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}



let result;
let check;

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");
const elementD = document.getElementById("d");


const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)



