var nome = prompt('Inserisci il tuo Nome');
// console.log(nome);
// console.log(nome.trim());

var cognome = prompt('Inserisci il tuo Cognome');
// console.log(cognome);
// console.log(cognome.trim());

var colore = prompt('Inserisci il tuo Colore Preferito');
// console.log(colore);
// console.log(colore.trim());

var password = nome.trim() + cognome.trim() + colore.trim() + '21';
// console.log(password);

var emoji = String.fromCodePoint(0x1F60E);
// console.log(emoji);

var password = password.toLowerCase()
// console.log(password);

document.getElementById("password").innerHTML = "La tua Password è:" + password + emoji;
