# Wynncraft Player Resource

## Rate-Limit
The Rate Limit for the Player Resource is 750 requests per 30 minutes per IP.

## Statistics
------
{% method %}
```sh
GET /player/{username or UUID}/stats
```
Returns a [Player Object](#player-object), which details public statistical information about the player.

**Note:** Requests by UUID must be in dashed form (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)

{% sample lang="v2" %}
#### Response
```js
{
    "kind": "wynncraft/player/stats",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [Player Object]
    // ...
}
```
{% endmethod %}

{% method %}
#### Player Object
| Field    | Type   | Description         | Options |
|----------|--------|---------------------|---------|
| username | String | Minecraft Username  ||
| uuid     | String | Minecraft UUID      ||
| rank     | String | Wynncraft Rank      | Administrator, Moderator, Builder, Item, Game Master, CMD, Music, Hybrid, Media. **Default**: Player |
| [meta](#meta-object) | Object | General Information ||
| [classes](#classes-object) | Array of Objects | Holds all Classes ||
| guild | Object | General Guild Information | Returns an object containing name and rank |
| [global](#global-object) | Object | Cumulative Class Information ||
| [ranking](#ranking-object) | Object | Ranking Information |&nbsp;|

#### Meta Object
| Field     | Type   | Description         | Options |
|-----------|--------|---------------------|---------|
| firstJoin | Date   | Date of First Join  ||
| lastJoin  | Date   | Date of Last Join   ||
| [location](#location-object)  | Object | General Location Information ||
| playtime | Number | Player's total playtime in minutes ||
| [tag](#tag-object) | Object | General Tag Information ||
| veteran | Boolean | Is the player a veteran |&nbsp;|


#### Location Object
| Field     | Type           | Description                 | Options |
|-----------|----------------|---------------------------- |---------|
| online    | Boolean        | Is the player online or not | True if online |
| server    | String or `null` | If online, on what server   | If offline, value will be `null` |

#### Tag Object
**Note**: The descriptor "tag" means, if enabled, that a player has purchased a donation rank.

| Field     | Type           | Description                 | Options |
|-----------|----------------|---------------------------- |---------|
| display   | Boolean        | Is the tag displayed        ||
| value     | String         | The player's tag            | CHAMPION, HERO, VIP+, VIP |

#### Global Object
| Field     | Type   | Description         | Options |
|-----------|--------|---------------------|---------|
| chestsFound | Number | Total Chest Found ||
| blocksWalked | Number | Total Blocks Walked ||
| itemsIdentified | Number | Total Items Identified ||
| mobsKilled | Number | Total mobs killed ||
| totalLevel | Object | Total Level Values | Returns an object containing combat, profession, and overall level totals |
| pvp | Object | Global PvP Information | Returns an object containing kills and deaths |
| logins | Number | Number of Logins ||
| deaths | Number | Number of Deaths ||
| discoveries | Number | Total Number of Discoveries ||
| eventsWon | Number | Total Number of Swarms Won |&nbsp;|

#### Ranking Object
| Field     | Type   | Description         | Options |
|-----------|--------|---------------------|---------|
| guild     | null   | Waiting on v2 Guild Leaderboard ||
| player    | Object | Player Rankings     | Contains a "solo" object which lists solo rankings and an "overall" object which lists overall rankings |
| pvp | null | Waiting on v2 PvP Leaderboard |


{% sample lang="v2" %}
```js
// Player Object
{
    "username": String,
    "uuid": String,
    "rank": String,
    "meta": {
        "firstJoin": Date,
        "lastJoin": Date,
        "location": {
            "online": Boolean,
            "server": String || null
        },
        "playtime": Number,
        "tag": {
            "display": Boolean,
            "value": String
        },
        "veteran": Boolean
    },
    "classes": [Object],
    "guild": {
        "name": String,
        "rank": String
    },
    "global": {
        "chestsFound": Number,
        "blocksWalked": Number,
        "itemsIdentified": Number,
        "mobsKilled": Number,
        "totalLevel": {
            "combat": Number,
            "profession": Number,
            "combined": Number
        },
        "pvp": {
            "kills": Number,
            "deaths": Number
        },
        "logins": Number,
        "deaths": Number,
        "discoveries": Number,
        "eventsWon": Number
    },
    "ranking": {
        "guild": null,
        "player": {
            "solo": {  
                "combat": Number || null,
                "woodcutting": Number || null,
                "mining": Number || null,
                "fishing": Number || null,
                "farming": Number || null,
                "alchemism": Number || null,
                "armouring": Number || null,
                "cooking": Number || null,
                "jeweling": Number || null,
                "scribing": Number || null,
                "tailoring": Number || null,
                "weaponsmithing": Number || null,
                "woodworking": Number || null,
                "profession": Number || null,
                "overall": Number || null
            },
            "overall":{  
                "all": Number || null,
                "combat": Number || null,
                "profession": Number || null
            }
        },
        "pvp": null
    }
}
```

{% endmethod %}
{% method %}
#### Class Object

| Field     | Type           | Description | Options |
|-----------|----------------|-------------|---------|
| name      | String         | Class Name ||
| level     | Number         | Total Class Level ||
| [dungeons](#dungeons-object) | Object | Class-Specific Dungeon Information ||
| [quests](#quests-object) | Object | Class-Specific Quest Information ||
| itemsIdentified | Number | Items Identified on Class ||
| mobsKilled      | Number | Mobs killed on Class ||
| [pvp](#pvp-object) | Object | Class PvP Information ||
| chestsFound | Number | Chests Found on Class ||
| blocksWalked | Number | Blocks Walked on Class ||
| logins | Number | Number of Logins on Class ||
| deaths | Number | Number of Deaths on Class ||
| playtime | Number | Minutes played on Class ||
| [game1ode](#gamemode-object) | Object | The challenge gamemodes that are enabled on this class ||
| [skills](#skills-object) | Object | Class Skills Information ||
| professions | Object | Class Professions Information | The object has a field for each profession, (including combat). Each profession field is an object with the level and xp information |
| discoveries | Number | Discoveries discovered on Class ||
| eventsWon   | Number | Swarms beaten ||
| preEconomy-Update | Boolean | Class was created before  1.18 |&nbsp;|
| raids | Object | Information about completed raids | Object has a field for all completed raid count called **completed** and has a **list** array which includes objects of each individual raids.

#### Dungeons Object
| Field     | Type           | Description                 | Options |
|-----------|----------------|---------------------------- |---------|
| completed | Number         | Total Number of Dungeons Completed ||
| list      | Array of Objects | How many of which dungeon completed | Includes dungeon name and number completed |

#### Quests Object
| Field     | Type           | Description                 | Options |
|-----------|----------------|---------------------------- |---------|
| completed | Number         | Total Number of Quests Completed ||
| list      | Array of String | Quests Completed |&nbsp;|

#### PvP Object
| Field     | Type           | Description                 | Options |
|-----------|----------------|---------------------------- |---------|
| kills | Number         | Number of PvP Kills on Class||
| deaths | Number         | Number of PvP Deaths on Class |&nbsp;|

#### Gamemode Object
| Field     | Type           | Description                 | Notes |
|-----------|----------------|---------------------------- |---------|
| craftsman | Boolean | Does this class have the craftsman challenge enabled ||
| hardcore | Boolean | Does this class have the hardcode challenge enabled | True when turned on at creation regardless of if the challenge is failed or not |
| ironman | Boolean | Does this class have the ironman challenge enabled |||

#### Skills Object
| Field     | Type           | Description                 | Options |
|-----------|----------------|---------------------------- |---------|
| strength | Number         | Number of Strength Skill Points on Class ||
| dexterity | Number         | Number of Dexterity Skill Points on Class ||
| intelligence | Number         | Number of Intelligence Skill Points on Class ||
| defense | Number         | Number of Defense Skill Points on Class ||
| agility | Number         | Number of Agility Skill Points on Class |&nbsp;|

{% sample lang="v2" %}
```js
// Class Object
{
    "name": String,
    "level": Number,
    "dungeons": {
        "completed": Number,
        "list": [
            {
                "name": String,
                "completed": Number
            },
            // ...
        ]
    },
    "quests": {
        "completed": Number,
        "list": [String]
    },
    "itemsIdentified": Number,
    "mobsKilled": Number,
    "pvp": {
        "kills": Number,
        "deaths": Number
    },
    "chestsFound": Number,
    "blocksWalked": Number,
    "logins": Number,
    "deaths": Number,
    "playtimes": Number,
    "gamemode": {
        "craftsman": Boolean,
        "hardcore": Boolean,
        "ironman": Boolean
    },
    "skills": {
        "strength": Number,
        "dexterity": Number,
        "intelligence": Number,
        "defense": Number,
        "agility": Number
    },
    "professions": {
        "alchemism":{  
            "level": Number,
            "xp": Number
        },
        "armouring":{  
            "level": Number,
            "xp": Number
        },
        "combat":{  
            "level": Number,
            "xp": Number
        },
        "cooking":{  
            "level": Number,
            "xp": Number
        },
        "farming":{  
            "level": Number,
            "xp": Number
        },
        "fishing":{  
            "level": Number,
            "xp": Number
        },
        "jeweling":{  
            "level": Number,
            "xp": Number
        },
        "mining":{  
            "level": Number,
            "xp": Number
        },
        "scribing":{  
            "level": Number,
            "xp": Number
        },
        "tailoring":{  
            "level": Number,
            "xp": Number
        },
        "weaponsmithing":{  
            "level": Number,
            "xp": Number
        },
        "woodcutting":{  
            "level": Number,
            "xp": Number
        },
        "woodworking":{  
            "level": Number,
            "xp": Number
        }
    },
    "discoveries": Number,
    "eventsWon": Number,
    "preEconomyUpdate": Number
    "raids": {
        "completed": Number,
        "list": [Object]
    }
}
```

{% endmethod %}

## UUID
------
{% method %}
```sh
GET /player/{username}/uuid
```
Returns the uuid for a given username (this should not be used in place of the mojang api, and your IP will be blocked if you do so).

| Field | Type | Description | Options |
|-------|------|-------------|---------|
| name  | String | Username of Player ||
| uuid  | String | Uuid of Player ||
{% sample lang="v2" %}
#### Response
```js
{
    "kind": "wynncraft/player/stats",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [{
        "name": String,
        "uuid": String
    }]
    // ...
}
```
{% endmethod %}