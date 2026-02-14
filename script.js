const inputFrom = document.getElementById("input-from")
const inputTo = document.getElementById("input-to")
const inputValue = document.getElementById("input-value")

const imgFrom = document.querySelector(".ammount-from")
const currencyFrom = document.querySelector(".p-currency-from")
const ammountFrom = document.querySelector(".p-ammount-from")

const imgTo = document.querySelector(".ammount-to")
const currencyTo = document.querySelector(".p-currency-to")
const ammountTo = document.querySelector(".p-ammount-to")

const apiUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/"

async function converter() {

    let CFrom = inputFrom.value.toLowerCase()
    let CTo = inputTo.value.toLowerCase()
    let AFrom = inputValue.value

    const response = await fetch(apiUrl + CFrom + ".json")
    const data = await response.json()

    let ATo = AFrom * data[CFrom][CTo]

    ATo = ATo.toFixed(3)

    mudaDados(ATo)

}

function mudaDados(ValorPara) {

    imgFrom.src = "./img/" + inputFrom.value.toLowerCase() + ".jpg"
    imgTo.src = "./img/" + inputTo.value.toLowerCase() + ".jpg"

    currencyFrom.innerHTML = inputFrom.selectedOptions[0].text;
    ammountFrom.innerHTML = format(inputFrom.value, inputValue.value)

    if (ValorPara != undefined) {
        currencyTo.innerHTML = inputTo.selectedOptions[0].text;
        ammountTo.innerHTML = format(inputTo.value, ValorPara);

    } else {
        ammountFrom.innerHTML = format(inputFrom.value, 0)
        currencyTo.innerHTML = inputTo.selectedOptions[0].text;
        ammountTo.innerHTML = format(inputTo.value, 0)
    }

}

function format(currency, value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: currency }).format(value)
}