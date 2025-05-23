const feet = 3.281
const gallon = 0.264
const pound = 2.204

document.querySelector('#convert-btn').addEventListener('click', renderConvertions)

function getConvertedUnits(par1, par2) {
    return par1 * par2
}

function renderConvertions() {
    const inputValue = document.querySelector('#input-el').value
    const feetConverted = getConvertedUnits(inputValue, feet).toFixed(3)
    const gallonConverted = getConvertedUnits(inputValue, gallon).toFixed(3)
    const poundConverted = getConvertedUnits(inputValue, pound).toFixed(3)

    document.querySelector('#meter-el').textContent = `
        ${inputValue} meters = ${feetConverted} feet | ${feetConverted} feet = ${inputValue} meters
    `

    document.querySelector('#liter-el').textContent = `
        ${inputValue} liters = ${gallonConverted} gallons | ${gallonConverted} gallons = ${inputValue} liters
    `

    document.querySelector('#kilo-el').textContent = `
        ${inputValue} kilos = ${poundConverted} pounds | ${poundConverted} pounds = ${inputValue} kilos
    `

    document.querySelector('#input-el') = ''
}