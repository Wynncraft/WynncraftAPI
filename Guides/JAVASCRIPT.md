# Using the API with Node.js or in the browser

A short guide how to use the Wynn API while using client-side javascript or Node.js.

**Note:** The libraries featured in the guides are not associated with Wynncraft or the Wynncraft API, please do not report bugs about them on Wynn forums or on the API Documentation's github repository.

#### HTTPS – The standard library (Node.js only)

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

#### Axios – A promise based client (Node.js and browser support)

Firstly, you have to install [Axios](https://www.npmjs.com/package/axios):
```bash
npm i axios
```
or
```bash
yarn add axios
```
or (in the browser)
```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

**Note:** While using Axios, you might get [CORS error](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors), this will result the request to fail.

Using the `Axios` library to make a GET request: 

```js
//Load the library, this is only required in Node.js
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
//Load the library, this is only required in Node.js
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