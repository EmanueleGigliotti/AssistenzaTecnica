const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

// Configura il middleware body-parser per il parsing del corpo della richiesta
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'Assistenza Tecnica')));

// Rotta per la registrazione dell'utente
app.post('/registrazione', (req, res) => {
  const userData = req.body; // Dati inviati dal client durante la registrazione
  const userDataString = `Email: ${userData.email}\nPassword: ${userData.password}\nNome: ${userData.nome}\nCognome: ${userData.cognome}\nData di nascita: ${userData.nascita}\nSesso: ${userData.sesso}\nNumero di telefono: ${userData.numero}\n`;

  // Aggiungi i dati dell'utente al file login.txt
  fs.appendFile('login.txt', userDataString, (err) => {
    if (err) {
      console.error('Errore nell\'aggiunta dei dati al file:', err);
      res.status(500).send('Errore nella registrazione');
    } else {
      console.log('Dati dell\'utente aggiunti con successo.');
      res.status(200).send('Registrazione avvenuta con successo.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
