
function kmVerifica() {
    var km = document.getElementById("km").value;

    //controllo km
    if (km <= 0 || km > 10000 || isNaN(km)) {
        return false;
    }
    return km;
}

function generateTicketPrice() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    if (!kmVerifica()) {
        return alert("inserire dei km da percorrere validi")
    } else {
        km = kmVerifica()
    }
    console.log(age, name, km);
    if (age == "19 - 64") {

    } else {
        //document.getElementById("offerta").innerHTML = "Sconto" + age;
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
    document.getElementById("price").innerHTML = price;
}

document.getElementById("generate").addEventListener("click", generateTicketPrice)




