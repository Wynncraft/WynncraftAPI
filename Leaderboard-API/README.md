# Wynncraft Leaderboard Resource

## Guild
-----
{% method %}
```sh
GET https://api.wynncraft.com/public_api.php?action=statsLeaderboard&type=guild&timeframe={timeframe}
```
Returns a leaderboard of guilds (represented as an array of [guild leaderboard objects](#guild-leaderboard-object)) with a length of 100. Sorted by territories currently owned, then level. Timeframe can be `alltime`.

### Guild Leaderboard Object
| Field    | Type   | Description         | Options/Details |
|----------|--------|---------------------|-----------------|
| name | String | The name of the guild ||
| prefix | String | The guild's prefix or tag ||
| xp | Number | The total amount of XP earned by the guild ||
| level | Number | The current level of the guild ||
| created | Date | Date that this guild was created | Date in ISO-8601 format with milliseconds |
| [banner](../Guild-API/README.md#guild-banner-object) | Object | (Optional) The banner of the guild ||
| territories | Number | The amount of territories currently owned by the guild ||
| membersCount | Number | The amount of members in the guild ||
| num | Number | The position of this guild in the leaderboard ||
| warCount | Number | Number of wars the guild has done, including failed ones ||
| badges | String Array | Returns a list of equipped badges ||
| rewards | Object Array | Returns a list of unclaimed rewards by the guild ||


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
            "banner": {
                "base": String,
                "tier": Number,
                "layers:" [{
                        "colour": String,
                        "pattern": String
                    },
                    // ...
                ]
            }
            "territories": Number,
            "membersCount": Number,
            "num": Number, // Position number
            "warCount": Number,
            "badges": [
                // ... Equipped badges
            ],
            "rewards": [
                {
                    "acquired": String, //Date
                    "amount": Number,
                    "type": 'GUILD_TOMES' | 'EMERALDS'
                },
                // ...
            ]
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
Returns a leaderboard of players (represented by an array of [player leaderboard objects](#player-leaderboard-object)) with a length of 100. Sorted by player combat level/xp. Timeframe can be `alltime`.

### Player Leaderboard Object
| Field    | Type   | Description         | Options/Details |
|----------|--------|---------------------|-----------------|
| name | String | The Minecraft username of the player ||
| uuid | String | The Minecraft UUID of the player ||
| kills | Number | The amount of PvP kills this player has ||
| level | Number | Total combat level of the player  ||
| xp | Number | The total amount of combat XP earned by the player ||
| minPlayed | Number | The player of the player, in minutes ||
| tag | String | The player's tag | `HERO`, `VIP+`, or `VIP` |
| rank | String | The player's Wynncraft rank | `Administrator`, `Moderator`, `Builder`, `Item`, `Game Master`, `CMD`, `Music`, `Hybrid`, `Media`. **Default**: `Player` |
| displayTag | Boolean | Is the player's tag displayed ||
| veteran | String | Is the player a veteran ||
| guildTag | String | (Optional) The tag of the guild that this player is a member of |Not present if the player is not part of a guild|
| guild | String | (Optional) The name of the guild that this player is a member of |Not present if the player is not part of a guild|
| num | Number | The position of the player within the leaderboard ||

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
Returns a leaderboard of players (represented by an array of [player leaderboard objects](#player-leaderboard-object)) with a length of 100. Sorted by PvP kills. Timeframe can be `alltime` or `weekly`.

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