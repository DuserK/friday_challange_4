//6. Sukurti f-ją, kuri nustatytų, kuris iš paduodamų parametrų skaičių (n1, n2) yra didesnis. Jei n1 didesnis gražintų tekstą "n1 skaičius didesnis", jei "n2 skaičius didesnis", jei skaičiai lygūs gražintų n1 lygus n2. 

console.clear();

function comparisonNum(n1, n2) {
    if (n1 > n2) {
        return n1 + " skaičius didesnis";
    } else if (n1 === n2) {
        return n1 + " lygus " + n2;
    }  else{
        return n2 + " skaičius didesnis";
    }
}

const a = 10;
const b = 20;

console.log(`${a} ar ${b} didesnis? ${comparisonNum(a,b)}`);