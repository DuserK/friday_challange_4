// 3. Parašyti f-ją, kuri skaičiuotų krepšinio taškus, pirmas perduodamas parametras baudų skaičius, antras perduodamas parametras dvitaškių skaičius, trečias perduodamas tritaškių. Apskaičiuoti ir gražinti bendrą surinkta komandos taškų skaičių. 
console.clear();

function taskai (baudos, dvitaskiai, tritaskiai) {
    let suma = 0;
    suma = baudos + (dvitaskiai * 2) + (tritaskiai * 3);
    return suma;
}

const a = 5; // baudos
const b = 25; // dvitaskiai
const c = 10; //tritaskiai

console.log(`Rezultatas: ${taskai(a,b,c)}`);

const d = 1; // baudos
const e = 1; // dvitaskiai
const f = 1; //tritaskiai

console.log(`Rezultatas: ${taskai(d,e,f)}`);

const g = 10; // baudos
const h = 20; // dvitaskiai
const j = 5; //tritaskiai

console.log(`Rezultatas: ${taskai(g,h,j)}`);