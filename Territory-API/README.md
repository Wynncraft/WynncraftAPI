# Wynncraft Territory Resource

## List
-----
{% method %}
```sh
GET https://api.wynncraft.com/public_api.php?action=territoryList
```
Returns a list of territories and their respective guild owners. If the territory is not owned, the guild field will be `"Nobody"`.

{% sample lang="v1" %}
#### Response
```js 
{
    "territories": {
        "Dead Island North West": {
            "territory": String,
            "guild": String,
            "acquired": Date,
            "attacker": String || null
        },
        // ...
    },
    "request": {
        "timestamp": Number,
        "version": Number
    }
}
```
{% endmethod %}