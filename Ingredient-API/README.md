# Wynncraft Ingredient Resource

## Rate-Limit
The Rate Limit for the Ingredient Resource is 600 requests per 30 minutes per IP. 

## Get
------
{% method %}
```sh
GET /ingredient/get/{name}
```
Returns a [Ingredient Object](#ingredient-object), which details public statistical information about the ingredient.

**Note**: You may receive a 502 error if the ingredient name you use includes a space. Until fixed,
you can replace spaces with an underscore `_` to fix this.

{% sample lang="v2" %}
#### Response
```js
{
    "kind": "wynncraft/ingredient/get",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [Ingredient Object]
    // ...
}
```
{% endmethod %}

{% method %}
#### Ingredient Object
| Field    | Type   | Description         | Options |
|----------|--------|---------------------|---------|
| name | String | Ingredient Name ||
| displayName | String | (Optional) Display name ||
| tier | Number | Ingredient Tier |0, 1, 2, 3|
| level | Number | Ingredient Level ||
| skills | Array  | Skills associated with ingredient ||
| sprite | Object | Ingredient sprite id and damage ||
| identifications | Object | Ingredient Identifications minimum and maximum |List Below|
| itemOnlyIDs | Object | Durability modifier and elemental requirements ||
| consumable<br>OnlyIDs | Object | Durations and charges ||
| ingredient<br>PositionModifiers | Object | Position modifier information |||

#### Valid Identifications
The following are all current identifications: `AIRDEFENSE`, `EARTHDEFENSE`, `FIREDEFENSE`, `THUNDERDEFENSE`, `WATERDEFENSE`, `DAMAGEBONUS`, `DAMAGEBONUSRAW`, `AIRDAMAGEBONUS`, `EARTHDAMAGEBONUS`, `FIREDAMAGEBONUS`, `THUNDERDAMAGEBONUS`, `WATERDAMAGEBONUS`, `AGILITYPOINTS`, `DEFENSEPOINTS`, `DEXTERITYPOINTS`, `INTELLIGENCEPOINTS`, `STRENGTHPOINTS`, `POISON`, `MANASTEAL`, `MANAREGEN`, `SPEED`, `HEALTHBONUS`, `SPELLDAMAGE`, `SPELLDAMAGERAW`, `ATTACKSPEED`, `LIFESTEAL`, `HEALTHREGEN`, `HEALTHREGENRAW`, `REFLECTION`, `THORNS`, `EXPLODING`, `LOOTBONUS`, `XPBONUS`, `EMERALDSTEALING`, and `SOULPOINTS`.

{% sample lang="v2" %}
```js
{
    //...
    "data": [{
        "name":"Gold",
        "displayName":"Platinum Ingot",
        "tier":0,
        "level":82,
        "skills":["ARMOURING","WEAPONSMITHING"],
        "sprite":{
            "id":265,
            "damage":0
        },
        "identifications":{
            "LOOTBONUS":{
                "minimum":3,
                "maximum":5
            },
            "SPEED":{
                "minimum":-4,
                "maximum":-2
            }
        },
        "itemOnlyIDs":{
            "durabilityModifier":-26,
            "strengthRequirement":0,
            "dexterityRequirement":0,
            "intelligenceRequirement":0,
            "defenceRequirement":0,
            "agilityRequirement":0
        },
        "consumableOnlyIDs":{
            "duration":0,
            "charges":0
        },
        "ingredientPositionModifiers":{
            "left":0,
            "right":0,
            "above":0,
            "under":0,
            "touching":0,
            "notTouching":0
        }
    }]
}
```
{% endmethod %}

## List
------
{% method %}
```sh
GET /ingredient/list
```
Returns a list of all ingredient names.

It is recommended to call this route once, and cache the results upon each ingredient update.

{% sample lang="v2" %}
#### Response
```js
{
    "kind": "wynncraft/ingredient/list",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [String]
    // ...
}
```
{% endmethod %}

## Search
-----
{% method %}
```sh
GET /ingredient/search/{query}/{args}
```
This is the base route for searching for ingredients. Each query has its own structure of how to search.
Please read carefully.

{% sample lang="v2" %}
#### Response
```js
{
    "kind": "wynncraft/ingredient/search",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [Ingredient Object]
    // ...
}
```
{% endmethod %}

### Search Queries
| Query Name | Query Complexity |
|:----------:|:----------------:|
| name | <span style="color:green">Simple</span>  |
| tier | <span style="color:green">Simple</span>  |
| level | <span style="color:green">Simple</span>  |
| skills | <span style="color:orange">Moderate</span> | 
| sprite | <span style="color:red">Complex</span>  | 
| identifications | <span style="color:red">Complex</span>  |
| itemOnlyIDs | <span style="color:red">Complex</span>  |
| consumableOnlyIDs | <span style="color:red">Complex</span> |

### Simple Queries
Simple queries perform simple pattern matching and display results. There is no conditionality.

-----

#### Name Query
{% method %}
```sh
GET /ingredient/search/name/{name}
```
Will return a list of [Ingredient Object](#ingredient-object) whose name includes the pattern `name`.

<br>
**Complexity**: <span style="color:green">Simple</span>
<br>
**Requirements**: None

{% sample lang="v2" %}
```js
{
    "kind": "wynncraft/ingredient/search/name/An",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [{
        "name": "Ancient Coins",
        //...
    }, {
        "name": "Anomaly",
        // ...
    }, ...]
}
```
{% endmethod %}

#### Tier Query
{% method %}
```sh
GET /ingredient/search/tier/{tier}
```
Will return a list of [Ingredient Object](#ingredient-object) whose tier is `tier`.

<br>
**Complexity**: <span style="color:green">Simple</span>
<br>
**Requirements**:
- Must be a Number between `0-3`.

{% sample lang="v2" %}
```js
{
    "kind": "wynncraft/ingredient/search/tier/0",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [{
        "name": "Acid Magma",
        //...
    }, {
        "name": "Ancient Metal",
        // ...
    }, ...]
}
```
{% endmethod %}

#### Level Query
{% method %}
```sh
GET /ingredient/search/level/{level}
```
Will return a list of [Ingredient Object](#ingredient-object) whose level is `level`.

<br>
**Complexity**: <span style="color:green">Simple</span>
<br>
**Requirements**:
- Must be a positive Integer.

{% sample lang="v2" %}
```js
{
    "kind": "wynncraft/ingredient/search/level/1",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [{
        "name": "Brown Mushroom",
        //...
    }, {
        "name": "Coastal Sand",
        // ...
    }, ...]
}
```
{% endmethod %}

### Moderate Queries
Moderate queries introduce conditionality for more advanced searches.

-----
### Symbols
Moderate and complex queries use the notion of "symbols" for expression. Each symbol has its own meaning,
and it manipulates the list succeeding it accordingly. At this time, there is no ability to combine symbols
that behave similarly to `&&` and `||` in many popular programming languages.

| Symbol | Meaning |
|:------:|:--------|
| &      | Requires inclusion of all items in succeeding list. Acts like `and` in programming. |
| ^      | Requires inclusion of at least one item in succeeding list. Acts like `or` in programming. |


#### Skills Query
{% method %}
```sh
GET /ingredient/search/skills/{symbol}{skill(s)}
```
Will return a list of [Ingredient Object](#ingredient-object).

<br>
**Complexity**: <span style="color:orange">Moderate</span>
<br>
**Requirements**:
- `symbol` must be valid and supported symbol.
- `skill(s)` must be either a single valid skill, or a list of valid skills separated by `,`. 
- Skills are case insensitive

{% sample lang="v2" %}
```js
{
    "kind": "wynncraft/ingredient/search/skills/&tailoring,armouring",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [{
        "name": "Accursed Effigy",
        //...
    }, {
        "name": "Ancient Metal",
        // ...
    }, ...]
}
```
{% endmethod %}

### Complex Queries
Complex queries combine conditionality and Object field searches.

-----
### Triangular Bracket Notation
Complex queries use `<>` notation to do advanced searches that include specifying Object fields.


#### Sprite Query
{% method %}
```sh
GET /ingredient/search/sprite/{symbol}{props}
```
Will return a list of [Ingredient Object](#ingredient-object). This query searches for ingredients
whose properties (or `props`) of the sprite field are the specified value.

<br>
**Complexity**: <span style="color:red">Complex</span>
<br>
**Requirements**:
- `symbol` must be valid and supported symbol.
- `props` must either be one or a list of the properties described below:

| Property | Notation |
|:--------:|:---------|
| id       | `id<Number>` |
| damage   | `damage<Number>` |

{% sample lang="v2" %}
```js
{
    "kind": "wynncraft/ingredient/search/sprite/&damage<0>,id<449>",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [{
        "name": "Accursed Effigy",
        //...
        "sprite": {
            "id": 449,
            "damage": 0
        }
    }, {
        "name": "Lost Talisman",
        // ...
        "sprite": {
            "id": 449,
            "damage": 0
        }
    }, ...]
}
```
{% endmethod %}

#### Identifications Query
{% method %}
```sh
GET /ingredient/search/identifications/{symbol}{props}
```
Will return a list of [Ingredient Object](#ingredient-object). This query searches for ingredients
whose properties (or `props`) of the identifications field are the specified value.

<br>
**Complexity**: <span style="color:red">Complex</span>
<br>
**Requirements**:
- `symbol` must be valid and supported symbol.
- `props` must either be one or a list of the following property notation:

```sh
{identificationName}<{minimumVal};{maximumVal}>
```
- `identificationName` is case insensitive and must be a valid identification name. Whitespace is not ignored.
- `minimumVal` must either be a Number or empty. If a Number, the `minimum` for such identification must
have that value. If empty, the `minimum` for such identification can be anything.
- `maximumVal` must either be a Number or empty. If a Number, the `maximum` for such identification must have that value. If empty, the `maximum` for such identification can be anything.

{% sample lang="v2" %}
```js
{
    "kind": "wynncraft/ingredient/search/identifications/&lootbonus<;>,xpbonus<;6>",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [{
        "name": "Ancient Coins",
        //...
        "identifications":{
            "SPEED":{
                "minimum":-8,
                "maximum":-7
            },
            "LOOTBONUS":{
                "minimum":4,
                "maximum":6
            },
            "XPBONUS":{
                "minimum":4,
                "maximum":6
            }
        }
    }, ...]
}
```
{% endmethod %}

#### ItemOnlyIDs Query
{% method %}
```sh
GET /ingredient/search/itemOnlyIDs/{symbol}{props}
```
Will return a list of [Ingredient Object](#ingredient-object). This query searches for ingredients
whose properties (or `props`) of the identifications field are the specified value.

<br>
**Complexity**: <span style="color:red">Complex</span>
<br>
**Requirements**:
- `symbol` must be valid and supported symbol.
- `props` must either be one or a list of the properties described below:

| Property | Notation |
|:--------:|:---------|
| durability | `durability<Number>` |
| strength   | `strength<Number>` |
| dexterity  | `dexterity<Number>` |
| intelligence  | `intelligence<Number>` |
| defence  | `defence<Number>` |
| agility  | `agility<Number>` |


{% sample lang="v2" %}
```js
{
    "kind": "wynncraft/ingredient/search/itemOnlyIDs/^durability<-280>,strength<20>",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [{
        "name": "Broken Helmet",
        //...
        "itemOnlyIDs":{
            "durabilityModifier":-28,
            "strengthRequirement":20,
            "dexterityRequirement":0,
            "intelligenceRequirement":0,
            "defenceRequirement":0,
            "agilityRequirement":0
        }
    }, ...]
}
```
{% endmethod %}

#### ConsumableOnlyIDs Query
{% method %}
```sh
GET /ingredient/search/consumableOnlyIDs/{symbol}{props}
```
Will return a list of [Ingredient Object](#ingredient-object). This query searches for ingredients
whose properties (or `props`) of the identifications field are the specified value.

<br>
**Complexity**: <span style="color:red">Complex</span>
<br>
**Requirements**:
- `symbol` must be valid and supported symbol.
- `props` must either be one or a list of the properties described below:

| Property | Notation |
|:--------:|:---------|
| duration | `duration<Number>` |
| charges | `charges<Number>` |


{% sample lang="v2" %}
```js
{
    "kind": "wynncraft/ingredient/search/consumableOnlyIDs/&duration<0>",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [{
        "name": "Broken Helmet",
        //...
        "consumableOnlyIDs":{
            "duration":0,
            "charges":0
        }
    }, ...]
}
```
{% endmethod %}