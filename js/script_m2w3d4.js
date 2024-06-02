
// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
function changeTextH1(newText){
    let myH1 = document.getElementsByTagName("h1");
    myH1[0].innerText=newText;
}
changeTextH1("ESERCIZI M2W3D4 - Negozio AMAZON");

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina


function changePageColor(){
    
    let myBody = document.getElementsByTagName("body")[0];
    let rColor=parseInt(Math.random()*256).toString(16);
    let gColor=parseInt(Math.random()*256).toString(16);
    let bColor=parseInt(Math.random()*256).toString(16);
    let backGColor = "#" + rColor + gColor + bColor;
    //console.log("colore sfondo esadecimale è ", backGColor);
    myBody.style.backgroundColor=backGColor;
}
//changePagePage("#00ff00");






// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
function changeFooterURL(newURL){
    let myFooter = document.querySelector("footer");
    let myLink = myFooter.querySelectorAll("a");
    console.log(myLink);
    for (let i=0; i<myLink.length; i++){
        myLink[i].href = newURL;
    }
}

changeFooterURL("newURL");


// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
function addClassToAnchor(newClass){

    let myTable = document.querySelector(".table-product");
    let myAnchors = myTable.querySelectorAll("a");
    for (let i=0; i<myAnchors.length; i++){
        myAnchors[i].classList.add(newClass) //.addClassToAnchor(newClass);
    }
   // console.log("ho trovato questo: ", myAnchors);
}

addClassToAnchor("blueClass");
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
function changeClass(newClass){
    let myImages = document.querySelectorAll("img");
    for (let i=0; i<myImages.length; i++){
        myImages[i].classList.toggle(newClass);
    }

    //alert("cambio classe");
}

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
function changePriceColor(newClass){
    let myPrices = document.querySelectorAll(".price-product");
    for (let i=0; i<myPrices.length; i++){
        myPrices[i].classList.toggle(newClass);
    } 
}
/*changePriceColor("newPriceClass");*/


