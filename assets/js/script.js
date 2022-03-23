// Chiedo nome cognome e colore preferito

const nome = prompt("Qual'è il tuo nome?");

const cognome = prompt("Qual'è il tuo cognome?");

const colore_preferito = prompt("Qual'è il tuo colore preferito?");

const risultato = nome + cognome + colore_preferito + 22;

//Scrivo sulla pagina il risultato

document.getElementById("risultato").innerHTML = `Password insicura generata: ${risultato}`

