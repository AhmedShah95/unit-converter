// script.js
const inputValue = document.getElementById("inputValue");
const inputUnit = document.getElementById("inputUnit");
const outputUnit = document.getElementById("outputUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

// convertBtn.addEventListener("click", () => {
//     const value = parseFloat(inputValue.value);
//     const fromUnit = inputUnit.value;
//     const toUnit = outputUnit.value;

//     if (isNaN(value)) {
//         result.textContent = "Please enter a valid number.";
//         return;
//     }

//     const conversionRates = {
//         meters: { meters: 1, kilometers: 0.001, feet: 3.28084, inches: 39.3701 },
//         kilometers: { meters: 1000, kilometers: 1, feet: 3280.84, inches: 39370.1 },
//         feet: { meters: 0.3048, kilometers: 0.0003048, feet: 1, inches: 12 },
//         inches: { meters: 0.0254, kilometers: 0.0000254, feet: 0.0833333, inches: 1 },
//     };

//     const convertedValue = value * conversionRates[fromUnit][toUnit];
//     result.textContent = `Result: ${convertedValue.toFixed(4)} ${toUnit}`;
// });

convertBtn.addEventListener("click" , ()=>{
    const value = parseFloat(inputValue.value)
    const fromUnit = inputUnit.value
    const toUnit = outputUnit.value
    if(isNaN(value)){
        result.textContent = "Please enter the valid number"
        
    }
    const conversionRates = {
                meters: { meters: 1, kilometers: 0.001, feet: 3.28084, inches: 39.3701 },
        kilometers: { meters: 1000, kilometers: 1, feet: 3280.84, inches: 39370.1 },
        feet: { meters: 0.3048, kilometers: 0.0003048, feet: 1, inches: 12 },
        inches: { meters: 0.0254, kilometers: 0.0000254, feet: 0.0833333, inches: 1 },

    }
    const convertedValue = value * conversionRates[fromUnit][toUnit]
    result.textContent = `Result : ${convertedValue.toFixed(4)} ${toUnit}`
})
