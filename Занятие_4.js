function yeah1(item_1, item_2){  // d {} - тело цикла/функции, () - что функция принимает на вход, когда её вызывают

    let mass = 'Hello!'
    console.log(mass, item_1, item_2)
}

yeah1(11, 22) // приравнивается значение переменным item_1, item_2

//стрелочные функции =>

function f1(){  // d {} - тело цикла/функции, () - что функция принимает на вход, когда её вызывают
    console.log('Hello!')
}

let t1 = 10
let t2 = 20

let t3 = 30
let t4 = 40

let f11 = () => {console.log('Hello!!!!!')}
let f22 = (t11, t22) => {console.log("Sum = ", t11 + t22)}

f22(t1, t2)

let f33 = (t1 > t2 || t3 > t4) ?// ? - и чо,  делать дальше
(tt1 + tt2): // : если true, выполняется этот вариант
   (tt1, tt2) =>  console.log("order =", tt1 - tt2); // ; если false, выполняется этот вариант

f33(t3, t4) // - вызов функции




function yolochka(){}; // - дополняем функцию другими функциями

yolochka.prototype.fast = function () {
    console.log("Fast")
}  

yolochka.prototype.green = function (sun, co2){
    console.log("Green ==", sun, '+', co2)
}

yolochka.prototype.shishki = function (){
    console.log("Shishki == yolki")
}

let forest = new yolochka()
forest.fast()
forest.green(4000,50)