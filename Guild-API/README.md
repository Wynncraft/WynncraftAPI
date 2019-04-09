# Wynncraft Guild Resource

## List
-----
{% method %}
```sh
GET https://api.wynncraft.com/public_api.php?action=guildList
```
Returns a list of all guilds.

{% sample lang="v1" %}
#### Response
```js 
{
    "guilds": [String],
    "request": {
        "timestamp": Number,
        "version": Number
    }
}
```
{% endmethod %}

## Statistics
-----
{% method %}
```sh
GET https://api.wynncraft.com/public_api.php?action=guildStats&command={guild name}
```
Guild information, such as: level, members, territories, xp, and more.

{% sample lang="v1" %}
#### Response
```js 
{
    "name": String,
    "prefix": String,
    "members": [
        {
            "name": String,
            "rank": String,
            "contributed": Number,
            "joined": Date,
            "joinedFriendly": String
        },
        // ...
    ],
    "xp": Number,
    "level": Number,
    "created": Date,
    "createdFriendly": String,
    "territories": Number,
    "request": {
        "timestamp": Number,
        "version": Number
    }
}
```
{% endmethod %}