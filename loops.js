// 01 transformar fuse ratting

const transformar = [5, 10, 15, 25, 37.5, 50, 75, 100, 167];
let fuse = {};

for (let i = 0; i < transformar.length; i++) {
  const element = transformar[i];

  fuse[`${element}:KVA`] = Number(((transformar[i] / 6.35) * 1.25).toFixed(2));
}

console.log(fuse);

// 02 tranformar HT Current

let htCurrent = {};

for (let i = 0; i < transformar.length; i++) {
  const element = transformar[i];

  htCurrent[`${element}:KVA`] = Number.parseFloat(
    (transformar[i] / 6.35).toFixed(2)
  );
}
console.log(htCurrent);

//03 transformar LT Current

let ltCurrent = {};

for (let i = 0; i < transformar.length; i++) {
  const element = transformar[i];

  ltCurrent[element] =
    Number.parseFloat((transformar[i] / 0.24).toFixed(2)) + "Amp";
}
console.log(ltCurrent);

//04 multifying fector with 5 unite (11KV)

const currentTransformer = [15, 30, 50, 100, 150, 200];

let unitCount = {};

for (let i = 0; i < currentTransformer.length; i++) {
  const element = currentTransformer[i];

  unitCount[`${element}:5`] =
    Number(((currentTransformer[i] / 5) * (6.35 / 0.24) * 5).toFixed(2)) +
    " Unit";
}

console.log(unitCount);
//05 multifying fector with 5 unite (33KV)

const currentTransformer33 = [15, 30, 50, 100, 150, 200];

let unitCount33 = {};

for (let i = 0; i < currentTransformer33.length; i++) {
  const element = currentTransformer33[i];

  unitCount33[`${element}:5`] =
    Number(((currentTransformer33[i] / 5) * (19.05 / 0.24) * 5).toFixed(2)) +
    " Unit";
}

console.log(unitCount33);

// 06 all Even Number

let evenNumber = [];

for (let i = 1; i < 100; i++) {
  if (i % 2 === 0) {
    evenNumber.push(i);
  }
}

console.log(evenNumber);
// 07 all Even Number

let oddNumber = [];

for (let i = 1; i < 100; i++) {
  if (i % 2 === 1) {
    oddNumber.push(i);
  }
}

console.log(oddNumber);

// 08 total number Summetion (1 to 100)

let total = 0;

for (let i = 1; i < 100; i++) {
  total += i;
}
console.log(total);

// 09  all Odd number Summetion (1 to 100)

let totalOddNumber = 0;

for (let i = 1; i < 100; i++) {
  if (i % 2 === 1) {
    totalOddNumber += i;
  }
}
console.log(totalOddNumber);

//10 all even number summetion

let totalEvenNumber = 0;

for (let i = 1; i < 100; i++) {
  if (i % 2 === 0) {
    totalEvenNumber += i;
  }
}

console.log(totalEvenNumber);

// 11 array reverse

const numArrRevers = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numArrRevers.length / 2; i++) {
  const element = numArrRevers[i];

  numArrRevers[i] = numArrRevers[numArrRevers.length - 1 - i];
  numArrRevers[numArrRevers.length - 1 - i] = element;
}

console.log(numArrRevers);

// 12 string reverse

const bangladesh = " Bangladesh is my country. I love my country";
let reverBangla = "";

for (let i = bangladesh.length - 1; i >= 0; i--) {
  const element = bangladesh[i];

  reverBangla += element;
}

console.log(reverBangla);

// 13

const n = 5;

for (let i = 1; i <= n; i++) {
  let result = "";

  for (let j = 1; j <= i; j++) {
    result += j + " ";
  }
  console.log(result);
}

// 14

const m = 5;

for (let i = 1; i <= m; i++) {
  let respons = "";

  for (let j = 1; j <= m; j++) {
    respons += "* ";
  }

  console.log(respons);
}
// 15 ludo playing
let playNow = true;

while (playNow) {
  let randNumber = Math.floor(Math.random() * 6 + 1);
  switch (randNumber) {
    case 1:
      console.log("You get " + 1);
      playNow = false;
      break;

    case 2:
      console.log("You get " + 2);
      playNow = false;
      break;
    case 3:
      console.log("You get " + 3);
      playNow = false;
      break;
    case 4:
      console.log("You get " + 4);
      playNow = false;
      break;
    case 5:
      console.log("You get " + 5);
      playNow = false;
      break;
    case 6:
      console.log("You get " + 6);
      playNow = false;
      break;
    default:
      console.log("Sorry the number is not valid");
  }
}

//16 Find Maximum Number

const findNumber = [7, 9, 3, 7, 22, 84, 6, 9, 5, 97];
let max = 0;

for (let i = 0; i < findNumber.length; i++) {
  if (max < findNumber[i]) {
    max = findNumber[i];
  }
}

console.log(max);

// 17 Find Minimum Number

let min = findNumber[0];

for (let i = 0; i < findNumber.length; i++) {
  const element = findNumber[i];

  if (min > element) {
    min = element;
  }
}

console.log(min);

// 18 remove duplicate number

const findUniq = [3, 8, 9, 8, 9, 7, 2, 3, 5, 9, 7, 2];

let unique = [];

for (let i = 0; i < findUniq.length - 1; i++) {
  const element = findUniq[i];
  const index = unique.indexOf(element);

  if (index === -1) {
    unique.push(element);
  }
}

console.log(unique);

// 19 word Count

const speech = "Banagladesh is my homeland. I love bangladesh";

let count = 0;

for (let i = 0; i < speech.length; i++) {
  let charecter = speech[i];

  if (charecter === " " && speech[i - 1] !== " ") {
    count++;
  }
}
count++;

console.log(count);

// 20 duplicate number

const duplicate = [3, 8, 9, 8, 7, 2,  5, 9, 7, 2];

const duplicateNumber = [];

for (let i = 0; i < duplicate.length; i++) {
  const element = duplicate[i];
  const index = duplicate.indexOf(element);


  if ( i !== index) {
    duplicateNumber.push(element);
  }
}

console.log(duplicateNumber);
