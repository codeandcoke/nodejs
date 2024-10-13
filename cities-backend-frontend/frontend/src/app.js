import axios from 'axios';

function addCityNode(name) {
    const citiesUl = document.getElementById('cities');

    const item = document.createElement('li');
    item.className = 'list-group-item';
    item.appendChild(document.createTextNode(name));

    const button = document.createElement('button');
    button.className = 'btn-close'
    button.onclick = function() {
        removeCity(name);
        item.remove();
    };
    item.appendChild(button);

    citiesUl.appendChild(item);
}

window.readCities = function() {
    axios.get('http://localhost:8080/cities')
        .then((response) => {
            const cityList = response.data;

            Object.keys(cityList).forEach(cityName => {
                addCityNode(cityName);
            });
        });
};

window.addCity = function() {
    const name = document.getElementById('name').value;
    const altitude = document.getElementById('altitude').value;
    const population = document.getElementById('population').value;

    if (name === '') {
        alert('El nombre es un campo obligatorio');
        return;
    }

    axios.post('http://localhost:8080/cities', {
        name: name,
        altitude: altitude,
        population: population
    }).then(() => {
        addCityNode(name);
    });
};

window.removeCity = function(name) {
    console.log(name + ' was removed');
    // TODO Remove the city
};
