// 1. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе. 

let arr = ['a', 'b', 'c']
let arr1 = [ 1, 2, 3]
let result = arr.concat( arr1 )
console.log( result );

// 2. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

let arr2 = [ 'a', 'b', 'c']
arr2.push( 1, 2, 3 )
console.log( arr2 );

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

let arr3 = [ 1, 2, 3 ]
 arr3.push ( 4, 5, 6 )
console.log(arr3);

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

let arr4 = [ 1, 2, 3 ]
arr4.unshift ( 4, 5, 6 )
console.log( arr4 );

// 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

let arr5 = [ 'js', 'css', 'jq' ]
console.log( arr5[0] );

// 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

let arr6 = [ 'js', 'css', 'jq' ]
console.log( arr6[2] );

// 7.Дан массив [3, 4, 5]. Удалите последний элемент массива

let arr7 = [ 3, 4, 5 ]
arr7.pop()
console.log( arr7 );

// 8.Дан массив [1, 2, 3]. Удалите первый элемент массива

let arr8 = [ 1, 2, 3 ]
arr8.shift()
console.log ( arr8 );

// 9.Создайте массив и добавьте чётные числа из 1 до 100 в этот массив 

let arr9 = [];
for ( let i = 0; i < 100; i++) {
    if ( i % 2 == 0 ) {
        arr9.push ( i )
    }
}
console.log ( arr9 );

// 10.Разделите массивы по типу данный массив [1, ‘hello’, true, 2, ‘4’, false]

let arr10 = [ 1, 'hello', true,  2,  '4',  false ]

let num = [];
let str = [];
let bool =[];

for ( let i = 0; i <arr10.length; i++ ) {
    if ( typeof arr10[i]  === 'number' ) {
        num.push(arr10[i])
    } else if ( typeof arr10[i] === 'string' ) {
        str.push ( arr10[i] )
    } else if ( typeof arr10[i] === 'boolean' ) {
        bool.push ( arr10[i] )
    }
}
console.log(`число: ${num}`);
console.log(`строка: ${str}`);
console.log(`Булевое значение: ${bool}`);



//11.
function test(n) {
    let result = [];
    for(let i = 1; i <= n; i++) {
        let nextResult=[];
        for(let j =0; j < i; j++){
            nextResult.push('*')
        }
        result.push(nextResult)
    }

    return result;
}

console.log(test(1));
console.log(test(2));
console.log(test(3));
console.log(test(4));
console.log(test(5));
console.log(test(6));
console.log(test(7));

/* ========================================== Д.З ===================================================*/


const numbers = [1, 2, 3, 4, 5];

function customMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

const newArr = customMap(numbers, (num) => num * 2);
console.log(newArr); 


function customForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

customForEach(numbers, (num) => {
    console.log(num);
});