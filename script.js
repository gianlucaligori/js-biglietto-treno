// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.




const distanceKm = parseInt(prompt('Inserire distanza da percorrere'));
console.log(distanceKm);

const userAge = parseInt(prompt("Inserire età"));
console.log(userAge);

const pricePerKm = (0.21);
console.log(pricePerKm * distanceKm);

const totalPrice = (distanceKm * pricePerKm)

 if (userAge < 18) {
    console.log (totalPrice - totalPrice * 20 / 100);
    document.getElementById ('price').innerHTML = ( ' ' + totalPrice - totalPrice * 20 / 100)

 }
 else if(userAge >= 65){
    document.getElementById ('price').innerHTML = ( ' ' + totalPrice - totalPrice * 40 / 100);
 }
 
 else {
    console.log(totalPrice)
    document.getElementById ('price').innerHTML = ( ' ' + totalPrice)
 }
    