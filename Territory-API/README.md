# Wynncraft Territory Resource

## List
-----
{% method %}
```sh
GET https://api.wynncraft.com/public_api.php?action=territoryList
```
Returns a object, which contains many other objects. The key of each internal object is the name of a territory and the body is a [territory object](#territory-object) representing said territory.

### Territory Object
| Field    | Type   | Description         | Options/Details |
|----------|--------|---------------------|-----------------|
| territory | String | The name of the territory ||
| guild | String | The name of the guild that currently holds the territory | `"Nobody"` if no guild owns it |
| acquired | Date | The date and time the territory was acquired | Format: `YYYY-MM-DD HH:mm:ss`, 24-hour (00-23) |
| attacker | String or null | The guild that is currently attacking the territory ||
| [location](#territory-location-object) | Object | The start and end coordinates of the territory's area ||

#### Territory Location Object
| Field    | Type   | Description         |
|----------|--------|---------------------|
| startX | Number | The starting X coordinate of the territory |
| startY | Number | The starting Z coordinate of the territory |
| endX | Number | The ending X coordinate of the territory |
| endY | Number | The ending Z coordinate of the territory |

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
            "location": {
                "startX": Number, 
                "startY": Number,
                "endX": Number, 
                "endY": Number
            }
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