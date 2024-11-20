let lengthContainer = document.getElementById('lengthContainer');
let temperatureContainer = document.getElementById('temperatureContainer');
let areaContainer = document.getElementById('areaContainer');
let volumeContainer = document.getElementById('volumeContainer');
let weightContainer = document.getElementById('weightContainer');
let timeContainer = document.getElementById('timeContainer');
let currencyContainer = document.getElementById('currencyContainer');

// Conversion factors for currency converter
const currencyConversionFactors = {
    USD: 1,
    EUR: 0.84,
    GBP: 0.76,
    JPY: 109.15,
    CNY: 6.93,
    INR: 74.83,
    AUD: 1.31,
    CAD: 1.29,
    CHF: 0.92,
    BRL: 5.13,
    ZAR: 14.45,
    MXN: 20.59,
    TRY: 7.42,
    RUB: 74.15,
    KRW: 1185.95,
    BTC: 0.000016,
    ETH: 0.00025,
    LTC: 0.0015,
    DOGE: 0.00025,
    BNB: 0.00025,
    PI: 54.63
};

function toggleContainer(containerId) {
    let container = document.getElementById(containerId);
    container.style.display = container.style.display === 'block' ? 'none' : 'block';
}

function convertLength() {
    let inputVal = parseFloat(document.getElementById('lengthInput').value);
    let fromUnit = document.getElementById('lengthFrom').value;
    let toUnit = document.getElementById('lengthTo').value;

    if (isNaN(inputVal)) {
        alert("Please enter a valid number for length.");
        return;
    }

    let conversionRates = {
        m: 1,
        km: 1000,
        cm: 0.01,
        mm: 0.001,
        in: 0.0254,
        ft: 0.3048,
        yd: 0.9144,
        mi: 1609.34,
        nm: 1852,
        AU: 149597870700,
        ly: 9.461e15,
        pc: 3.086e16
    };

    let result = (inputVal * conversionRates[fromUnit]) / conversionRates[toUnit];
    displayResult('lengthResult', result, toUnit);
}

function convertTemperature() {
    let inputVal = parseFloat(document.getElementById('temperatureInput').value);
    let fromUnit = document.getElementById('temperatureFrom').value;
    let toUnit = document.getElementById('temperatureTo').value;

    if (isNaN(inputVal)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    let result;
    if (fromUnit === 'C') {
        result = toUnit === 'F' ? (inputVal * 1.8) + 32 : inputVal + 273.15;
    } else if (fromUnit === 'F') {
        result = toUnit === 'C' ? (inputVal - 32) / 1.8 : (inputVal - 32) / 1.8 + 273.15;
    } else if (fromUnit === 'K') {
        result = toUnit === 'C' ? inputVal - 273.15 : (inputVal - 273.15) * 1.8 + 32;
    }

    displayResult('temperatureResult', result, toUnit);
}

function convertArea() {
    let inputVal = parseFloat(document.getElementById('areaInput').value);
    let fromUnit = document.getElementById('areaFrom').value;
    let toUnit = document.getElementById('areaTo').value;

    if (isNaN(inputVal)) {
        alert("Please enter a valid number for area.");
        return;
    }

    let conversionRates = {
        m2: 1,
        km2: 1000000,
        cm2: 0.0001,
        mm2: 0.000001,
        in2: 0.0064516,
        ft2: 0.092903,
        yd2: 0.836127,
        acre: 4046.86,
        hectare: 10000
    };

    let result = (inputVal * conversionRates[fromUnit]) / conversionRates[toUnit];
    displayResult('areaResult', result, toUnit);
}

function convertVolume() {
    let inputVal = parseFloat(document.getElementById('volumeInput').value);
    let fromUnit = document.getElementById('volumeFrom').value;
    let toUnit = document.getElementById('volumeTo').value;

    if (isNaN(inputVal)) {
        alert("Please enter a valid number for volume.");
        return ;
    }

    let conversionRates = {
        m3: 1,
        km3: 1000000000,
        cm3: 0.001,
        mm3: 0.000001,
        in3: 0.0163871,
        ft3: 28.3168,
        yd3: 764.555,
        L: 1000,
        mL: 1,
        gal: 3785.41,
        qt: 946.35,
        pt: 568.26,
        fl_oz: 29.5735
    };

    let result = (inputVal * conversionRates[fromUnit]) / conversionRates[toUnit];
    displayResult('volumeResult', result, toUnit);
}

function convertWeight() {
    let inputVal = parseFloat(document.getElementById('weightInput').value);
    let fromUnit = document.getElementById('weightFrom').value;
    let toUnit = document.getElementById('weightTo').value;

    if (isNaN(inputVal)) {
        alert("Please enter a valid number for weight.");
        return;
    }

    let conversionRates = {
        kg: 1,
        g: 0.001,
        mg: 0.000001,
        lb: 0.453592,
        oz: 0.0283495,
        ton: 1000
    };

    let result = (inputVal * conversionRates[fromUnit]) / conversionRates[toUnit];
    displayResult('weightResult', result, toUnit);
}

function convertTime() {
    let inputVal = parseFloat(document.getElementById('timeInput').value);
    let fromUnit = document.getElementById('timeFrom').value;
    let toUnit = document.getElementById('timeTo').value;

    if (isNaN(inputVal)) {
        alert("Please enter a valid number for time.");
        return;
    }

    let conversionRates = {
        s: 1,
        min: 60,
        hr: 3600,
        day: 86400,
        week: 604800,
        month: 2629800,
        year: 31557600,
        decade: 315576000,
        century: 3155760000,
        millennium: 31557600000
    };

    let result = (inputVal * conversionRates[fromUnit]) / conversionRates[toUnit];
    displayResult('timeResult', result, toUnit);
}

// Convert currency
function convertCurrency() {
    const from = document.getElementById('currencyFrom');
    const to = document.getElementById('currencyTo');
    const amount = document.getElementById('currencyInput').value;
  
    const result = (amount * currencyConversionFactors[from.value]) / currencyConversionFactors[to.value];
  
    document.getElementById('currencyResult').textContent = `Result: ${result}`;
}

function displayResult(resultId, result, unit) {
    let resultElement = document.getElementById(resultId);

    // Show result with animation
    resultElement.innerHTML = `Result: ${result.toFixed(6)} ${unit}`;
    resultElement.classList.remove('visible'); // Remove visible class to reset animation
    void resultElement.offsetWidth; // Trigger reflow to restart animation
    resultElement.classList.add('visible'); // Add visible class to fade in
}