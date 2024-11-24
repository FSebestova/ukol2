const justFood = (clovek) => {
    const cena = clovek * 100;  // 100 Kč na osobu
    return `Catering od Just Food pro ${clovek} lidí za ${cena} Kč`;
};

const yourMama = (clovek) => {
    const cena = clovek * 500;  // 500 Kč na osobu
    return `Catering od Your Mama pro ${clovek} lidí za ${cena} Kč`;
};

const flavourHaven = (clovek) => {
    const cena = clovek * 3000;  // 3000 Kč na osobu
    return `Catering od Flavour Haven pro ${clovek} lidí za ${cena} Kč`;
};

const vytvoreniUdalosti = (jmenoUdalosti, clovek, cateringFunkce) => {
    const cateringZprava = cateringFunkce(clovek);
    return `Událost ${jmenoUdalosti} s ${cateringZprava}`;
};

console.log(justFood(100));
console.log(yourMama(100));
console.log(flavourHaven(100));
console.log(vytvoreniUdalosti('Vánoční večírek', 100, flavourHaven));
