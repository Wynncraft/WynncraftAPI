# Using the API with Python

A short guide how to use the Wynn API with Python3.

  - [Manual requests](Guides/PYTHON.md#making-requests-manually)
  - [Using wrappers](Guides/PYTHON.md#using-community-made-libraries)

**Note:** The libraries featured in the guides are not associated with Wynncraft or the Wynncraft API, please do not report bugs about them on Wynn forums or on the API Documentation's github repository.

## Making requests manually

#### urllib - The built-in module

A demo showing how to request and use data from the API.

```py
#import the library
import urllib.request
import json 

url = 'https://api-legacy.wynncraft.com/public_api.php?action=territoryList'
#Make the request object
f = urllib.request.urlopen(url)
#Read the data from the request
data = f.read().decode('utf-8')
#convert the string to JSON objects (dictonaries)
json = json.loads(data)
#Print the data
print(json['territories']['Detlas'])
```

The documentation for the `territoryList` route can be seen [here](../Territory-API/README.md).

#### Requests

To install [Requests](https://pypi.org/project/requests/) run the command (you might have to use an admin/root user): 
```bash
pip install requests
```

A demo showing how to request and use data from the API.

```py
#import the library
import requests

#make the request
r = requests.get('https://api-legacy.wynncraft.com/public_api.php?action=territoryList')
#get the data
json = r.json()
#Print the data
print(json['territories']['Detlas'])
```

The documentation for the `territoryList` route can be seen [here](../Territory-API/README.md).

## Using community made libraries

#### Using the wynncraft-python library

First make sure you have at least python 3.6, then you want to install [wynncraft-python](https://github.com/martinkovacs/wynncraft-python)
```bash
pip install wynncraft
```
Using a wynncraft-python library to get a player:
```py
import wynncraft

try:
    response = wynncraft.Player.stats("Salted")
except Exception as e:
    # Here, you can handle on error
    print(e)
else:
    # Succesful request
    print(response)
```
Documentation for the wynncraft-python library can be found [here](https://github.com/martinkovacs/wynncraft-python)

The documentation for the `playerStats` route can be seen [here](../Player-API/README.md).
