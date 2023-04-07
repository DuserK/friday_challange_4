console.clear();

// 2. Parašyti f-ją, kuriai būtų perduodamas vienas parametras skaičius(valandos) 
// ir  konvertuotų valandos į sekundes, bei gražintų rezultatą

function konvertavimas (valandos) {
    sekundes = valandos * 60 * 60;
    return sekundes;
}

const val = 3;
const sek = konvertavimas (val);
console.log(sek);
