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
