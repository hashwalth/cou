//const age = prompt('Quel age avez-you')

// if(age <= 13){
 //    console.log('tom et jerry')
// }

// else if(age <= 16){
//     console.log('matrix')
// }

//else {
 //   console.log('devil man')
// }

// **************************************************************

// EXERCICE 2

// *************************************************************

// const year = 2023
// const birthyear = prompt('Quel est votre annee de naissance')

// age = year - birthyear

// if(age <= 13){
//   console.log('tom et jerry')
// }

// else if(age <= 16){
 //   console.log('matrix')
// }

// else {
 //    console.log('devil man')
// }


// ************************************************************

// EXERCICES 3

// *************************************************************
// const a = prompt('entrez A')
// const b = prompt('entrez B')

// const e = a * b
// let signe 
// if(e>0){
    // console.log(`${a} x ${b} = ${e} est positive`)
    // signe = 'positif'
// }
// else{
    // console.log(`${a} x ${b} = ${e} est negative`)
    // signe= 'negatif'
// }

// console.log(`${a} x ${b} = ${e} est ${signe}`)


// *******************************************************

// LOOPS OU BOUCLE
                                               
// *******************************************************

// let i = 0;
// while (i < 10){
//  console.log('bonjour' + i)
//    i = i+1 
//}

// ******************************************
// FOR                                   ****
// ******************************************

// for (let i = 0; i < 10; i++){
//     console.log('Bonjour')
// }
// ******************************************************
/*
 const notes = [12, 13, 19, 9, 7]

for (let i = 0; i < notes.length ; i++){
    // console.log(i)
    console.log(notes[i])
 }

 for (let i in notes){
    console.log(notes[i])
}

*/

// ***************************************************
/*

const notes = {
    a: 1,
    b:5,
    c:2
}

for (let i in notes){
    // console.log(i)
    console.log(notes[i])
}
*/

//*****************************************************
/*
const notes = [12, 13, 19, 9, 7]

const person = {
    firstName :'isaac',
    lastName: 'yav'
}

for (let note of notes){
    // console.log(i)
    console.log(note)
}

*/

// **********************************************************************
/*
const greeting = 'Bonjour'
for (let letter of greeting){
    console.log(letter)
}

for (let letter in greeting){
    console.log(letter)
}
*/

// *********************************************************************
// EXERCICES

// *********************************************************************

// 1

/*
let number = prompt('entrez un nombre entre 0 et 10 ')

if(number > 10|| number < 0  ){
    console.log("faux")
}
else {
    
    while(number >= 0){
        console.log(number)
        number--
    }
    

    for(let i = number; i >= 0; i--){
        console.log(i)
    }
}
 */

// *************************************************************************
// RANDOM

//**************************************************************************
/*
let guess = 8
let number

 while (number !== guess ){
    number = prompt('entrez votre nombre')*1
    if(number < guess){
        console.log('plus')
    }
    else if (number > guess){
        console.log('moins')
    }
 }
 console.log('correct')

*/

/*
let guess = 8
let number

 while (true){
    number = prompt('entrez votre nombre')*1
    if(number < guess){
        console.log('plus')
    }
    else if (number > guess){
        console.log('moins')

    }
    else{
        break
    }
 }
 console.log('correct')
*/

//*************************************************************************
// FUNCTION 

//*************************************************************************

/* 
function carDrive (age, pays) {
    if(
        (age > 18 && pays === 'FR') ||
        (age > 16 && pays === 'US')
    ){
        return true
    }
    return false
}
console.log(carDrive(13, 'FR'))
*/
//************************************************************************* */
/*
const carDrive = function  (age, pays) {
    if(
        (age > 18 && pays === 'FR') ||
        (age > 16 && pays === 'US')
    ){
        return true
    }
    return false
}
console.log(carDrive(13, 'FR'))
*/
//********************************************************************** */
/*
function greeting(name){
    console.log(`Bonjour ${name}`)
}
greeting('isaac')
greeting('yav')

*/
// ************************************************************************

/*

let notes = [12, 13, 14];

function upNotes(name) {
    notes[0]++
}
upNotes(notes)
console.log(notes)

*/
// ****************************************************************************

//  THIS 

// ****************************************************************************
/*
const a = {
    firstName: 'isaac',
    lastName: 'yav',
    fullname: function () {
        // console.log(this)
        console.log(`${this.firstName} ${this.lastName}`)
    }
}
a.fullname()

*/
// *******************************************************************************
  /*  // on cree un nombre entre 0 & 10


    function getRandomInt(max) {
        return Math.floor(Math.random() * (max + 1))
    }
    const solution = getRandomInt(10)
    console.log(solution)


    
    // isRight(n)

    function isRight(n) {
        return solution === n
    }

    //guess()


    function guess(){
        const number = prompt('entrez un nombre ')
        return isRight(Number)
    }

    // 3 essaies pour deviner le mot

    for (let i = 0; i < 3 ; i++) {
        if (guess()) {
            console.log('Bravo')
            break;
        } else if (i === 2) {
            console.log('vous avez perdu')
        }
        
    }

*/

/*
function isPremier(n){
   if (n < 2) {
    return false
   }
    for (i = n - 1; i > 1; i-- ){
        if(n% i == 0) return false;
    }
    return true;
}

console.log('0',isPremier(0))
console.log('1',isPremier(1))
console.log('2',isPremier(2))
console.log('3',isPremier(3))
console.log('11',isPremier(11))
console.log('13',isPremier(13))
console.log('5',isPremier(5))
console.log('9',isPremier(9))

*/