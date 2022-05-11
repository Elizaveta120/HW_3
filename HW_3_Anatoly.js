//1. скрипт, который возводит 2*10 степень
let i = 2;
let result = 1
while (i < 11) {
    result = result *2
    i++
}
console.log(result)

 // 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
 // 1 вариант
 const power = function(num){
    let result = 1
    for(let i = 1; i <= num; i++){
        result = result *2
    }
    return result
 }
 console.log(power(10))

 // 2 вариант
 const power2 = function(num){
     return 2**num
 }
 console.log(power2(10))

 // 3 вариант
 const power3 = function(num){
     return Math.pow(2,num)
    }
 console.log(power3(10))

 //Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
 let word = '=)'
 let result2 = ''
 for (let i=1; i<=5; i++){
     result2+=word //переприсвоение самой себя +=
     console.log(result2)
 }

// 2* Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows)
//вариант 1
function printSmile(stroka, numberOfRows){
    let result = " ";
    for (let i = 1; i<numberOfRows; i++){
        result+=stroka
        console.log(result)
    }
}
printSmile("=)", 5)

//вариант 2
function printSmile2(stroka, numberOfRows){ //аргумент функции
    for (let i = 1; i<=numberOfRows; i++){
        console.log(stroka.repeat(i))
    }
}
printSmile2("=)", 6)

//3** Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв. e.g. function getWordStructure(word)
//В консоли: Слово (word) состоит из  (число) гласных и (число) согласных букв
//Проверки: 'case', 'Case'

// function getWordStructure2(word) {
//     const vowels = 'aeiouy'.split('')
//     const consonants = 'bcfghbjnkf'.split('')
//     let numberOfVowels = 0;
//     let numberofConsonants = 0;
//     for(char of word.toLowerCase()) {
//         if (vowels.includes(char)) numberOfVowels++;
//         if (consonants.includes(char)) numberofConsonants++;

//     }
//     console.log('Слово', ${word}, 'состоит из', ${numberofVowels}, 'гласных и', ${numberofConsonants}, 'согласных букв')

// }
//  // функция не активна, $ не работает(((
// getWordStructure2('Case')
// getWordStructure2('case')
// getWordStructure2('Homosapiens')


//4** Написать функцию, которая проверяет является ли слово палиндромом

function isPalindrom(word) {
    let newStroka = '';
    for (i = word.lenght - 1; i >= 0; i --) {
        newStroka = newStroka + word[i];
    }
    if (word.toLowerCase() == newStroka.toLocaleLowerCase()) {
        console.log(word, ' - палиндром');
    } 
    else {
        console.log(word, ' -  не палиндром'); 
    }
}

isPalindrom('Alilya')

//Почему она ругаться?:

// function isPalindrom(word) {
//     return word.toLocaleLowerCase() == word.toLocaleLowerCase().split('').reverse().join('')
// }
// console.log('${isPalindrom('Abba") ? 'It is a palindrome' : 'It is not a palindrom'}')