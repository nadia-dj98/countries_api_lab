
const getCountryByName = async(countryName) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const jsonData = await response.json();
    const printData = console.log(jsonData);

    // Display country name
   

    jsonData.forEach((country) => {
        // console.log(country.name.official);
        const countrySection = document.getElementById("countriesSection");
        const countryHeader = document.createElement("h2");
        countryHeader.textContent = country.name.official;
        countrySection.appendChild(countryHeader);
        const populationHeader = document.createElement("h3");
        populationHeader.textContent = "Population: " + country.population;
        countrySection.appendChild(populationHeader)
    });

}   

const getAllCountries = async() => {
    const response = await fetch ('https://restcountries.com/v3.1/all');
    const jsonData = await response.json();
    jsonData.forEach((country) => {
        // console.log(country.name.official);
        const countrySection = document.getElementById("countriesSection");
        const countryHeader = document.createElement("h2");
        countryHeader.textContent = country.name.official;
        countrySection.appendChild(countryHeader);
        const populationHeader = document.createElement("h3");
        populationHeader.textContent = "Population: " + country.population;
        countrySection.appendChild(populationHeader)
    });

}






const countryForm = document.getElementById("countryForm");



function getCountrybyInput (event) {
    
    //input name in field 
    //input will be argument in to the getCountryByName function.
    event.preventDefault();
    const countryName = event.target.country.value;
    const countrySection = document.getElementById("countriesSection");
    countrySection.innerHTML = getCountryByName(countryName);
}

countryForm.addEventListener('submit', getCountrybyInput);



// getAllCountries();
// getCountryByName("algeria");