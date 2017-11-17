var ib_how_to_data = function(){/*
<ib-div class="ib_modal_container">
  <ib-div class="ib_p">
    Se sei one-man performer e tutto quello che fai per il tuo business lo fai da solo – benvenuto nel club! Conosci bene la noia di scrivere fatture. Word? Excel? Software di contabilità complicato? Dimentica tutto quello e saluta la tua nuova gioia!
  </ib-div>

  <ib-div class="ib_h3">Che cosa poso fare con questo modello?</ib-div>
  <ib-div class="ib_p">
    <ib-div class="ib_ul">
      <ib-div class="ib_li">
        &#9679; &nbsp; Scrivi fatture professionali in pochi secondi.
        <ib-div class="ib_ul">
          <ib-div class="ib_li">
            &#9675; &nbsp; Usa qualsiasi lingua o valuta.
          </ib-div>
          <ib-div class="ib_li">
            &#9675; &nbsp; Aggiungi il tuo proprio logo con un semplice trascinare e rilasciare.
          </ib-div>
          <ib-div class="ib_li">
            &#9675; &nbsp; Aggiungi, rimuovi e riordini facilmente le righe delle voci.
          </ib-div>
          <ib-div class="ib_li">
            &#9675; &nbsp; Aggiungi tasse e sconti.
          </ib-div>
          <ib-div class="ib_li">
            &#9675; &nbsp; Configura la visibilità della voce nella colonna.
          </ib-div>
          <ib-div class="ib_li">
            &#9675; &nbsp; Autocalcola subtotali, totali, tasse e sconti.
          </ib-div>
          <ib-div class="ib_li">
            &#9675; &nbsp; Salva i dati aziendali predefiniti per il futuro utilizzo.
          </ib-div>
        </ib-div>
      </ib-div>
      <ib-div class="ib_li">
        &#9679; &nbsp; Redisegnalo con un altro stile, usando semplici HTML e CSS technologie.
      </ib-div>
      <ib-div class="ib_li">
        &#9679; &nbsp; Stampalo direttamente.
      </ib-div>
      <ib-div class="ib_li">
        &#9679; &nbsp; Salvalo in PDF o salvalo online.
      </ib-div>
    </ib-div>
  </ib-div>

  <ib-div class="ib_h3">Come posso salvare i miei dati aziendali predefiniti per il futuro utilizzo?</ib-div>
  <ib-div class="ib_p">
    Clicca <ib-span class="ib_b">&quot;Salva Stato Della&quot;</ib-span> bottone e segui le istruzioni sullo schermo.
  </ib-div>

  <ib-div class="ib_h3">Come salvare la fattura?</ib-div>
  <ib-div class="ib_p">
    Ci sono due modi per salvare la fattura:
    <ib-div class="ib_ul">
      <ib-div class="ib_li">
        - &nbsp; Salvala in PDF usando PDF stampante.
      </ib-div>
      <ib-div class="ib_li">
        - &nbsp; Salvala online nel nostro sistema di fatturazione online Invoicebus.
      </ib-div>
    </ib-div>
  </ib-div>

  <ib-div class="ib_p">
    Salvando la fattura in PDF si può fare usando qualcosa che si chiama PDF Print Driver. Questo è anche conosciuto come stampare in PDF perchè il risultato del browser è mandato in un archivio invece in un stampante. Questa funzionalità è creata in alcuni browser (come Google Chrome), mentre in altri (come Firefox o Internet Explorer) devi installare PDF stampante manualmente. Un buono e gratuito PDF stampante è <ib-span class="ib_a" onclick="window.open('http://www.bullzip.com', '_blank')">Bullzip</ib-span>. Se già hai installato un PDF stampante, <ib-span class="ib_b">clicca &quot;Stampare&quot;,  &quot;Salva come PDF&quot; e clicca Salva</ib-span>.
  </ib-div>

  <ib-div class="ib_p">
    Per salvare la fattura online, devi prima creare un Invoicebus account. Puoi fare questo con un semplice cliccare &quot;Salva Online&quot; bottone. Poi sarai portato ad una pagina sicura dove puoi completare la tua registrazione e salvare la fattura. Per favore, nota che una fattura online è molto più potente che una statica fattura PDF. Per esempio, una fattura online può essere modificata on-the-fly, inviata per email, rintracciata e pagata direttamente con Credit card, PayPal o Bitcoin. Ecco un <ib-span class="ib_a" onclick="window.open('https://invoicebus.com/demoinvoice/', '_blank')">esempio</ib-span>.
  </ib-div>

  <ib-div class="ib_h3">Come redisegnare il modello?</ib-div>
  <ib-div class="ib_p">
    Il modello è fatto con una semplicità nella mente così sarà personalizzato con il tuo marchio e colori. Comunque, una conoscenza di base in HTML e CSS è necessaria. 
  </ib-div>

  <ib-div class="ib_p">
    Per modificazioni più piccole (come cambiamento di colori, caratteri o le dimensioni degli elementi) devi solo modificare l'archivio <ib-span class="ib_code">template.css</ib-span>. Se vuoi fare più grandi cambiamenti strutturali del layout (eliminando o traferendo elementi), devi solo modificare l'archivio <ib-span class="ib_code">template.html</ib-span>. Noi abbiamo creato <ib-span class="ib_a" onclick="window.open('https://invoicebus.com/create-html-invoice-template/', '_blank')">guide</ib-span> con migliori pratiche di come creare il tuo proprio modello, per questo non esitare a usarlo come punto di riferimento.
  </ib-div>

  <ib-div class="ib_p">
    <ib-span class="ib_b">Note:</ib-span> Il modello è totalmente diverso dalla sua logica, per questo motivo non devi pasticciare con alcun programma o codice JavaScript.
  </ib-div>

  <ib-div class="ib_h3">Devo essere collegato a Internet per usarlo?</ib-div>
  <ib-div class="ib_p">
    Sì, però non è necessario. Sullo sfondo il modello collega ad un archivio JavaScript (<ib-span class="ib_code">generator.min.js</ib-span>) collocato nel nostro server del quale tira tutta la logica. Se per qualche motivo tu non hai Internet connessione al tuo computer, puoi <ib-span class="ib_a" onclick="window.open('http://cdn.invoicebus.com/generator/generator.zip', '_blank')">scaricare</ib-span> lo script localmente, e cambiare <ib-span class="ib_code">template.html</ib-span> l'archivio per puntare alla versione locale dello script.
  </ib-div>

  <ib-div class="ib_p">
    Noi generalmente ti incoraggiaamo di continuare di usare lo script remoto perchè qualsiasi aggiornamento si rifletta immediamente.
  </ib-div>

  <ib-div class="ib_h3">Che cosa succede con i caratteri usati?</ib-div>
  <ib-div class="ib_p">
    Il modello usa Google Fonts perché sono gratuiti e aperti per tutti. Se vuoi usare il modello offline (senza essere connesso al'Internet) devi scaricare e installare i caratteri al tuo computer (<ib-span class="ib_a" onclick="window.open('http://www.fonts.com/web-fonts/google', '_blank')">SkyFonts</ib-span> è un semplice strumento e ti aiuta a fare questo in maniera facile). 
  </ib-div>

  <ib-div class="ib_h3">Posso utilizzare il codice JavaScript?</ib-div>
  <ib-div class="ib_p">
    Assolutamente! Infatti, saremo orgogliosi se decidi di farlo (<ib-span class="ib_a" onclick="window.open('https://github.com/Invoicebus/html-invoice-generator', '_blank')">forcella noi su GitHub</ib-span>). Nonostante decida di usarlo in progetti commerciali o non, sentiti libero di dirci perché abbiamo voglia di sentire tutte le possibilità come questo strumento puù essere usato. A volte, ti possiamo anche aiutare ;)
  </ib-div>

  <ib-div class="ib_h3">Supporta il nostro lavoro</ib-div>
  <ib-div class="ib_p">
    Mantenendo questo script richiede molto tempo e fatica per salvarlo libero e aggiornato. Tutto quello che cerchiamo è un po' di aiuto – delle clausole scritte in piccolo del nostro servizio di fatturazione alla fine del documento. Significherà un mondo per noi se gli lasci lì. Grazie!
  </ib-div>

  <ib-div class="ib_p">
    Non c'è problema se non vuoi lodarci, per questo motivo abbiamo fatto questo ancora più facile per te. Nell'archivio <ib-span class="ib_code">data.txt</ib-span> abbiamo incluso proprietà chiamata <ib-span class="ib_code">invoicebus_fineprint</ib-span> che può essere imposta su <ib-span class="ib_code">true</ib-span> (per mostrare le clausole) o <ib-span class="ib_code">false</ib-span> (per nascondere le clausole).
  </ib-div>

  <ib-div class="ib_h3">Hai riscontrato un errore?</ib-div>
  <ib-div class="ib_p">
    Se incontri qualche problema o errore, per favore denuncialo a <ib-span class="ib_a" onclick="window.open('https://github.com/Invoicebus/html-invoice-generator/issues', '_blank')">GitHub repo</ib-span>. Per favore non porre domande generali qui, invece usa il nostro forum di supporto (vedi giù).
  </ib-div>

  <ib-div class="ib_h3">Suggerimenti, domande, critiche?</ib-div>
  <ib-div class="ib_p">
    Esiste qualcosa per rendere questo modello più bello e farlo migliore per te? Cose buone / cose brutte? Sentiti libero di trovare il titolo approporiato al nostro <ib-span class="ib_a" onclick="window.open('https://groups.google.com/d/forum/html-invoice-generator', '_blank')">forum di supporto</ib-span> e colpirci – leggiamo e rispondiamo ad ogni post.
  </ib-div>
</ib-div>
*/}
