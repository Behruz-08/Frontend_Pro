// ⁃ Используя цикл найдите чётные числа и выводите эти числа в консоль (диапазон: 0 - 100)

for(let i = 0; i<99; i++){
    console.log(i);  
}

//  ⁃ Используя цикл найдите чётные числа суммируйте в переменную result и потом выводите result
// в консоль (let result = 0; диапазон: 0 - 100) 
let result=[]
for (let i = 0; i<=99; i++){
    if(i%2===0){
     result+=i
    }
}
console.log(result);
//  ⁃ Используя цикл найдите все пробелы в строке (выводите в консоль кол-во “ ”)
const str = "строка  с пробелами ";
let count = 0;
for (let i =0; i < str.length; i++){
    if (str[i] === ' '){
        count++;
    }
}
console.log(count);


//  ⁃ Создайте функцию который выводить 'Hello world!'
function hello (){
  console.log('Hello World!');
}

hello();
//  ⁃ Создайте самовызыващюю функцию который выводить 'Я учу HTML CSS JS REACT'
(function(){
   console.log('Я учу HTML CSS JS REACT');
})();
//  ⁃ Создайте функцию у которого есть 2 аргумента 'a' и 'b' и выводите эти значение на консоль
function argument(a,b){
console.log(a,b);
}
argument('a','b')
//  ⁃ Создайте функцию plus который плюсует два значения 'a' и 'b';
function values(a,b){
    return a+b
}
console.log(values(2,3));
//  ⁃ Создайте функцию который определяет четные или нечетные числа если четные выводить 1 иначе 2
function evenOddNum(number){
    if(number%2==0){
        console.log(1);
    }else{
        console.log(2);
    }
}
evenOddNum(2)
//  ⁃ Создайте функцию который переворачивает значение стринга 
// Например: значение  = ‘test’; после функции значение = ’tset’
function rev(str){
    return str.split('').reverse().join('')
}
const value ='behruz'
console.log(rev(value));