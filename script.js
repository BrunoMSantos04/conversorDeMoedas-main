const convert_button = document.querySelector(".convert_button")
const select_button = document.querySelector(".select_b")

function convertValues(click){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-convert")
    const currencyValue = document.querySelector(".currency-value")

    console.log(select_button.value)

    const dolarToday = 4.90
    const euroToday = 5.36
    const libraToday = 6.24
    const bitcoinToday = 145.891

    if(select_button.value == "dolar"){
        currencyValue.innerHTML = new Intl.NumberFormat("en-US",{style: "currency", currency: "USD"}).format(inputCurrencyValue/dolarToday)

    }
    if(select_button.value == "euro"){
        currencyValue.innerHTML = new Intl.NumberFormat("pt-PT", {style: "currency", currency: "EUR"}).format(inputCurrencyValue/euroToday)
    }
    if(select_button.value == "libra"){
        currencyValue.innerHTML = new Intl.NumberFormat("en-UK", {style: "currency", currency: "GBP"}).format(inputCurrencyValue/libraToday)
    }
    if(select_button.value == "bitcoin"){
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "BTC"}).format(inputCurrencyValue/bitcoinToday)
    }

    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br",{style: "currency", currency: "BRL"}).format(inputCurrencyValue)
    
}

function changeCurrency(){
    const currencyName = document.getElementById("currencyName")
    let currencyImage = document.querySelector(".currencyIMG")

    if(select_button.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }   
    
    if(select_button.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }    

    if(select_button.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }    

    if(select_button.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }    

    convertValues()
}


select_button.addEventListener('change', changeCurrency)
convert_button.addEventListener("click", convertValues)

