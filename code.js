function calcolaTotale() {

    let libriSel = document.querySelectorAll('input[type=checkbox]:checked');
    console.log(libriSel);

    let daPagare = document.getElementById("daPagare");

    if (libriSel.length == 0) {
        daPagare.innerText = "0.00 €";
        return;
    }

    let totConto = 0;
    for (let i = 0; i < libriSel.length; i++) {
        let ncTitle = libriSel[i].name + "NC"
        //alert(ncTitle);
        let infoLibro = document.getElementsByName(ncTitle);
        console.log(infoLibro);
        //alert(typeof(parseInt(infoLibro[0].value)));
        //alert(parseInt(infoLibro[0].value));

            totConto = totConto + (parseFloat(libriSel[i].value) * parseInt(infoLibro[0].value));
    }
    daPagare.innerText = totConto + " €";
}

function ConfermaMi() {
    let nome = document.getElementById("nome");
    let cognome = document.getElementById("cognome");
    let email = document.getElementById("email");
    let freq = document.getElementById("frequenzaNews");

    let message = 'Benvenuto/a ' + nome.value + " " + cognome.value + '!\n\n' +
        "Da oggi in poi, riceverai con cadenza " + freq.value + " le nostre novità riguardo a nuovi arrivi," +
        "promozioni e tanto altro all'indirizzo mail " + email.value + "! \n\n Confermi la tua iscrizione alla nostra " + 
        "newsletter?";
     
    confirm(message);
}

function SelezionaVisibilita(sectionID) {
    var infoPreliminare = document.getElementById("InfoPreliminari");
    var AboutUS = document.getElementById("AboutUs");
    var sped = document.getElementById("Sped");
    var resi = document.getElementById("Resi");
    var faq = document.getElementById("FAQ");
    var currItem = document.getElementById(sectionID);

    infoPreliminare.style.display = "none";
    AboutUS.style.display = "none";
    sped.style.display = "none";
    resi.style.display = "none";
    faq.style.display = "none";

    currItem.style.display = "block";
}
