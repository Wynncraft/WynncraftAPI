# Wynncraft Network Resource

## Server List
-----
{% method %}
```sh
GET https://api.wynncraft.com/public_api.php?action=onlinePlayers
```
Returns which servers are online and which players are on them.

{% sample lang="v1" %}
#### Response
```js 
{
    "WC11": [String],
    "WC2": [String],
    "WC3": [String],
    // ...
    "request": {
        "timestamp": Number,
        "version": Number
    }
}
```
{% endmethod %}

## Player Sum
-----
{% method %}
```sh
GET https://api.wynncraft.com/public_api.php?action=onlinePlayersSum
```
Returns the player sum on the Wynncraft network.

{% sample lang="v1" %}
#### Response
```js 
{
    "players_online": Number,
    "request": {
        "timestamp": Number,
        "version": Number
    }
}
```
{% endmethod %}