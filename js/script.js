let arrayList = [];

for (let i=0; i<6; i++) {
    let addNumber = parseInt(prompt ('Inserisci un numero'));
    if (addNumber % 2 == 1) {
        arrayList.push(addNumber);
    } 
    console.log(arrayList);
}