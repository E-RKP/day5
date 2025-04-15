//let drive = prompt('enter your age')
//if (drive >= 18) {
//  console.log(`Your age is ${drive}, you are old enough to drive`)
//}else {
//  console.log(`Your age is ${drive}, you need to wait ${18-Number(drive)} years to drive`)
//}

//let myAge = 27
//let yourAge = prompt('insert your age')
//if (myAge == yourAge){
//  console.log('We have the same age')
//}else if (myAge > yourAge){
//  console.log(`I am ${myAge-yourAge} years older than you`)
//}else if (myAge < yourAge){
//  console.log(`I am ${yourAge-myAge} younger than you`)
//}

//let a = 1
//let b = 1
// a > b ? console.log('a is greater than b') : console.log('a is greater than b')
//if (a >b) {
// console.log('a is greater than b')
//}else if (b > a){
//  console.log('a is greater than b')
//}else{
// console.log('i numeri sono uguali')
//}

//let pari = 20
//if (pari % 2 == 0){
//  console.log('il numero è pari')
//}else{
//  console.log('il numero è dispari')
//}

let grade = 50
if (grade >= 80 && grade <= 100){
 console.log('A')
}else if (grade >=70 && grade <= 79){
console.log('B')
}else if (grade >=60 && grade <= 69){
  console.log('C')
}else if (grade >=50 && grade <= 59){
  console.log('D')
}else{
  console.log('F')
}

let season = 'ciao'
switch (true){

  case (season==='January' || season ==='February' || season === 'December'):
  console.log('Winter');
  break;
  
  case (season==='March' || season === 'April' || season === 'May'):
    console.log('Spring')
    break;
  
  case (season==='June', season === 'July', season === 'August'):
    console.log('Summer')
    break;

  case (season==='September', season === 'October', season === 'November'):
  console.log('Autumn')
  break;

  default:
    console.log('Invalid month');
    break;
}


let day = 'monday'
if(day != 'Saturday' || day !='Monday'){
  console.log(`${day} is a working day`)
}else{
  console.log(`${day} is not a working day`)
}

let month = prompt('enter a month')
month2 = month.toLowerCase()
switch (month2){
  case 'january':
  console.log('31')
  break;
  case 'febraury':
  console.log('28')
  break;
  case 'febraury':
  console.log('28')
  break;
  case 'march':
  console.log('28')
  break;
  case 'april':
  console.log('28')
  break;
  case 'febraury':
  console.log('28')
  break;
  case 'febraury':
  console.log('28')
  break;
  case 'febraury':
  console.log('28')
  break;
  case 'febraury':
  console.log('28')
  break;
  case 'febraury':
  console.log('28')
  break;
  case 'febraury':
  console.log('28')
  break;
  case 'febraury':
  console.log('28')
  break;

  default:
    console.log('Mese non valido');
    break;
}
