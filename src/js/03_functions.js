
// function declaration -------------------------------------------------------------

// function greet(name) {
//   console.log('Привет -', name)
// }


// function expression -------------------------------------------------------------

// const greet2 = function greet2(name) {
//   console.log('Привет 2 -', name)
// }

// greet('Лера')
// greet2('Лера')


// console.log(typeof greet)
// console.dir(greet)


// анонимные фукнции -------------------------------------------------------------

// let counter = 0

// const duration = setInterval (function() {
//   if (counter === 5) {
//     clearInterval (duration)
//   } else {
//     console.log(++counter)
//   }
// }, 1000)


// стрелочные функции -------------------------------------------------------------

// function greet(name) {
//   console.log('Привет -', name)
// }

// const arrow = (name) => {
//   console.log('Привет -', name)
// }

// const arrow2 = name => console.log('Привет -', name)

// arrow('Лера')

// arrow2('Лера')



// const pow2 = num => num ** 2
// console.log(pow2(5))


// парамерты по умолчанию -------------------------------------------------------------

// const sum = (a = 40, b = a * 2) => a + b

// console.log(sum())
// console.log(sum(41))
// console.log(sum(41, 5))



// замыкания  -------------------------------------------------------------

function createMember(name) {
  return function(lastName) {
    console.log(name + lastName)
  }
}

const logWithLastName = createMember('Dmitriy')
console.log(logWithLastName('Ishchenko'))