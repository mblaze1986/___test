import '../scss/app.scss';

/* Your JS Code goes here */

import './_test.js'

import './01_numbers.js'
import './02_strings.js'
import './03_functions.js'
import './04_arrays.js'

//1 переменные -------------------------------------------------------------------------


//camelCase
// let firstName = 'Dmitry'
// const lastName = 'Ish'
// const age = 34
// const isProgrammer = true

// const _private = 'private'
// const $ = 'some value'

// console.log(isProgrammer);


//2 мутирование -------------------------------------------------------------------------


// console.log('Имя человека: ' + firstName, 'а возвраст человека: ' + age)
// console.log(age.toString()) //преобразование в число

// alert('Имя человека: ' + firstName, 'а возвраст человека: ' + age)

// const lastName = prompt('enter sourname')
// alert(firstName + '' + lastName)


//3 операторы -------------------------------------------------------------------------


// let currentYear = 2021
// const birthYear = 1986

// // const age = currentYear - birthYear

// const a = 10
// const b = 5

// let c = 32
// // c = c + a
// c += a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear++)
// console.log(--currentYear)
// console.log(c)


//4 типы данных -------------------------------------------------------------------------

// const isProgrammer = true
// const name = 'Dima'
// const age = 26
// let x

// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)



//5 Приоритет операторов -------------------------------------------------------------------------
// const fullAge = 34
// const birthYear = 1986
// const currentYear = 2021

// const isFullAge = (currentYear - birthYear) >= fullAge

// console.log(isFullAge)


//6 условные операторы -------------------------------------------------------------------------

// const courseStatus = 'pending'
// const courseStatus = 'ready'
// const courseStatus = 'xxx'


// if (courseStatus === 'ready') {
//       console.log('Готово')
// } else if (courseStatus === 'pending') {
//       console.log('Не готово')
// } else {
//       console.log('Не определено')
// }


// const num1 = 42
// const num2 = '42'
// console.log(num1 === num2)


// const isReady = true
// if (isReady) {
//       console.log('Все ок')
// } else {
//       console.log('Не ок')
// }

// --- тернарное выражение ---
// isReady ? console.log('Все ок') : console.log('Не ок')



//7 Булевая логика -------------------------------------------------------------------------



//8 Функции -------------------------------------------------------------------------

// function calculateAge(year) {
//   return 2020 - year
// }

// // console.log(calculateAge (1986))
// // console.log(calculateAge (1995))

// function logInfoAbout(name, year) {
//   const age = calculateAge(year)

//   if (age > 0) {
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//   } else {
//     console.log('Еще не родился')
//   }
// }

// logInfoAbout('Дмитрий', '1986')
// logInfoAbout('Лера', '1995')
// logInfoAbout('Кто-то', '2025')


//9 Массивы -------------------------------------------------------------------------

// const cars = ['Mazda', 'Mercedes', 'Ford']
// console.log(cars)

// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = 'Porsche'

// console.log(cars[0])

// cars[3] = 'Mazda'


//10 Циклы -------------------------------------------------------------------------

// const cars = ['Mazda', 'Mercedes', 'Ford']

// // for (let i = 0; i < cars.length; i++) {
// //   const car = cars[i]
// //   console.log(car)
// // }

// for (let car of cars) {
//   console.log(car)
// }


//11 Объекты -------------------------------------------------------------------------

// const person = {
//   firstName: 'Dmitrii',
//   lastName: 'Ishchenko',
//   year: 1986,
//   languages: ['Ru', 'En'],
//   hasWife: false,
//   greet: function () {
//     console.log(greet)
//   }
// }

// console.log(person.firstName)

// console.log(person['lastName'])

// const key = 'year'
// console.log(person[key])

// person.hasWife = true
// console.log(person)