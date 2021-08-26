
let cognomi = ["Bianchi","Neri" ,"Rossi","Verdi", "Gialli"]

let cognome = prompt ("inserisci il tuo cognome")

cognomi.push (cognome)
cognomi.sort (); //lista ordinata alfabeticamente
document.getElementById("number").innerHTML = cognomi.indexOf(cognome) + 1; //ordinamento numerico

console.log (cognomi)