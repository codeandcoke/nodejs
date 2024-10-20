import axios from 'axios';

function addCityNode(name) {
    const citiesUl = document.getElementById('cities');

    const item = document.createElement('li');
    item.className = 'list-group-item';
    item.appendChild(document.createTextNode(name));
    citiesUl.appendChild(item);
};

window.readCities = function() {
    axios.get('http://localhost:8080/cities')
        .then((response) => {
            const cityList = response.data;

            Object.keys(cityList).forEach(cityName => {
                addCityNode(cityName);
            });
        });
};
