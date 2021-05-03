
function kmVerifica() {
    var km = document.getElementById("km").value;

    //controllo km
    if (km <= 0 || km > 10000 || isNaN(km)) {
        return false;
    }
    return km;
}

function randomNum() {
    return Math.floor(Math.random() * 9)
}

function randomCod(n) {
    var array = []
    for (var i = 0; i < n; i++) {
        array[i] = randomNum();
    }
    return array.join("");
}

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
    console.log(age, name, km);
    if (age == "intero") {
        document.getElementById("offerta").innerHTML = "nessuno";
    } else {
        document.getElementById("offerta").innerHTML = age;
    }
    var price = km * 0.21;

    if (age == "ridotto") {
        price *= 0.8;
    }
    else if (age == "over") {
        price *= 0.6;
    }
    //stampa prezzo
    console.log(price);
    document.getElementById("pass_name").innerHTML = name;
    document.getElementById("carrozza").innerHTML = carrozza;
    document.getElementById("code_cp").innerHTML = codCp;
    document.getElementById("price").innerHTML = price.toFixed(2) + " €";

}

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




