
let country = document.querySelectorAll(".country select")
let fromsel = document.querySelector(".from select")
let tosel = document.querySelector(".to select")
let btn = document.querySelector(".btn")
let result = document.querySelector(".result")

for (const select of country) {
    for (const currcode in countryList) {
        let newoption = document.createElement("option")
        newoption.innerText = currcode;
        newoption.value = currcode;
        if (select.name === "from" && currcode === "USD") {
            newoption.selected = "selected";
        } else if (select.name === "to" && currcode === "INR") {
            newoption.selected = "selected";
        }
        select.append(newoption)
    }
    select.addEventListener(("change"), evt => {
        updateFlag(evt.target);
    })
}
const updateFlag = (element) => {
    let currcode = element.value;
    let countryCode = countryList[currcode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

}

async function finalconverter(fromsel,tosel) {
    let amount = document.querySelector(".amount input")
    let amtvalue = amount.value
    let api = await fetch(`https://v6.exchangerate-api.com/v6/4859091a70c7645a02a7a818/latest/${fromsel}`);
    let data = await api.json();
    console.log(data.conversion_rates.tosel);
    let rate = data.conversion_rates.tosel;
    let final = rate*amtvalue;
    console.log(final)
}

async function finalconverter(fromsel, tosel) {
    let amount = document.querySelector(".amount input");
    let amtvalue = amount.value;
    let api = await fetch(`https://v6.exchangerate-api.com/v6/4859091a70c7645a02a7a818/latest/${fromsel}`);
    let data = await api.json();
    let rate = data.conversion_rates[tosel];
    let final = rate * amtvalue;
    result.innerText  = `${amtvalue}${fromsel} = ${final}${tosel}`
}

btn.addEventListener("click", function(event) {
    event.preventDefault(); 
    finalconverter(fromsel.value, tosel.value);
});