# API Keys

Every user of the API is heavily encouraged to get API key(s) for their application(s). Each separate application needs its own key, please don't interchange keys between applications. 

API Keys are not required to use the API. The base rate limit is 180 req / min per IP. Overtime our plan is to lower the non-key rate limit but you won't be required to use a key as long as you are within the rate limit.

## Applying for an API Key

Fill the application out (found below), send a private message to `@colin350` on the [forums](https://forums.wynncraft.com/). You might be asked additional questions.

```
Application Name:
Author(s) Name(s) (Minecraft in-game name):
Website link(s) to your application (e.g. GitHub, Forums, etc.):
Contact Information (i.e. what is the fastest/easiest way we can get in contact with you? Please do not list phone numbers, please list at least 2 different ways to get in contact):
Description of the Application:
How you are currently using / planning to use our API service:
Do you request the API in frontend code or from a backend server?
Do you cache parts of the API, if so, what?
How big is your audience (i.e how many players use your application)?
What are you doing with player's data? (e.g. why do you request it, what computations are done on it, how is it stored, what is stored, etc.)
```

## Using your API Key

- Set the HTTP header `apikey` to your key
- Append a parameter at the end of an API URL: https://api.wynncraft.com/public_api.php?action=onlinePlayers&apikey={key}