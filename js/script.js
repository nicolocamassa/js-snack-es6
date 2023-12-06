/* SNACK 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal */

const bikes = [
    {
        nome: 'Trek',
        peso:   10,
    },
    {
        nome: 'Specialized',
        peso:   7,
    },
    {
        nome: 'Giant',
        peso:   9,
    },
    {
        nome: 'Cannondale',
        peso:   12,
    }
]

/* Peso minimo e nome della bici */
let minWeight = bikes[0]['peso'];
let bikeName;

/* Ciclo per la classe bikes  */
bikes.forEach((elem) => {

    /* Destructuring */
    let {nome, peso} = elem;

    /* Se il peso dell'oggetto è minore lo posizione nella variabile */
    if(peso < minWeight){
        minWeight = peso;
        bikeName = nome;
    }
});

/* Stampa in console del risultato */
console.log(`Il peso minimo è: ${minWeight} della ${bikeName}`);


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
    punti = Math.floor(Math.random() * 5 );
    falli = Math.floor(Math.random() * 5 );

    /* Push usando il destructuring della squadra e dei falli */
    statics.push({squadra, falli})
});

/* Stampa in console delle statistiche */
console.log(statics)


