# Using the API with Node.js

A short guide how to use the Wynn API while using Node.js.
The main parts of this guide: 
* Making manual requests to the API (see [here](#making-requests-manually))
* Using community made libraries (see [here](#using-community-made-libraries))

## Making requests manually

#### HTTPS – The standard library

Using the `HTTPS` library to make a GET request: 

```js
//Load the https library
const https = require('https');

//Make the request
https.get('https://api-legacy.wynncraft.com/public_api.php?action=onlinePlayers', (resp) => {
    let data = '';

    // HTTPS receives the response in chunks, a chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Parse and print out the result.
    resp.on('end', () => {
        console.log(JSON.parse(data));
    });

}).on('error', (err) => { //Handle errors
    console.log('Error: ' + err.message);
});
```
The documentation for the `onlinePlayers` route can be seen [here](../Network-API/README.md#server-list).

#### Axios – A promise based client

Firstly, you have to install [Axios](https://www.npmjs.com/package/axios):
```bash
npm i axios
```
or
```bash
yarn add axios
```

Using the `Axios` library to make a GET request: 

```js
//Load the library
const axios = require('axios');

//Make the request
axios.get('https://api-legacy.wynncraft.com/public_api.php?action=territoryList')
    .then(response => {
        console.log(response.data); //Print all the territory objects
    })
    .catch(error => { //  Handle errors
        console.log(error);
    });
```

Using `Axios` in asynchronous functions:
```js
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
```
The documentation for the `territoryList` route can be seen [here](../Territory-API/README.md).

## Using community made libraries