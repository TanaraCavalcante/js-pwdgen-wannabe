/*--------------------------
      FASE PREPARATORIA
--------------------------*/

//Ricupero gli ellementi della pagina di mio interesse
const messagePassword = document.getElementById('message');
console.log(messagePassword)

// Preparo la variabile che appare nel fine della Password
const fineNumber = 21;
console.log(fineNumber, typeof fineNumber)


/*--------------------------
      FASE RACCOLTA DATI
--------------------------*/

// 1-Chiedi all'utente il suo nome
const firstName = prompt('Inserisci il tuo primo nome');
console.log(firstName)

// 2-Chiedi all'utente il suo cognome
const lastName = prompt('Inserisci il tuo cognome');
console.log(lastName)

// 3-Chiedi all'utente il suo colore preferito
const favoriteColor = prompt('Inserisci il tuo colore preferito');
console.log(favoriteColor)

// 4-Password
const password = firstName + lastName + favoriteColor + fineNumber;
console.log(password)

/*--------------------------
      FASE DI OUTPUT
--------------------------*/

// Mostro in pagina

password.innerText = 'La tua Password è ${password}' 


