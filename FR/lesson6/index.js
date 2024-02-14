//1.Напишите функцию замыкания (sum) который на внешней функции получает аргумент (number) и внутренняя функция получает аргумент (number) в результате возвращается сумма этих чисел.

function sum(numbers){
    return function(number){
        return numbers+number
    }
}

const addNum=sum(2)
console.log(addNum(3));

//2.Напишите функцию замыкания в котором есть массив из строк.При вызове функции передаётся аргумент строка и   добавляется в массив.

function stringArray(){
    let string=[];
    return function(str){
        string.push(str)
        return string;
    }
}

const addString=stringArray()
console.log(addString('Zoirov'));
console.log(addString('Behruz'));

//3.Напишите функцию замыкания в котором есть пустая строка.При вызове функции передаётся аргумент строка и добавляется в строку.

function strings(){
    let str = '';
    return function(string){
        str += string
        return str;
    }

}

const addStr=strings();
console.log(addStr('hello'));

//4 Напишите функцию замыкания в котором есть 2 функции:
// - plus (плюсует числа в count, изначально count = 0)  
//  - minus (минусует числа в count)

function counter(){

    let count = 0;

 function plus(num){
        count += num
        return count;
    }
function minus (num){
        count -= num;
        return count
    }

    return {plus, minus}

}

const calculate = counter()
console.log(calculate.plus(10)); //10
console.log(calculate.plus(20));//30
console.log(calculate.minus(30));//0



