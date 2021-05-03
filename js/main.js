/**
 * ritorna falso se i km inseriti non sono validi mentre ritorna i km inseriti nel caso rispettino i parametri
 * @returns {boolean}
 */
function kmVerifica() {
    var km = document.getElementById("km").value;

    //controllo km
    if (km <= 0 || km > 10000 || isNaN(km)) {
        return false;
    }
    return km;
}

/**
 * crea un numero casuale tra 0 e 9
 * @returns {number}
 */
function randomNum() {
    return Math.floor(Math.random() * 9)
}

/**
 * inserendo un numero n crea un numero casuale di n cifre
 * @param {number} n 
 * @returns {string}
 */
function randomCod(n) {
    var array = []
    for (var i = 0; i < n; i++) {
        array[i] = randomNum();
    }
    return array.join("");
}

/**
 * ritorna il prezzo del biglietto, la carrozza, il codice cp di 5 cifre e il tipo di sconto da applicare
 * @returns 
 */
function generateTicketPrice() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var carrozza = randomNum() + 1;
    var codCp = randomCod(5);

    if (!kmVerifica()) {
        return alert("inserire dei km da percorrere validi")
    } else {
        km = kmVerifica()
    }

    //calcolo prezzo
    var price = km * 0.21;

    //calcolo del prezzo scontato dove applivabile
    if (age == "ridotto") {
        price *= 0.8;
        document.getElementById("offerta").innerHTML = age;
    }
    else if (age == "over") {
        price *= 0.6;
        document.getElementById("offerta").innerHTML = age;
    }

    //stampa valori
    console.log(price);
    document.getElementById("pass_name").innerHTML = name;
    document.getElementById("carrozza").innerHTML = carrozza;
    document.getElementById("code_cp").innerHTML = codCp;
    document.getElementById("price").innerHTML = price.toFixed(2) + " €";

}


/**
 * annulla tutti gli inserimenti fatti e i risultati
 */
function annulla() {
    document.getElementById("km").value = ""
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("offerta").innerHTML = "";
    document.getElementById("pass_name").innerHTML = "";
    document.getElementById("carrozza").innerHTML = "";
    document.getElementById("code_cp").innerHTML = ""
    document.getElementById("price").innerHTML = ""
}

document.getElementById("generate").addEventListener("click", generateTicketPrice)
document.getElementById("annulla").addEventListener("click", annulla)




