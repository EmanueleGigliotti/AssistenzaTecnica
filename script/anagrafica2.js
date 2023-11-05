//recupero txt e traduzione

var nomeInput = document.getElementById("nome");
var cognomeInput = document.getElementById("cognome");
var viaInput = document.getElementById("via");
var capInput = document.getElementById("cap");
var cittaInput = document.getElementById("citta");
var emailInput = document.getElementById("email");
var telefonoInput = document.getElementById("telefono");
var prodottoInput = document.getElementById("prodotto");
var numeroSerieInput = document.getElementById("numeroserie");
var problemaInput = document.getElementById("problema");
var datInput = document.getElementById("data");

var inviaDati = document.getElementById("inviaDati");

inviaDati.addEventListener('click', function() {
    var riepilogo =  nomeInput.value + " " + cognomeInput.value + ";" + "\n" + 
                    viaInput.value + ", " + capInput.value + ", " + cittaInput.value + ";" + "\n" +
                    emailInput.value + ", " + telefonoInput.value + ";" + "\n" +
                    prodottoInput.value + ";" + "\n" + 
                    numeroSerieInput.value + ";" + "\n" +
                    problemaInput.value + ";" + "\n" + 
                    datInput.value;
    const textToSave = riepilogo;
    const blob = new Blob([textToSave], {type: 'text'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = "riepilogo.txt";
    a.click();

});

const traduzione = {
    it: {
        t1: "DATI ANAGRAFICI",
        lnome: "Nome: ",
        lcognome: "Cognome: ",
        indirizzo:"Indirizzo: ",
        via:"Via e numero civico",
        cap: "CAP",
        citta: "CittÃ ",
        email: "Email: ",
        ltel: "Telefono: ",
        telefono: "Esempio: +39 3475188623",
        t2: "RIPARAZIONE DA EFFETTUARE",
        lprodotto: "Descrizione prodotto: ",
        prodotto: "Inserisci descrizione del prodotto con marca e modello",
        lnumeroserie: "Inseisci il numero di serie: ",
        lproblema:"Descrivi il problema: ",
        ldata: "Data richiesta: ",
        inviaDati: "Invia richiesta",
        creat: "creatori",
        contat: "Contatti",
        cel:"Cellulare: 333 333 3333"
    },
    en: {
        t1: "PERSONAL DATA",
        lnome: "Name: ",
        lcognome: "Surname: ",
        indirizzo:"Address: ",
        via:"Street address",
        cap: "Postal code",
        citta: "City",
        email: "Email: ",
        ltel: "Telephone:",
        telefono: "Example: +39 347518862",
        t2: "REPAIR TO BE CARRIED OUT",
        lprodotto: "Product description:",
        prodotto: "Write down product description with brand and model",
        lnumeroserie: "Write down the serial number:",
        lproblema:"Describe the problem:",
        ldata: "Requested date:",
        inviaDati: "Send request",
        creat: "creators",
        contat: "Contacts",
        cel:"Mobile: 333 333 3333"
    }
};

// Aggiungi un gestore di eventi per il cambio di lingua
document.getElementById("it-language").addEventListener("click", () => changeLanguage("it"));
document.getElementById("en-language").addEventListener("click", () => changeLanguage("en"));

// Funzione per cambiare la lingua
function changeLanguage(language) {
    document.getElementById("t1").textContent = traduzione[language].t1;
    document.getElementById("lnome").textContent = traduzione[language].lnome;
    document.getElementById("lcognome").textContent = traduzione[language].lcognome;
    document.getElementById("indirizzo").textContent = traduzione[language].indirizzo;
    document.getElementById("via").placeholder = traduzione[language].via;
    document.getElementById("cap").placeholder = traduzione[language].cap;
    document.getElementById("citta").placeholder = traduzione[language].citta;
    document.getElementById("email").textContent = traduzione[language].email;
    document.getElementById("ltel").textContent = traduzione[language].ltel;
    document.getElementById("telefono").placeholder = traduzione[language].telefono;
    document.getElementById("t2").textContent = traduzione[language].t2;
    document.getElementById("lprodotto").textContent = traduzione[language].lprodotto;
    document.getElementById("prodotto").placeholder = traduzione[language].prodotto;
    document.getElementById("lnumeroserie").textContent = traduzione[language].lnumeroserie;
    document.getElementById("lproblema").textContent = traduzione[language].lproblema;
    document.getElementById("ldata").textContent = traduzione[language].ldata;
    document.getElementById("inviaDati").textContent = traduzione[language].inviaDati;
    document.getElementById("creat").textContent = traduzione[language].creat;
    document.getElementById("contat").textContent = traduzione[language].contat;
    document.getElementById("cel").textContent = traduzione[language].cel;

}