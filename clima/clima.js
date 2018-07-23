const axios = require('axios');

const getClima = async (latitud, longitud) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=358d3b58c1eaf35a1fc112e32e126e0c`);
    console.log(resp.data);
    //console.log('resp: ', JSON.stringify(resp, undefined, 2));
    return resp.data.main.temp;
}

module.exports = {
    getClima,
}