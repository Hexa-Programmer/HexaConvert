
const units = {
    length: ["Millimeter", "Centimeter", "Meter", "Kilometer", "Inch", "Foot", "Yards", "Mile"],
    weight: ["Miligram", "Gram", "Kilogram", "Ounce", "Pound"],
    temperature: ["Celcius", "Farenheit", "Kelvin"],
    volume: ["Milliliter", "Liter", "Gallon", "Cup", "Tablespoon", "Spoon"],
    speed: ["m/s", "km/hr", "mi/hr"]
};

const category = document.getElementById("category");
const unit1 = document.getElementById("unit1");

function updateUnits() {
    const selectedCategory = category.value;
    const availableUnits = units[selectedCategory];

    unit1.innerHTML = "";

    availableUnits.forEach(function(unit) {
        const option = document.createElement("option");

        option.value = unit;
        option.textContent = unit;

        unit1.appendChild(option);
    });
}

category.addEventListener("change", updateUnits);

updateUnits();