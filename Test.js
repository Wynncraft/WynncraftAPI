//Load the library
const axios = require('axios');

//Run the script
run();

async function getTerritory(name) {
    //Make the request
    let response = (await axios.get('https://api-legacy.wynncraft.com/public_api.php?action=territoryList')).data;
    return response.territories[name];
}

async function run() {
    //Call the function
    let object = await getTerritory("Detlas");
    //Print the result
    console.log(object);
}