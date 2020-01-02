# Wynncraft Recipe Resource

## Rate-Limit
The Rate Limit for the Recipe Resource is 600 requests per 30 minutes per IP. 

## Get
------
{% method %}
```sh
GET /recipe/get/{name}
```
Returns a [Recipe Object](#recipe-object), which details public statistical information about the recipe.

{% sample lang="v2" %}
#### Response
```js
{
    "kind": "wynncraft/recipe/get",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [Recipe Object]
    // ...
}
```
{% endmethod %}

{% method %}
#### Recipe Object
| Field    | Type   | Description         | Options |
|----------|--------|---------------------|---------|
| level | Object | Minimum / Maximum ||
| type | String | Recipe Type ||
| skill | String | Skills that use this recipe ||
| materials | Object Array | Materials required for this recipe ||
| healthOrDamage | Object | Minimum / Maximum ||
| durability | Object | Minimum / Maximum ||
| id | String | Recipe ID/Name |List Below|

{% sample lang="v2" %}
```js
{
    //...
    "data": [{
        "level": {
            "minimum":3,
            "maximum":5
        },
        "type": "BOOTS",
        "skill": "TAILORING", 
        "materials": [{
                "item": "Refined Copper Ingot", 
                "amount": 1
            }, {
                "item": "Refined Wheat String",
                "amount": 2
        }],
        "healthOrDamage": {
            "minimum": 14,
            "maximum": 20
        },
        "durability": {
            "minimum": 104, 
            "maximum": 108
        },
        "id": "Boots-3-5"
    }]
}
```
{% endmethod %}

## List
------
{% method %}
```sh
GET /recipe/list
```
Returns a list of all recipe ids.

It is recommended to call this route once, and cache the results upon each recipe update.

{% sample lang="v2" %}
#### Response
```js
{
    "kind": "wynncraft/recipe/list",
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
GET /recipe/search/{query}/{args}
```
This is the base route for searching for recipes. Each query has its own structure of how to search.
Please read carefully.

{% sample lang="v2" %}
#### Response
```js
{
    "kind": "wynncraft/recipe/search",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [Recipe Object]
    // ...
}
```
{% endmethod %}

### Search Queries
| Query Name | Query Complexity |
|:----------:|:----------------:|
| type | <span style="color:green">Simple</span>  |
| skill | <span style="color:green">Simple</span>  |
| level | <span style="color:red">Complex</span>  |
| durability | <span style="color:red">Complex</span>  | 
| healthOrDamage | <span style="color:red">Complex</span>   | 
| duration | <span style="color:red">Complex</span>   |
| basicDuration | <span style="color:red">Complex</span> |

- **Note**: Sadly, there are no material searches at this time.

### Simple Queries
Simple queries perform simple pattern matching and display results. There is no conditionality.

-----

#### Type Query
{% method %}
```sh
GET /recipe/search/type/{type}
```
Will return a list of [Recipe Object](#recipe-object) whose name includes the pattern `type`.

<br>
**Complexity**: <span style="color:green">Simple</span>
<br>
**Requirements**: None

{% sample lang="v2" %}
```js
{
    "kind": "wynncraft/recipe/search/type/Boots",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [{
        "id": "Boots-1-3",
        //...
    }, {
        "id": "Boots-1-5",
        // ...
    }, ...]
}
```
{% endmethod %}

#### Skill Query
{% method %}
```sh
GET /recipe/search/skill/{skill}
```
Will return a list of [Recipe Object](#recipe-object) whose skill is `skill`.

<br>
**Complexity**: <span style="color:green">Simple</span>
<br>
**Requirements**:
- Must be a *full* skill name, not a partial one.

{% sample lang="v2" %}
```js
{
    "kind": "wynncraft/recipe/search/skill/Tailoring",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [{
        "id": "Boots-1-3",
        //...
    }, {
        "id": "Pants-1-3",
        // ...
    }, ...]
}
```
{% endmethod %}

### Complex Queries
Complex queries combine conditionality and Object field searches.

-----
### Symbols
Moderate and complex queries use the notion of "symbols" for expression. Each symbol has its own meaning,
and it manipulates the list succeeding it accordingly. At this time, there is no ability to combine symbols
that behave similarly to `&&` and `||` in many popular programming languages.

| Symbol | Meaning |
|:------:|:--------|
| &      | Requires inclusion of all items in succeeding list. Acts like `and` in programming. |
| ^      | Requires inclusion of at least one item in succeeding list. Acts like `or` in programming. |

### Triangular Bracket Notation
Complex queries use `<>` notation to do advanced searches that include specifying Object fields.

#### Level Query
{% method %}
```sh
GET /recipe/search/level/{symbol}{props}
```
Will return a list of [Recipe Object](#recipe-object). This query searches for recipes
whose properties (or `props`) of the level field are the specified value.

<br>
**Complexity**: <span style="color:red">Complex</span>
<br>
**Requirements**:
- `symbol` must be valid and supported symbol.
- `props` must either be one or a list of the properties described below:

| Property | Notation |
|:--------:|:---------|
| minimum  | `minimum<Number>` or `min<Number>`|
| maximum  | `maximum<Number>` or `max<Number>`|

{% sample lang="v2" %}
```js
{
    "kind": "wynncraft/recipe/search/level/&min<5>",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [{
        "id": "Bow-5-7",
        //...
    }, {
        "id": "Bracelet-5-7",
        // ...
    }, ...]
}
```
{% endmethod %}

#### Durability Query
{% method %}
```sh
GET /recipe/search/durability/{symbol}{props}
```
Will return a list of [Recipe Object](#recipe-object). This query searches for recipes
whose properties (or `props`) of the durability field are the specified value.

<br>
**Complexity**: <span style="color:red">Complex</span>
<br>
**Requirements**:
- `symbol` must be valid and supported symbol.
- `props` must either be one or a list of the properties described below:

| Property | Notation |
|:--------:|:---------|
| minimum  | `minimum<Number>` or `min<Number>`|
| maximum  | `maximum<Number>` or `max<Number>`|

{% sample lang="v2" %}
```js
{
    "kind": "wynncraft/recipe/search/durability/&min<100>",
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [{
        "id": "Boots-1-3",
        //...
    }, {
        "id": "Bow-1-3",
        // ...
    }, ...]
}
```
{% endmethod %}

### HealthOrDamage, Duration, BasicDuration
These follow the same format as Level and Durability Searches.