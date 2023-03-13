////////// Exercice 1 //////////

// La valeur de c est égale à 24.


////////// Exercice 2 //////////

// La valeur de c est "12312"


////////// Exercice 3 //////////

// let tva = 1.196;
// let prixHt = +prompt('Quel est le prix hors taxe?');
// console.log(prixHt);
// let prixTTC = prixHt * tva;
// console.log('Le prix TTC est de ' + prixTTC);


////////// Exercice 4 //////////

// let prenom = prompt('Quel est votre prénom?');
// let nom = prompt('Quel est votre nom?');
// console.log('Bonjour ' + prenom + ' votre nom est ' + nom );


////////// Exercice 5 //////////

// let a = parseInt(prompt("Entrez un nombre"));
// if (isNaN(a)) {
//     alert('Veuillez entrer une valeur numérique')
// }
// let b = parseInt(prompt("Entrez un autre nombre"));
// if (isNaN(b)) {
//     alert('Veuillez entrer une valeur numérique')
// }
// let c = a * b;
// if (c < 0) {
//     console.log('Le produit de ces deux nombres est négatif');
// } else if (c > 0) {
//     console.log('Le produit de ces deux nombres est positif');
// } else if (c === 0){
//     console.log('le produit de ces deux nombres est nul');
// }
// if (isNaN(b) || isNaN(b)) {
//     console.log('Veuillez entrer des valeurs numériques');
// }

////////// Exercice 6 //////////

// let age = parseInt(prompt('Quel est votre âge?'));
// if (isNaN(age)) {
//     alert('Veuillez entrer une valeur numérique')
// }
// let film1 = 'Action man';
// let film2 = 'Matrix';
// let film3 = 'Evil dead';

// if (age < 13) {
//     console.log('Vous pouvez voir le film ' + film1);
// } else if (age < 18) {
//     console.log('Vous pouvez voir le film ' + film2);
// } else if (age > 18){
//     console.log('Vous pouvez voir le film ' + film3);
// } else if (isNaN(age)) {
//     console.log('Veuillez entrer une valeur numérique');
//     parseInt(prompt('Quel est votre âge?'))
// }


////////// Exercice 7 //////////

// function find() {
//     let nombre = Math.round(Math.random() * 10);
//     do {
//     let essai = parseInt(prompt('Trouvez le chiffre compris entre 0 et 10'));
//     if (essai === nombre) {
//         alert('Bravo, vous avez trouvé');
//     } else {
//         alert('Recommencez');
//     }
//     } while (essai != nombre);
// }
// find();


////////// Exercice 8 //////////

// function list(nombre){
//     nombre = parseInt(prompt('Veuillez entrer un nombre'));
//     for (nombre; nombre >= 0; nombre--) {
//         console.log(nombre);
//     }
// }
// list();


////////// Exercice 9 //////////

// function find() {
//     let nombre = Math.round(Math.random() * 100);
//     for (let i = 1; i > 0; i++) {
//         let essai = parseInt(prompt('Trouvez le chiffre entre 0 et 100'));
//         if (essai > nombre) {
//             alert('C\'est plus petit');
//         } else if (essai < nombre) {
//             alert('C\'est plus grand');
//         } else if (essai === nombre) {
//             alert('Bravo, vous avez trouvé');
//         } else {
//             alert('Recommencez');
//         }
//     } while (essai != nombre);
// }
// find();


////////// Exercice 10 //////////

// function sum(){
//     let array = [10, 15, 20, 15, 14, 8]
//     let somme = 0;
//     for (let i = 0; i < array.length; i++) {
//         somme = somme + array[i];       
//     }
//     console.log(somme);
// }
// sum();


////////// Exercice 11 //////////

// function note(){
//     let students = parseInt(prompt('Combien y a t-il d\'élèves'));
//     let array = [];
//     for (let i = 1; i < students; i++) {
//         let notes = parseInt(prompt('Note de chaque élève'));
//         array.push(notes);
//     }
//     console.log(array);
// }
// note();


////////// Exercice 12 //////////

// function note() {
//     let students = parseInt(prompt('Combien y a t-il d\'élèves'));
//     let array = [];
//     for (let i = 0; i < students; i++) {
//         let notes = parseInt(prompt('Note de chaque élève'));
//         array.push(notes);
//     }
//     let moyenne = array.filter(notes => notes >= 10)
//     console.log('Le nombre d\'élèves au dessus de la moyenne est de ' + moyenne.length);
// }
// note();


////////// Exercice 13 //////////

// function plusHaute() {
//     let nbres = [[0, 18], [1, 45], [45, 48], [-3, 2]]
//     let high = 0;
//     for (let i = 0; i < nbres.length; i++) {
//         for (let j = 0; j < nbres.length; j++){
//             if (nbres[i][j] > high) {
//                 high = nbres[i][j];
//             }
//         }
//     }
//     console.log(high);
// }
// plusHaute();


////////// Exercice 14 //////////

// function compter() {
//     let mot = prompt('Entrez un mot')
//     console.log(mot.length);
// }
// compter();



////////// Exercice 15 //////////

// function aleatoire(nbre) {
//         nbre = Math.round(Math.random() * 5);
//         for (let i = 1; i > 0; i++) {
//             let essai = parseInt(prompt('Trouvez le chiffre entre 0 et 5'));
//             if (essai > nbre) {
//                 alert('Plus petit');
//             } else if (essai < nbre) {
//                 alert('Plus grand');
//             } else if (essai === nbre) {
//                 alert('Bravo, vous avez trouvé');
//             } else {
//                 alert('Recommencez');
//             }
//         } while (essai != nbre);
//     }
//     aleatoire();


////////// Exercice 16 //////////

// function two (a, b){
//     a = parseInt(prompt('entrez un nombre'));
//     b = parseInt(prompt('entrez nombre'));
//     if (a > b) {
//         console.log(0);
//     } else{
//         console.log(1);
//     }
// }
// two();


////////// Exercice 17 //////////
function tri(a) {
    let tabLength = a.length;
    for (let i = 0; i < tabLength; i++) {
        for (let j = i + 1; j < tabLength; j++) {
            if (a[j] < a[i]) {
                let b = a[i];
                a[i] = a[j];
                a[j] = b;
            }            
        }       
    }
}
a = [299, 56, 35, 0, 5, 158, 97, 236];
let c = tri(a);
console.log(c);
tri();



////////// Exercice 18 //////////

// function tab(array) {
//     array = [25, 5, 18, 42, 23]
//     let plusGrdNbr = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > plusGrdNbr) {
//             plusGrdNbr = array[i];
//         }
//     }
//     console.log(plusGrdNbr);
// }
// tab();


////////// Exercice 19 //////////

// function voyelle(mot) {
//     mot = 'DORENAVANT'
//     let voyelles = 0;
//     for (let i = 0; i < mot.length; i++) {
//         let lettre = mot[i].toLowerCase();
//         if ((lettre === "a") || (lettre === "e") || (lettre === "i") || (lettre === "o") || (lettre === "u") || (lettre === "y")) {
//             voyelles++;
//         }
//     }
//     console.log('Le nombre de voyelles est de ' + voyelles);
// }
// voyelle();


////////// Exercice 20 //////////

// function pair(array) {
//     array = [23, 38, 86, 61, 18, 82, 25];
//     let arrayPair = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             arrayPair.push(array[i]);
//         }
//     }
//     console.log(arrayPair);
// }
// pair();


////////// Exercice 21 //////////

// function reverse(rev) {
//     let chaine = "Je commence à comprendre le Javascript"
//     rev = chaine.split("").reverse().join("");
//     console.log(rev);
// }
// reverse();