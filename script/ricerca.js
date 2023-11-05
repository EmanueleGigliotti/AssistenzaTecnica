fileInput = document.getElementById("file-input2");
fileInput.addEventListener('change', function () {
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        var values = e.target.result;
        var valuesArray = values.split(";");
        var row = document.getElementById("row2");

        // Rimuovi le celle esistenti, se presenti
        while (row.firstChild) {
            row.removeChild(row.firstChild);
        }

        // Popola le celle una accanto all'altra
        for (var i = 0; i < valuesArray.length; i++) {
            var cell = document.createElement('td');
            cell.textContent = valuesArray[i];
            row.appendChild(cell);

        }
        
        
    };
    

    reader.readAsText(file);
    
});

const traduzione = {
    it: {
        th1: "Cliente",
        th2: "Indirizzo",
        th3: "Contatti",
        th4: "Prodotto",
        th5: "N° serie",
        th6: "Problema",
        th7: "Data",
        th8: "Stato",
        creat: "creatori",
        contat: "Contatti",
        cel:"Cellulare: 333 333 3333"
    },
    en: {
        th1: "Customer",
        th2: "Address",
        th3: "Contacts",
        th4: "Product",
        th5: "Series N°",
        th6: "Problem",
        th7: "Date",
        th8: "State",
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
    document.getElementById("th1").textContent = traduzione[language].th1;
    document.getElementById("th2").textContent = traduzione[language].th2;
    document.getElementById("th3").textContent = traduzione[language].th3;
    document.getElementById("th4").placeholder = traduzione[language].th4;
    document.getElementById("th5").placeholder = traduzione[language].th5;
    document.getElementById("th6").placeholder = traduzione[language].th6;
    document.getElementById("th7").textContent = traduzione[language].th7;
    document.getElementById("th8").textContent = traduzione[language].th8;
    document.getElementById("creat").textContent = traduzione[language].creat;
    document.getElementById("contat").textContent = traduzione[language].contat;
    document.getElementById("cel").textContent = traduzione[language].cel;

}