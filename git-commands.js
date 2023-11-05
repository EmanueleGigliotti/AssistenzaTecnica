const { exec } = require('child_process');

// Specifica l'URL del repository Git da clonare
const gitRepoURL = 'https://github.com/tuo-nome/tuo-repohttps://github.com/EmanueleGigliotti/AssistenzaTecnica.gitsitory.git';

exec(`git clone ${gitRepoURL}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Errore durante il clone del repository: ${error}`);
    return;
  }

  console.log(`Repository clonato con successo: ${stdout}`);
});

