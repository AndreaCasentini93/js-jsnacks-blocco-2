/*
Snack 2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

//======================SNACK 1==============================

//-----------------------ARRAY-------------------------------
var bicycles = [
    {
        name: "Cargo",
        weight: 6.8
    },
    {
        name: "Tandem",
        weight: 5.9
    },
    {
        name: "BMX",
        weight: 6.9
    },
    {
        name: "Downhill",
        weight: 6.3
    },
    {
        name: "Gravel",
        weight: 6.5
    },
    {
        name: "Fat",
        weight: 7.1
    }
]; 
//----------------------/ARRAY-------------------------------

//----------------------VARIABILI----------------------------
var lightBike;
var lightBikeWeight = bicycles[0].weight;
var lessWeightBike = document.getElementById("less-weight-bike");
//---------------------/VARIABILI----------------------------

// Scorri tutti gli oggetti presenti nell'array "bicycles" e seleziona la bicicletta con il peso minore
for (var i = 0; i < bicycles.length; i++) {

    if (bicycles[i].weight <= lightBikeWeight) {
        lightBikeWeight = bicycles[i].weight;
        lightBike = bicycles[i];
    }

}

// Stampa su HTML la bicicletta con il peso minore
lessWeightBike.innerHTML = "La bici dal nome " + lightBike.name + " pesa " + lightBike.weight + " ed è la più leggera."

//=====================/SNACK 1==============================



//======================SNACK 2==============================

//----------------------VARIABILI----------------------------

//---------------------/VARIABILI----------------------------

//-----------------------ARRAY-------------------------------

//----------------------/ARRAY-------------------------------



//=====================/SNACK 2==============================



//======================SNACK 3==============================

//----------------------VARIABILI----------------------------

//---------------------/VARIABILI----------------------------

//-----------------------ARRAY-------------------------------

//----------------------/ARRAY-------------------------------



//=====================/SNACK 3==============================

