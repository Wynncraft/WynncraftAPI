# Wynncraft Leaderboard Resource

## Guild
-----
{% method %}
```sh
GET https://api.wynncraft.com/public_api.php?action=statsLeaderboard&type=guild&timeframe={timeframe}
```
Returns a leaderboard of guilds with a length of 100. Sorted by guild level/xp. Timeframe can be `alltime`.

{% sample lang="v1" %}
#### Response
```js 
{
    "data": [
        {
            "name": String,
            "prefix": String,
            "xp": Number,
            "level": Number,
            "created": Date,
            "territories": Number,
            "membersCount": Number,
            "num": Number // Position number
        },
        // ...
    ],
    "request": {
        "timestamp": Number,
        "version": Number
    }
}
```
{% endmethod %}

## Player
-----
{% method %}
```sh
GET https://api.wynncraft.com/public_api.php?action=statsLeaderboard&type=player&timeframe={timeframe}
```
Returns a leaderboard of players with a length of 100. Sorted by player level/xp. Timeframe can be `alltime`.

{% sample lang="v1" %}
#### Response
```js 
{
    "data": [
        {  
            "name": String,
            "uuid": String,
            "kills": Number,
            "level": Number,
            "xp": Number,
            "minPlayed": Number,
            "tag": String,
            "rank": String,
            "displayTag": Boolean,
            "veteran": Boolean,
            "guildTag": String,
            "guild": String,
            "num": Number // Position number
        },
        // ...
    ],
    "request": {
        "timestamp": Number,
        "version": Number
    }
}
```
{% endmethod %}

## PvP
-----
{% method %}
```sh
GET https://api.wynncraft.com/public_api.php?action=statsLeaderboard&type=pvp&timeframe={timeframe}
```
Returns a leaderboard of players with a length of 100. Sorted by player kills. Timeframe can be `alltime` or `weekly`.

{% sample lang="v1" %}
#### Response
```js 
{
    "data": [
        {  
            "name": String,
            "uuid": String,
            "kills": Number,
            "level": Number,
            "xp": Number,
            "minPlayed": Number,
            "tag": String,
            "rank": String,
            "displayTag": Boolean,
            "veteran": Boolean,
            "guildTag": String,
            "guild": String,
            "num": Number // Position number
        },
        // ...
    ],
    "request": {
        "timestamp": Number,
        "version": Number
    }
}
```
{% endmethod %}