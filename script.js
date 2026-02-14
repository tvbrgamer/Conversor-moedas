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


    switch (inputFrom.value) {
        case "BRL":
            currencyFrom.innerHTML = inputFrom.selectedOptions[0].text;
            ammountFrom.innerHTML = "R$" + inputValue.value
            break

        case "USD":
            currencyFrom.innerHTML = inputFrom.selectedOptions[0].text;
            ammountFrom.innerHTML = "US$" + inputValue.value
            break

        case "EUR":
            currencyFrom.innerHTML = inputFrom.selectedOptions[0].text;
            ammountFrom.innerHTML = "€" + inputValue.value
            break

        case "GPD":
            currencyFrom.innerHTML = inputFrom.selectedOptions[0].text;
            ammountFrom.innerHTML = "£" + inputValue.value
            break

        case "CHF":
            currencyFrom.innerHTML = inputFrom.selectedOptions[0].text;
            ammountFrom.innerHTML = "Fr." + inputValue.value
            break

        case "JPY":
            currencyFrom.innerHTML = inputFrom.selectedOptions[0].text;
            ammountFrom.innerHTML = "¥" + inputValue.value
            break

        case "CNY":
            currencyFrom.innerHTML = inputFrom.selectedOptions[0].text;
            ammountFrom.innerHTML = "¥" + inputValue.value
            break

        case "CAD":
            currencyFrom.innerHTML = inputFrom.selectedOptions[0].text;
            ammountFrom.innerHTML = "CA$" + inputValue.value
            break

        case "AUD":
            currencyFrom.innerHTML = inputFrom.selectedOptions[0].text;
            ammountFrom.innerHTML = "AU$" + inputValue.value
            break

        default:
            currencyFrom.innerHTML = inputFrom.selectedOptions[0].text;
            ammountFrom.innerHTML = "R$" + inputValue.value

    }

    if (ValorPara != undefined) {
        switch (inputTo.value) {
            case "BRL":
                currencyTo.innerHTML = inputTo.selectedOptions[0].text;
                ammountTo.innerHTML = "R$" + ValorPara
                break

            case "USD":
                currencyTo.innerHTML = inputTo.selectedOptions[0].text;
                ammountTo.innerHTML = "US$" + ValorPara
                break

            case "EUR":
                currencyTo.innerHTML = inputTo.selectedOptions[0].text;
                ammountTo.innerHTML = "€" + ValorPara
                break

            case "GPD":
                currencyTo.innerHTML = inputTo.selectedOptions[0].text;
                ammountTo.innerHTML = "£" + ValorPara
                break

            case "CHF":
                currencyTo.innerHTML = inputTo.selectedOptions[0].text;
                ammountTo.innerHTML = "Fr." + ValorPara
                break

            case "JPY":
                currencyTo.innerHTML = inputTo.selectedOptions[0].text;
                ammountTo.innerHTML = "¥" + ValorPara
                break

            case "CNY":
                currencyTo.innerHTML = inputTo.selectedOptions[0].text;
                ammountTo.innerHTML = "¥" + ValorPara
                break

            case "CAD":
                currencyTo.innerHTML = inputTo.selectedOptions[0].text;
                ammountTo.innerHTML = "CA$" + ValorPara
                break

            case "AUD":
                currencyTo.innerHTML = inputTo.selectedOptions[0].text;
                ammountTo.innerHTML = "AU$" + ValorPara
                break

            default:
                currencyTo.innerHTML = inputTo.selectedOptions[0].text;
                ammountTo.innerHTML = "R$" + ValorPara

        }

    }else{

        ammountFrom.innerHTML = 0

        currencyTo.innerHTML = inputTo.selectedOptions[0].text;
        ammountTo.innerHTML = 0
    }

}