"use strict"

// pro psaní tlačítky
const tlacitka = document.querySelector(".tlacitka").children
const vysledek = document.querySelector(".vysledek").childNodes[1]

//pro některé funkce
const symboly = "+-●:,"
const operace = ["adding", "subracting", "multiplying", "dividing"]

for (const key in tlacitka) {
    if (Object.hasOwnProperty.call(tlacitka, key)) {
        const tlacitko = tlacitka[key];
        
        // aby funkce :●,=+ C< nebyly napsány
        if (!tlacitko.hasAttribute("data-operation")) {
            tlacitko.addEventListener("click", () => vysledek.value += tlacitko.textContent)
            //aby operace fungovala a byla i napsána
        } else if(operace.includes(tlacitko.getAttribute("data-operation"))) 
        {
            tlacitko.addEventListener("click", () => {
                if (vysledek.value != "" && 
                    !symboly.includes(vysledek.value.charAt(vysledek.value.length - 1))) {
                    vysledek.value += tlacitko.textContent
                }
            })
            //desetiná čárka
        } else if(tlacitko.getAttribute("data-operation") === "decimal") {
                tlacitko.addEventListener("click", () => {
                    // V inputu je nějaká hodnota a hodnota v inputu nekončí +-*/
                    if (vysledek.value != "" &&
                        !symboly.includes(vysledek.value.charAt(vysledek.value.length - 1))) {
                        vysledek.value += tlacitko.textContent
                    } else if (vysledek.value == "") vysledek.value = "0."
                })
            // aby to mohlo počítat
        } else if(tlacitko.getAttribute("data-operation") == "calculate") {
            tlacitko.addEventListener("click", () => {
                vysledek.value = eval(vysledek.value.replace("●", "*").replace(":", "/").replace(",", "."))
            })
            // aby to mohlo čistit C
        } else if(tlacitko.getAttribute("data-operation") == "clear") {
            tlacitko.addEventListener("click", () => {
                vysledek.value = ""
            })
                // aby to mohlo čistit < čistit jednu vzad
            } else if(tlacitko.getAttribute("data-operation") == "clear-one") {
                tlacitko.addEventListener("click", () => {
                     vysledek.value = vysledek.value.slice(0, -1)
                })
        }
    }
}