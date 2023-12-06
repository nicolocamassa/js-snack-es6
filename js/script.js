/* SNACK 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal */

const bikes = [
    {
        nome: 'Trek',
        peso: 10,
    },
    {
        nome: 'Specialized',
        peso: 7,
    },
    {
        nome: 'Giant',
        peso: 9,
    },
    {
        nome: 'Cannondale',
        peso: 12,
    }
]

/* Peso minimo e nome della bici */
let minWeight = bikes[0]['peso'];
let bikeName = bikes[0]['nome'];;

/* Ciclo per la classe bikes  */
bikes.forEach((elem) => {

    /* Destructuring */
    let { nome, peso } = elem;

    /* Se il peso dell'oggetto è minore lo posizione nella variabile */
    if (peso < minWeight) {
        minWeight = peso;
        bikeName = nome;
    }
});

/* Stampa in console del risultato */
console.log(`Il peso minimo è: ${minWeight}Kg della ${bikeName}`);

let minWeightIndex = document.getElementById('minWeight');
minWeightIndex.innerText = `Il peso minimo è: ${minWeight}Kg della ${bikeName}`


/* SNACK 2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

const teams = [
    {
        squadra: 'Lecce',
        punti: 0,
        falli: 0
    },
    {
        squadra: 'Inter',
        punti: 0,
        falli: 0
    },
    {
        squadra: 'Juve',
        punti: 0,
        falli: 0
    },
    {
        squadra: 'Milan',
        punti: 0,
        falli: 0
    }
]

/* Inizializzazione del vettore */
let statics = []

/* Ciclo per la classe teams  */
teams.forEach((elem) => {
    /* Destructuring */
    let { squadra } = elem;

    /* Generazione valori casuali */
    punti = Math.floor(Math.random() * 5);
    falli = Math.floor(Math.random() * 5);

    /* Push usando il destructuring della squadra e dei falli */
    statics.push({ squadra, falli })
});

let teamsIndex = document.getElementById('teams');

/* Stampa in console delle statistiche */
console.log(statics)

statics.forEach((elem) => {
    let { squadra, falli } = elem;

    let newP = document.createElement('p');
    let newText = teamsIndex.appendChild(newP);
    newText.innerHTML = `La squadra ${squadra} ha subito ${falli} falli`
})


/* BONUS 1: SNACK 3
Abbiamo questa lista di articoli di moda:
```
name        type      color
Poppy       tshirt    red
Jumping     occhiali  blue
CrissCross  scarpe    black
Jenny       borsa     pink
```
Questi articoli sono inseriti in un array di oggetti.
Dobbiamo attaccare a ognuno un cartellino position con una lettera dell'alfabeto generata casualmente e inserire gli oggetti così modificati in un nuovo array di oggetti. */

/* Lista degli articoli */
let articleList = [
    {
        name: 'Poppy',
        type: 'tshirt',
        color: 'red'
    },
    {
        name: 'Jumping',
        type: 'occhiali',
        color: 'blue'
    },
    {
        name: 'CrissCross',
        type: 'scarpe',
        color: 'black'
    },
    {
        name: 'Jenny',
        type: 'borsa',
        color: 'pink'
    },
]


let clothesIndex = document.getElementById('clothes');

/* Ciclo per ogni elemento */
articleList.forEach((elem) => {

    /* Array delle lettere */
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    /* Generazione casuale di un numero equivalente all'alfabeto */
    let randomNum = Math.floor(Math.random() * (alphabet.length - 1)) + 1;

    /* Creazione della chiave lettera */
    elem.position = alphabet[randomNum];

    let { name, type, color, position } = elem;

    let newP = document.createElement('p');
    let newText = clothesIndex.appendChild(newP);

    let article = '';
    switch (type) {
        case 'tshirt':
            article = 'è una'
            break;
        case 'occhiali':
            article = 'sono degli'
            break;
        case 'scarpe':
            article = 'sono delle'
            break;
        case 'borsa':
            article = 'è una'
            break;

    }

    newText.innerHTML = `${name} ${article} ${type} di colore ${color} con etichetta ${position}`


})

/* Output in console */
console.log(articleList);


