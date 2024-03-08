let numbContainer = document.querySelector('#container');
// Generare i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Se il numero è multiplo di 3 e 5 --> stampo fizzbuzz
    if ((i % 3 === 0) && (i % 5 === 0)) {
        const newDiv = `<div class='fizzbuzz'>fizzbuzz</div>`;
        numbContainer.innerHTML += newDiv;
        console.log('fizzbuzz');
    // Se il numero è multiplo di 3 --> stampo fizz
    } else if (i % 3 === 0){
        newDiv = `<div class='fizz'>fizz</div>`;
        numbContainer.innerHTML += newDiv;
        console.log('fizz');
    // Se il numero è multiplo di 5 --> stampo buzz
    } else if (i % 5 === 0){
        newDiv = `<div class='buzz'>buzz</div>`;
        numbContainer.innerHTML += newDiv;
        console.log('buzz');
    // Se il numero non è multiplo di 3 o 5 --> stampo il numero
    } else {
        newDiv = `<div>${i}</div>`;
        numbContainer.innerHTML += newDiv;
        console.log(i);
    }
}

