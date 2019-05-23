# Wynncraft Search Resource

## Name
-----
{% method %}
```sh
GET https://api.wynncraft.com/public_api.php?action=statsSearch&search={name}
```
Returns a list of guild and player names which contain the search query (case-insensitive).

{% sample lang="v1" %}
#### Response
```js 
{
    "guilds": [String],
    "players": [String],
    "request": {
        "timestamp": Number,
        "version": Number
    }
}
```
{% endmethod %}