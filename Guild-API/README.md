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

### Guild Object
| Field    | Type   | Description         | Options |
|----------|--------|---------------------|---------|
| name | String | Name of the guild ||
| prefix | String | The guild's prefix or tag ||
| [members](#guild-member-object) | Array of Objects | List of members of this guild ||
| xp | Number | Percentage of guild XP required to get the next guild level ||
| level | Number | Guild level ||
| created | Date | Date that this guild was created | Date in ISO-8601 format with milliseconds |
| createdFriendly | String | Date that the guild was created in a more human readable format |Example: `Jan 1st 2017`|
| territories | Number | The amount of territories that the guild currently owns ||
| [banner](#guild-banner-object) | Object | (Optional) The banner of the guild |||

### Guild Member Object
| Field    | Type   | Description         | Options |
|----------|--------|---------------------|---------|
| name | String | Minecraft username of the guild member ||
| uuid | String | The Minecraft UUID of the player ||
| rank | String | Rank of this member within the guild |`RECRUIT`, `RECRUITER`, `CAPTAIN`, `STRATEGIST`,`CHIEF`, or `OWNER`|
| contributed | Number | Amount of XP contributed to the guild ||
| joined | Date | Date that this member joined the guild | Date in ISO-8601 format with milliseconds |
| joinedFriendly | String | Date that the member joined the guild in a more human readable format |Example: `Jan 1st 2017`|

### Guild Banner Object
| Field    | Type   | Description         | Options |
|----------|--------|---------------------|---------|
| base | String | Base color of the banner |`WHITE`, `ORANGE`, `MAGENTA`, `LIGHT_BLUE`, `YELLOW`, `LIME`, `PINK`, `GRAY`, `LIGHT_GRAY`, `CYAN`, `PURPLE`, `BLUE`, `BROWN`, `GREEN`, `RED`, `BLACK`|
| tier | Number | Tier of the banner's base ||
| [layers](#guild-banner-layer-object) | Array of Objects | List of layers on this banner |Layers are applied in order from the first value in the array to the last value of the array|

### Guild Banner Layer Object
| Field    | Type   | Description         | Options |
|----------|--------|---------------------|---------|
| colour | String | The color of this layer |`WHITE`, `ORANGE`, `MAGENTA`, `LIGHT_BLUE`, `YELLOW`, `LIME`, `PINK`, `GRAY`, `LIGHT_GRAY`, `CYAN`, `PURPLE`, `BLUE`, `BROWN`, `GREEN`, `RED`, `BLACK`|
| pattern | String | The pattern used by this layer |List Below|
List of patterns: `CIRCLE_MIDDLE`, `SQUARE_BOTTOM_LEFT`, `SQUARE_BOTTOM_RIGHT`, `SQUARE_TOP_LEFT`, `SQUARE_TOP_RIGHT`, `HALF_HORIZONTAL`, `STRIPE_BOTTOM`, `STRIPE_TOP`, `HALF_VERTICAL`, `STRIPE_LEFT`, `STRIPE_CENTER`, `STRIPE_RIGHT`, `STRIPE_MIDDLE`, `STRAIGHT_CROSS`, `STRIPE_DOWNLEFT`, `STRIPE_DOWNRIGHT`, `CROSS`, `DIAGONAL_LEFT`, `DIAGONAL_UP_RIGHT`, `TRIANGLE_TOP`, `TRIANGLE_BOTTOM`, `RHOMBUS_MIDDLE`, `TRIANGLES_TOP`, `TRIANGLES_BOTTOM`, `CURLY_BORDER`, `BORDER`, `STRIPE_SMALL`, `BRICKS`, `GRADIENT`, `CREEPER`, `SKULL`, `FLOWER`, `MOJANG`, `DIAGONAL_LEFT_MIRROR`, `DIAGONAL_RIGHT`, `GRADIENT_UP`, `HALF_HORIZONTAL_MIRROR`, or `HALF_VERTICAL_MIRROR`


{% sample lang="v1" %}
#### Response
```js 
{
    "name": String,
    "prefix": String,
    "members": [
        {
            "name": String,
            "uuid": String,
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
    "banner": {
        "base": String,
        "tier": Number,
        "layers": [{
            "colour": String,
            "pattern": String
        },
        // ...
        ]
    },
    "request": {
        "timestamp": Number,
        "version": Number
    }
}
```
{% endmethod %}