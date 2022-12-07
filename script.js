"use strict"

// pro psaní tlačítky
const tlacitka = document.querySelector(".tlacitka").children
const vysledek = document.querySelector(".vysledek").childNodes[1]

for (const key in tlacitka) {
    if (Object.hasOwnProperty.call(tlacitka, key)) {
        const tlacitko = tlacitka[key];
        
        // aby funkce :●,=+ C< nebyly napsány
        if (!tlacitko.hasAttribute("data-operation")) {
            tlacitko.addEventListener("click", () => vysledek.value += tlacitko.textContent)
        }
    }
}