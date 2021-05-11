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
lessWeightBike.innerHTML = "La bici dal nome " + lightBike.name + " pesa " + lightBike.weight + " ed è la più leggera.";
//=====================/SNACK 1==============================




//======================SNACK 2==============================
//-----------------------FUNZIONI----------------------------
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//-----------------------/FUNZIONI---------------------------

//-----------------------ARRAY-------------------------------
var footballTeams = [
    {
       name: "Inter",
       points: 0,
       fouls: 0
    },
    {
       name: "Milan",
       points: 0,
       fouls: 0
    },
    {
       name: "Juventus",
       points: 0,
       fouls: 0
    },
    {
       name: "Lazio",
       points: 0,
       fouls: 0
    },
    {
       name: "Roma",
       points: 0,
       fouls: 0
    },
    {
       name: "Napoli",
       points: 0,
       fouls: 0
    },
];
var statisticsFootballTeams = [];
//----------------------/ARRAY-------------------------------

//----------------------VARIABILI----------------------------
var footballTeamsList = document.getElementById("football-teams-list");
//---------------------/VARIABILI----------------------------

for (i = 0; i < footballTeams.length; i++) {

    // Genera numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti
    footballTeams[i].points = randomNumber(0, 100);
    footballTeams[i].fouls = randomNumber(0, 100);

    // Genera un nuovo array i cui elementi contengono solo nomi e falli subiti
    var statistics = {};
    statistics.name = footballTeams[i].name;
    statistics.fouls = footballTeams[i].fouls;
    statisticsFootballTeams.push(statistics)

    // Stampa il nuovo array i cui elementi contengono solo nomi e falli subiti
    footballTeamsList.innerHTML += "<li>Squadra = <span id=\"value\">" + statisticsFootballTeams[i].name + "</span><br>Falli commessi = <span id=\"value\">" + statisticsFootballTeams[i].fouls + "</span></li>";
}
//=====================/SNACK 2==============================




//======================SNACK 3==============================
//-----------------------FUNZIONI----------------------------
function valuesIncludedInTheArrayRange(arr, a, b) {
    var newArr = [];
    
    for (i = (a - 1); i <= (b - 1); i++) {
        newArr.push(arr[i]);
    }

    return newArr;
}
//----------------------/FUNZIONI----------------------------

//-----------------------ARRAY-------------------------------
var array = [
    "Alessio",
    "Simone",
    "Francesco",
    "Jacopo",
    "Alberto",
    "Federica",
    "Giulia",
    "Silvia",
    "Elisa",
    "Chiara"
]
var newArray = [];
//----------------------/ARRAY-------------------------------

//----------------------VARIABILI----------------------------
var click = false;
var min;
var max;
var messageMin = "Inserisci il numero corrispondente al primo elemento da comprendere nel nuovo Array";
var messageMax = "Inserisci il numero corrispondente all'ultimo elemento da comprendere nel nuovo Array";
var arrayList = document.getElementById("array-list");
var newArrayList = document.getElementById("new-array-list");
var calculator = document.getElementById("calculator");
var reset = document.getElementById("reset");
//---------------------/VARIABILI----------------------------

// Stampa la lista presente nell'array di partenza
for (var j = 0; j < array.length; j++) {
    arrayList.innerHTML += "<li>" + array[j] + "</li>";
}

// Pulsante calcolatore
calculator.addEventListener("click", function(){

    // Se il pulsante calcolatore è inattivo
    if (!click) {

        // Chiedi all'utente i due estremi che serviranno per il nuovo array
        do {
            min = parseInt(prompt(messageMin));
            if (isNaN(min) || min.length == 0) {
                messageMin = "Errore! Inserisci il numero corrispondente al primo elemento da comprendere nel nuovo Array"
            }
        } while (isNaN(min) || min.length == 0)
        do {
            max = parseInt(prompt(messageMax));
            if (isNaN(max) || max.length == 0) {
                messageMax = "Errore! Inserisci il numero corrispondente all'ultimo elemento da comprendere nel nuovo Array"
            }
        } while (isNaN(max) || min.length == 0)

        // Genera il nuovo array utilizzando la funzione creata
        newArray = valuesIncludedInTheArrayRange(array, min, max)

        // Stampa su HTML il nuovo array
        for (var k = 0; k < newArray.length; k++) {
            newArrayList.innerHTML += "<li>" + newArray[k] + "</li>";
        }

        // Attiva il pulsante calcolatore
        click = true;

    }

});

// Pulsante reset
reset.addEventListener("click", function(){

    // Se il pulsante calcolatore è attivo
    if (click) {

        // Svuota il nuovo array
        newArray = [];

        // Svuota la nuova lista su HTML
        newArrayList.innerHTML = "";

        // Disattiva il pulsante calcolatore
        click = false;

    }

});
//=====================/SNACK 3==============================

