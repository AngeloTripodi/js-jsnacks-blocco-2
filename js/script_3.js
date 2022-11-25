let arrayList = [1, 20, 3, 4, 50, 6, 7, 80, 9, 10, 11, 12, 13];

let somma = 0;
let avg = 0;
let max = arrayList[0];

for (let i=0; i<10; i++) {
   somma += arrayList[i];

   if (arrayList[i] > max){
    max = arrayList[i];
   } 
   }

avg = somma / 10;

console.log(somma);
console.log(avg);
console.log(max);