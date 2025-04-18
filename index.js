const inputEl = document.querySelector('input-el')
const convertBtn = document.querySelector('convert-btn')
const meterEl = document.querySelector('meter-el')
const literEl = document.querySelector('liter-el')
const kiloEl = document.querySelector('kilo-el')
const feet = 3.281
const gallon = 0.264
const pound = 2.204

function getConvertedUnits(par1, par2) {
    return par1 * par2
}

function renderConvertions() {
    const inputValue = inputEl.value

    const meterConverted = getConvertedUnits(inputValue, feet)
    const literConverted = getConvertedUnits(inputValue, gallon)
    const kilogramConverted = getConvertedUnits(inputEl, pound)

    meterEl.innerHTML = meterConverted
}


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
