// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
let current = new Date();

// let exo = `${hour}:${minute}:${second}`;

// console.log(exo);

//Stocker l'heure , minute , seconde  dans des varaiables
let hour = ((current.getHours() + 11) % 12) + 1;
let minute = current.getMinutes();
let second = current.getSeconds();

// console.log(" Nombre d'heure actuelles", hour);
// console.log(" Nombre de minutes actuelles", minute);
// console.log(" Nombre de seconde actuelles", second);

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
var deplheures = (hour * 60 * 60 + minute * 60 + second) * (360 / 43200);
var deplminutes = (minute * 60 + second) * 0.1;
var deplsecondes = second * 6;
AIGUILLESEC.style.transform = `rotate(${deplsecondes}deg)`;
AIGUILLEHR.style.transform = `rotate(${deplheures}deg)`;
AIGUILLEMIN.style.transform = `rotate(${deplminutes}deg)`;

// Déplacer les aiguilles
function demarrerLaMontre() {
  AIGUILLEHR.style.transform = `rotate(${deplheures}deg)`;
  deplheures += 360 / 43200;
  AIGUILLEMIN.style.transform = `rotate(${deplminutes}deg)`;
  deplminutes += 0.1;
  AIGUILLESEC.style.transform = `rotate(${deplsecondes}deg)`;
  deplsecondes += 6;

  console.log("etape");
}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
