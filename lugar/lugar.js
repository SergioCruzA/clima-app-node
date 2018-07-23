const axios = require('axios');


const getLatLng = async (direccion) => {
    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }`);

    if (resp.data.status === 'ZERO_RESULTS') throw new Error(`No hay resultados para la ciudad ${ direccion }`);

    let location = resp.data.results[0];
    let coord = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coord.lat,
        lng: coord.lng,
    }
}

module.exports = {
    getLatLng,
}

/* axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }`)
    .then(resp => {
        let results = resp.data.results[0];
        console.log('results:  ', results);
        let { formatted_address: direccion, geometry } = results;
        console.log('resp: ', JSON.stringify(resp.data, undefined, 2));
        console.log('Direccion: ', direccion);
        console.log('Lat: ', geometry.location.lat);
        console.log('Long: ', geometry.location.lng);
    })
    .catch(err => console.log('Error!! ', err)); */