const dollarRate = 1;
const euroRate = 1.17;
const grnRate = 0.040;
const lariRate = 0.017;
const plnRate = 1.37;

let furtherExchange;

do {
    let userCurrencyFrom = prompt(
    "Enter the name of the currency to exchange from: USD, EUR, UAH, GEL, PLN"
    );

    let curencyIndex;
        if (userCurrencyFrom.toUpperCase() === "USD") {
            curencyIndex = dollarRate;
        } else if (userCurrencyFrom.toUpperCase() === "EUR") {
            curencyIndex = euroRate;
        } else if (userCurrencyFrom.toUpperCase() === "UAH") {
            curencyIndex = grnRate;
        } else if (userCurrencyFrom.toUpperCase() === "GEL") {
            curencyIndex = lariRate;
        } else if (userCurrencyFrom.toUpperCase() === "PLN") {
            curencyIndex = plnRate;
        } else {
            prompt("Enter one of these currencies: USD, EUR, UAH, GEL, PLN");
        }
            console.log(curencyIndex);


    let currencyAmount = parseFloat(prompt("Enter the amount of currency"));

        let userCurencyFor = prompt(
        "Enter what currency you want to exchange: USD, EUR, UAH, GEL, PLN"
        );

        console.log(currencyAmount);
        console.log(userCurencyFor);

    let exchangedAmount;

        if (userCurencyFor.toUpperCase() === "USD") {
            exchangedAmount = (currencyAmount * curencyIndex) / dollarRate;
        } else if (userCurencyFor.toUpperCase() === "EUR") {
           exchangedAmount = (currencyAmount * curencyIndex) / euroRate;
        } else if (userCurencyFor.toUpperCase() === "UAH") {
           exchangedAmount = (currencyAmount * curencyIndex) / grnRate;
        } else if (userCurencyFor.toUpperCase() === "GEL") {
           exchangedAmount = (currencyAmount * curencyIndex) / lariRate;
        } else if (userCurencyFor.toUpperCase() === "PLN") {
           exchangedAmount = (currencyAmount * curencyIndex) / plnRate ;
        } else {
            prompt("Enter the name of the currency to exchange from: USD, EUR, UAH, GEL, PLN");
        }
            console.log(exchangedAmount);

        alert(
            `Your amount ${exchangedAmount.toFixed(2)} ${userCurencyFor.toUpperCase()}`
        );

        furtherExchange = confirm("Continue?");
        } while (furtherExchange === true);