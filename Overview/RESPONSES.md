# Response codes

The HTTP response code returned by the API should be used to determine what to do with the response body. Most response will contain some basic information, such as response message, however this should not be assumed to always be the case.

## 200 Response
A 200 response code indicates the request was processed successfully; on a 200 code, it can be assumed that the response body is as documented on the relevant page.

## 4XX Responses
A 4xx response indicates there was an request provided and therefore the API could not process it, common examples are:

### 400 (Bad Request)
Indicates that a parameter given by the client was in an incorrect format, or that the requested resource does exist. This client should not immediately request this resource again without changes.

**Common reasons:**
* The requested resource doesn't exists (e.g. The requested username hasn't logged onto Wynncraft when getting player stats; the requested ingredient doesn't exist)
* A provided argument wasn't in the correct format (for example when searching by level in recipe api, provided a letter instead of a number)
* When using more advanced search route, an invalid symbol or prop is provided

### 404 (Not Found)
The requested API route doesn't exist. The client shouldn't request this resource again without changes.

**Common reasons:**
* The request URL was misspelt or otherwise incorrect

### 429 (Too Many Requests)
The rate limit for this API was exceeded by the client's IP. The client should delay further requests to this API until the rate limit has expired. **IPs that repeatedly exceed the rate limit could be blacklisted.**

## 5XX Responses
A 5xx response indicates an error processing the request by the server.

### 500 (Internal Server Error)
This error indicates an unexpected error prevent the server from processing the request. If the error continues occurring for the same request it should be reported on the [issue tracker](https://github.com/Wynncraft/WynncraftAPI/issues); or if you believe the error is exploitable, or directly to Colin (Colin#0670 on discord, colin350 on the forums) if the issue is exploitable/poses a risk to the stability of the API.

### 503 (Service Unavailable)
The server is currently unable to process requests with no specified reason. This status is generally temporary. The client should delay requests exponentially until they make a successful request.