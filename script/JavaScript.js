// Definisci un oggetto con le traduzioni
const traduzione = {
    it: {
        chiSiamoItaliano: "Chi siamo",
        contenuto: "Siamo il tuo partner affidabile nella gestione di un Centro di Assistenza Tecnica specializzato nell'ambito tech. Con anni di esperienza nel settore, ci dedichiamo a fornire soluzioni tecniche di alta qualità per risolvere le tue esigenze informatiche e tecnologiche. Il nostro team esperto di tecnici altamente qualificati è appassionato di tecnologia e si impegna a garantire un servizio di assistenza tempestivo, professionale e personalizzato. Siamo qui per semplificare il mondo complesso della tecnologia, offrendo supporto tecnico, riparazioni e consulenza per garantire che tu possa sfruttare al massimo il potenziale del tuo equipaggiamento e dei tuoi dispositivi. La tua soddisfazione è la nostra priorità, e ci impegniamo a offrire soluzioni su misura per le tue esigenze specifiche. Con noi, puoi contare su un partner di fiducia per mantenere e migliorare le tue esperienze tecnologiche.",
        serviziItaliano:"I nostri servizi",
        contenutoServizi:"Riparazioni Hardware e Software: Offriamo servizi di riparazione per hardware e software per una vasta gamma di dispositivi, tra cui computer, laptop, smartphone, tablet e altri dispositivi elettronici.Assistenza Remota: Forniamo assistenza tecnica remota per risolvere problemi software, configurazioni e aggiornamenti a distanza, risparmiando tempo e denaro ai nostri clienti. Installazione e Configurazione: Assistiamo i clienti nell'installazione e nella configurazione di nuovi software, sistemi operativi, reti wireless, stampanti e altri dispositivi. Contratti di Manutenzione: Forniamo contratti di manutenzione periodica per garantire che i dispositivi aziendali rimangano sempre in ottime condizioni di funzionamento.Supporto Tecnico Telefonico 24/7: Mettiamo a disposizione un servizio di supporto telefonico 24 ore su 24, 7 giorni su 7, per affrontare le emergenze tecnologiche in qualsiasi momento.",
    },
    en: {
        chiSiamoItaliano: "Who we are",
        contenuto: "We are your reliable partner in managing a Technical Assistance Center specialized in the tech sector. With years of experience in the sector, we are dedicated to providing high-quality technical solutions to solve your IT and technological needs. Our team expert of highly trained technicians are passionate about technology and are committed to timely, professional and personal service. We are here to simplify the complex world of technology, offering technical support, repairs and advice to ensure you get the most out of potential of your equipment and devices. Your satisfaction is our priority, and we are committed to offering solutions tailored to your specific needs. With us, you can count on a trusted partner to maintain and improve your technology experiences. ",
        serviziItaliano:"Our services",
        contenutoServizi:"Hardware and Software Repairs: We offer hardware and software repair services for a wide range of devices, including computers, laptops, smartphones, tablets and other electronic devices. Remote Assistance: We provide remote technical assistance to resolve software problems, configurations and remote upgrades, saving our customers time and money.Installation and Configuration: We assist customers in installing and configuring new software, operating systems, wireless networks, printers and other devices.Maintenance Contracts: We provide periodic maintenance contracts to ensure that company devices always remain in excellent working order. 24/7 Telephone Technical Support: We provide a 24/7 telephone support service to address technology emergencies at any time.",
    }
};

// Aggiungi un gestore di eventi per il cambio di lingua
document.getElementById("it-language").addEventListener("click", () => changeLanguage("it"));
document.getElementById("en-language").addEventListener("click", () => changeLanguage("en"));

// Funzione per cambiare la lingua
function changeLanguage(language) {
    document.getElementById("chiSiamoItaliano").textContent = traduzione[language].chiSiamoItaliano;
    document.getElementById("contenuto").innerHTML = traduzione[language].contenuto;
    document.getElementById("serviziItaliano").textContent = traduzione[language].serviziItaliano;
    document.getElementById("contenutoServizi").innerHTML = traduzione[language].contenutoServizi;
}


