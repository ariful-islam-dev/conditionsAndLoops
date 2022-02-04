// 01 how to find 7 is even number or odd number?

const number = 7;

if (number % 2 === 0) {
  console.log(`${number} is even number`);
} else {
  console.log(`${number} is Odd number`);
}

//02 how to get max number
const heroAlom = 420;
const sakibKhan = 520;
const alekJander = 660;

if (heroAlom > sakibKhan && alekJander) {
  console.log(`Hero Alom is Rice`);
} else if (sakibKhan > alekJander && heroAlom) {
  console.log(`Sakib Khan is rice`);
} else {
  console.log(`Akeljander is rice`);
}

// 03 Whis is ssc best result?

const labib = 4.32;
const zarif = 3.63;

const result =
  labib > zarif ? "Labib's Result is Best" : "Zarif's Result is Best";
console.log(result);

//04 If you imagin that 25kva transformer have 100. Is tranform is overload? Every 5KVA X-RF Capacity is 15 people.

if ((25 / 5) * 15 >= 100) {
  console.log("Your X-FR is Under Load");
} else {
  console.log("Sorry your X-FR is Over Load");
}

//05 if Any bus carring capacity have 58 people. The bus carries 60 people. Is bus is over load

const people = 60;
const capacity = 58;

const bus =
  capacity >= people
    ? "The bus is stander Carring"
    : "Sorry the bus is over load";
console.log(bus);

// 06 What is today?

const date = new Date();

const today = date.getDay();

switch (today) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;

  case 2:
    console.log("Today is Tuesday");
    break;

  case 3:
    console.log("Today is Wednessday");
    break;

  case 4:
    console.log("Today is Thusday");
    break;

  case 5:
    console.log("Today is Friday");
    break;

  case 6:
    console.log("Today is Sutterday");
    break;

  default:
    console.log("Your day is not found");
    break;
}

// 07 Asif's Avg result is 4.73 What the gread asif?

const asif = 4.73;

if (asif <= 5.0 && asif > 4.0) {
  console.log("Asif get A+");
} else if (asif >= 4.0 && asif < 5.0) {
  console.log("Asif get A");
} else if (asif >= 3.5 && asif < 4.0) {
  console.log("Asif get A-");
} else if (asif >= 3.0 && asif < 3.5) {
  console.log("Asif get B");
} else if (asif >= 2.0 && asif < 3.0) {
  console.log("Asif get C");
} else if (asif < 1.0) {
  console.log("Asif get D");
} else {
  console.log("Sorry your number is Invalide");
}

// 08

const banana = 20;
const mony = 18;

if (banana < mony) {
  console.log("I want to buy this");
} else {
  console.log("I don't have sufficient banlance");
}

// 09

const oil = 30;
const load = 24;

const present = load >= oil ? "Perfect Capacity" : "Over the capacity";
console.log(present);

//10

const presntVolt = 90;
const tolarable = 25;

let recovResult = "";

recovResult = tolarable >= presntVolt ? " I will get recovery" : "I will die";

console.log(recovResult);

//11 Zarif age is 15? What is age lable?

const age = 10;

switch (age) {
  case 10:
    console.log("Infant");
    break;
  default:
    console.log("not any infant");
}

// 12

var num = 6;

const res = Math.floor(Math.random() * 6 + 1);

const ludo = res > 5 ? "You get six" : "You have not six";
console.log(ludo);

// 13

const person = {
  name: "Zarif",
  age: 2.5,
};

if (person && person.name) {
  console.log(`Your name is ${person.name}`);
} else {
  console.log("You are not exist here");
}

//14

const cow = {
  name: "Lali",
  eye: 1,
  leg: 4,
};

const kurbani =
  cow && cow.eye === 2
    ? "The cow is ready for kubani"
    : "The cow is not ready fo kurbani";
console.log(kurbani);

//15
const tempareture = 20;

if (tempareture <= 20) {
  console.log("The house is positive for living");
} else {
  console.log("Your house is not perfect for living");
}

// 16

const dateTime = new Date();
const time = dateTime.getHours();

if (time > 7 && time < 9) {
  console.log("Now you can brush up");
}

// 17

const rutting = new Date();

const ruttiongTime = rutting.getHours();

switch (ruttiongTime) {
  case 9:
    console.log("Your Office Start Now");
    break;

  case 14:
    console.log("This is your Lunch Time");
    break;

  case 17:
    console.log("Office time end");
    break;

  case 19:
    console.log("Start your skill development");
    break;

  case 00:
    console.log("End of the Day");
    break;

  case 02:
    console.log("Sleep Right now");
    break;

  default:
    console.log("Maintain Your won time");
    break;
}


//18

const job = 'jobHolder';

if(job === 'jobHolder'){
  console.log("Your are a Job Holder");
}else if(job === 'freelancer'){
  console.log("Your are flexible time worker as a freelancer");
}else{
  console.log(" You are searching a resonable job");
}

//19

const ssc = false;
const hsc = true;
const english = true;

if(ssc && hsc || english){
  console.log('Your are perfect in job');
}else{
  console.log('Learn english appropriatly');
}

// 20

let react = '';
let node = '';

node="Ariful Islam"

const developer  = node || react ? `${node || react} is a web developer` : "you want to learn the programming language";

console.log(developer);