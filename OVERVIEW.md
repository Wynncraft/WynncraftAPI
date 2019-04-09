# Wynncraft Public API Reference

Woohoo!!!! You found the Official Wynncraft Public API Documentation! You are the artist and we are the canvas/paints you will use to make creative / useful things for the Wynncraft community!

### Goal
The main goal for this reference is to get you started using the Wynncraft Public API service, and providing the tools which you will need. This guide covers everything from making requests, to understanding responses, to example usage, and much more. 

As of now, we only support GET requests to information/routes that are made public by us. The most commonly used APIs are the Player, Item, and Leaderboard APIs. 

### Reference Accessibility
You will notice in the top right two buttons: "Version 2" and "Legacy". These signify the difference between Version 2 requests and Legacy requests. 

You will also notice that the layouts are now split. On the left side will show the common information shared between both API versions, and the right side will show the differing information between the two.

{% method %}
### Rate Limit
We use IP based rate-limiting for each of our resources. It is different for Legacy and Version 2. 
{% sample lang="v2" %}
Our rate-limit is dependent on each resource. View the Rate-Limit section of each resource documentation will give you further information.

{% sample lang="v1" %}
Our rate-limit is 1200 requests per 20 minutes per IP. If significant usage of our API results in signficant performance defecit, the rate-limit may be lowered. 

We do not support higher rate-limits.

{% endmethod %}

### API & Documentation Bug Reports
Help us squash API & documentation related bugs by reporting them on our [bug report tracker](http://wynncraft.com/report-bug). 
