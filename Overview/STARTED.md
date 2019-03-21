# Getting Started

As of right now, the Wynncraft API only provides a service to you, via the use of a GET request. Responses are available in JSON.

## Schema
The base url for the API is `https://api.wynncraft.com/`. All data is received via JSON.

{% method %}
## Versioning
We expose different versions of the API, though, some versions may be unavailable at the time you are reading this. 

| Version        | Status                                     |
|:---------------|:------------------------------------------:|
| 2              | <span style="color:green">Available</span> |
| 1 (*legacy*)   | <span style="color:green">Available</span> |

{% sample lang="v2" %}
#### V2 Request URI
To access version 2 of the api, the base url will be: 

```bash
GET https://api.wynncraft.com/v2/
```

Unless otherwise specified, unknown requests will return a status 404 error:
```js
{
    "status": 404
}
```

See [Errors](errors/README.md) for more information on response and error codes.

{% sample lang="v1" %}
#### Legacy Request URI
To access version 1 of the api (legacy), the base url will be: 

```bash
GET https://api.wynncraft.com/public_api.php?
```

Unless otherwise specified, unknown requests will return a status 404 error:
```js
{
    "status": 404
}
```

See [Errors](errors/README.md) for more information on response and error codes.

{% endmethod %}
{% method %}
## Response Semantics
Each response will have a generic field or set of fields pertaining to the request.

See [Errors](errors/README.md) for more information on error codes and messages.

{% sample lang="v2" %}
#### V2 Response Semantics
```js
{
    "kind": String,
    "code": Number,
    "message": String,
    "timestamp": Number,
    "version": String,
    "data": [Object]
    // ...
}
```
| Name      | Type          | Description                    |
|:----------|:--------------|:-------------------------------|
| kind      | String        | wynncraft/resource/type        |
| code      | Number        | See [Errors](errors/README.md) |
| message   | String        | See [Errors](errors/README.md) |
| timestamp | Number        | Time request was made          |
| version   | String        | Current Version (Semver)       |
| data      | Object Array  | Response data                  |

{% sample lang="v1" %}
#### Legacy Response Semantics
```js
{
    // ...
    "request": {
        "timestamp": Number,
        "version": Number
    }
}
```
| Name      | Type          | Description                |
|:----------|:--------------|:---------------------------|
| timestamp | Number        | Time request was made      |
| version   | Number        | Current Version (Optional) |
{% endmethod %}