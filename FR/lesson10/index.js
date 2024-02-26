
// Создайте функцию нахождение слов по линии и по позиции (где линия это подмассив а позиция это его индекс + 1 начало)

// const text = [
//     ['Lorem ipsum dolor sit amet consectetur,'],
//     ['adipisicing elit. Architecto aut error, eos praesentium, modi vitae eligendi'],
//     ['delectus natus perspiciatis inventore sapiente dolores libero dolorem'],
//     ['ipsum et doloribus! Numquam, neque beatae!']
// ]


// function search(arr, word) {
//    // ваш код
// }

// search(text, 'ipsum') // [{line: 1, position: 7}, {line: 4, position: 1} ]
// search(text, 'dolor') // [{line: 1, position: 13}...]




const text = [
    ['Lorem ipsum dolor sit amet consectetur,'],
    ['adipisicing elit. Architecto aut error, eos praesentium, modi vitae eligendi'],
    ['delectus natus perspiciatis inventore sapiente dolores libero dolorem'],
    ['ipsum et doloribus! Numquam, neque beatae!']
];

function search(arr, word) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        const line = arr[i][0]; 
        const words = line.split(' '); 
        for (let j = 0; j < words.length; j++) {
            if (words[j] === word) {
                results.push({ line: i + 1, position: line.indexOf(word) + 1 });
            }
        }
    }
    return results;
}

console.log(search(text, 'ipsum')); 
console.log(search(text, 'dolor')); 
