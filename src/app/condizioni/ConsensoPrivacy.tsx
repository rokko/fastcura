import React from "react";
import Header from "../components/HomepageComponent/Header";
import Footer from "../components/General/Footer";

const ConsensoPrivacy = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: "120px" }} />
      <h1>Consenso Privacy</h1>
      <p style={{ padding: "1rem", textAlign: "left" }}>
        <br />
        Messaggio Accettazione Cookie
        <br />
        Questo sito utilizza cookie tecnici ed altri strumenti tecnici necessari
        per il suo funzionamento. <br />
        Inoltre, laddove rilasciassi il tuo consenso cliccando su "Accetta
        tutto" o nella sezione raggiungibile cliccando su "Impostazioni
        cookies", potrà installare anche cookie di profilazione o altri
        strumenti di tracciamento al fine di mostrare messaggi pubblicitari e/o
        personalizzare i propri servizi, in linea con le preferenze espresse
        dall'utente nell'ambito del suo utilizzo di funzionalità e navigazione
        web e/o al fine di analizzare e monitorare il comportamento dei
        visitatori del sito. Cliccando su "Rifiuta tutto" le impostazioni
        predefinite vengono lasciate invariate e quindi la navigazione può
        continuare senza cookie o altri strumenti di tracciamento diversi da
        quello tecnico. <br /> Per maggiori informazioni visualizza la cookie
        policy.
        <br /> Messaggio Accettazione Privacy e Termini
        <br /> L’utente, iscrivendosi o visionando il nostro sito web, dichiara
        di aver letto, compreso ed accettato i termini legali inseriti nel
        documento di Termini e Condizioni e nella nostra Privacy Policy redatta
        in accordo con il regolamento EU 2016/679, alias GDPR.
      </p>
      <Footer />
    </>
  );
};

export default ConsensoPrivacy;
