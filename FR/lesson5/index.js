// 1USD = 10.20


// Vasya 1000 // TJS 
// Ivan 150 // TJS
// Anton 230 // TJS
// Jony 1234 // USD
// Max 333 // USD
// John 780 // USD
// Umed 280 // TJS

// 1. Создайте данные обекты (Пример: 
// 2. Создайте массив persons и в нём добавтье эти обекты
// 3. Создайте новый массив  richMens и добавтье людей у которых сумма больше 500 TJS
// 4. Просуммируйте все суммы массива persons и найдите результат в сомони;



let Vasya = {
    name: 'Vasya',
    amount: 1000,
    currency: 'TJS'
};

let Ivan = {
    name: 'Ivan',
    amount: 150,
    currency: 'TJS'
};

let Anton = {
    name: 'Anton',
    amount: 230,
    currency: 'TJS'
};

let Jony = {
    name: 'Jony',
    amount: 1234,
    currency: 'USD'
};

let Max = {
    name: 'Max',
    amount: 333,
    currency: 'USD'
};

let John = {
    name: 'John',
    amount: 780,
    currency: 'USD'
};

let Umed = {
    name: 'Umed',
    amount: 280,
    currency: 'TJS'
};

const persons = [Vasya, Ivan, Anton, Jony, Max, John, Umed];

const curs = 10.20; 


const richMens = persons.filter(person => {
    return person.currency === 'TJS' && person.amount > 500;
});


let totalTJS = persons.reduce((total, person) => {
    if (person.currency === 'USD') {
        return total + person.amount * curs;
    }
    return total + person.amount;
}, 0);

console.log('Люди с более 500 TJS:', richMens);
console.log('Общая сумма в Таджикских сомони:', totalTJS);

/* ========================================== Д.З ===================================================*/

// 1. Создайте объект user с полями name, age и email, и напишите функцию, которая выводит информацию о пользователе в формате  
//    "Имя: name, Возраст: age, E-mail: email".

//    2. Напишите функцию, которая принимает на вход объект с товарами и их ценами, а затем выводит информацию о товарах, у которых   цена выше определённой суммы (250).

//  1. Создайте объект car с полями brand, model и year, и напишите функцию, которая принимает этот объект в качестве аргумента и возвращает строку вида "Год выпуска year, Модель brand model".
  
//   4. Напишите функцию, которая принимает массив объектов студентов (с полями name, age, grade) и возвращает средний возраст студентов.


//1.1

const user = {
    name: 'John',
    age: 30,
    email: 'john@mail.com'
};


function userInfo(user) {
    console.log(`Имя: ${user.name}, Возраст: ${user.age}, E-mail: ${user.email}`);
}

userInfo(user);


function filterProductsPrice(products, prices) {
    for (const [product, price] of Object.entries(products)) {
        if (price > prices) {
            console.log(`${product} - Цена: ${price}`);
        }
    }
}

const products = {
    'Товар 1': 200,
    'Товар 2': 300,
    'Товар 3': 250,
    'Товар 4': 400
};

filterProductsPrice(products, 250);

 //1.2


const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022
};


function carInfo(car) {
    return `Год выпуска ${car.year}, Модель ${car.brand} ${car.model}`;
}

console.log(carInfo(car));


function calculateAge(students) {
    let totalAge = 0;
    
    for (const student of students) {
        totalAge += student.age;
    }

    const ages = totalAge / students.length;
    return ages;
}

const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 25, grade: 'C' }
];

const ages = calculateAge(students);
console.log('Средний возраст студентов:', ages);