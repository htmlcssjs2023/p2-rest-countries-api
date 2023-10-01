// console.log('Okay done');

// Load Countries 
const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => viewCountries(data));
}

const viewCountries = countries =>{
    // console.log(countries);
    const viewCountriesHTML = countries.map(country => displayCountry(country))
    const container = document.getElementById('root');
    container.innerHTML = viewCountriesHTML.join(' ');
}


const displayCountry = ({name, flags, region}) => {
    // const {name, flags, region} = country;
    return `
        <div class="country"> 
            <p> <b>Country Name: </b>${name.common}</p>
           <img src="${flags.png}" />
           <p><b>Country Region: </b>${region}</p>
        </div>
    `
}

// const displayCountry = country => {
//     return `
//         <div> 
//             <p> <b>Country Name: </b>${country.name.common}</p>
//            <img src="${country.flags.png}" />
//            <p><b>Country Region: </b>${country.region}</p>
//         </div>
//     `
// }


loadCountries();