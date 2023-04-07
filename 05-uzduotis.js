//5. Parašyti f-ją, kuri nustatytų ar du paduodami argumentai yra lygūs. Gražiname true arba false
console.clear();

function palyginimas (x, y) {
    if (x === y) {
        return true;
    } else {
        return false;
    }
}

const a = 22;
const b = 15;

console.log(`Ar ${a} yra lygu ${b}?: ${palyginimas(a, b)}`);

const c = [22, 15];

console.log(`Ar ${c[0]} yra lygu ${c[1]}?: ${palyginimas(c[0], c[1])}`);

//pasirasyti per objekta
