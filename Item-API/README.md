# Wynncraft Item Resource

## Database
-----

### Category Searching
{% method %}
```sh
GET https://api.wynncraft.com/public_api.php?action=itemDB&category={category}
```
Returns a list of Wynncraft items matching the search category. Categories include: all, helmet, chestplate, leggings, boots, ring, necklace, bracelet, dagger, spear, bow, and wand.

### Name Searching
```sh
GET https://api.wynncraft.com/public_api.php?action=itemDB&search={name}
```
Returns a list of Wynncraft items matching the search name. The name is case insensitive and can be partial.

{% sample lang="v1" %}
#### Response
```js 
{
    "items": ["name": String,
            "tier": String,
            "set": String || null,
            "sockets": Number,
            "type": String,
            "armorType": String,
            "armorColor": String,
            "addedLore": String || null,
            "dropType": String,
            "health": Number,
            "fireDefense": 0,
            "waterDefense": 0,
            "airDefense": 0,
            "thunderDefense": 0,
            "earthDefense": 0,
            "level": 6,
            "quest": null,
            "classRequirement": null,
            "strength": 0,
            "dexterity": 0,
            "intelligence": 0,
            "agility": 0,
            "defense": 0,
            "healthRegen": 0,
            "manaRegen": 0,
            "spellDamage": 6,
            "damageBonus": 0,
            "lifeSteal": 0,
            "manaSteal": 0,
            "xpBonus": 0,
            "lootBonus": 5,
            "reflection": 0,
            "strengthPoints": 0,
            "dexterityPoints": 0,
            "intelligencePoints": 0,
            "agilityPoints": 0,
            "defensePoints": 0,
            "thorns": 0,
            "exploding": 0,
            "speed": 0,
            "attackSpeedBonus": 0,
            "poison": 0,
            "healthBonus": 0,
            "soulPoints": 0,
            "emeraldStealing": 0,
            "healthRegenRaw": 0,
            "spellDamageRaw": 0,
            "damageBonusRaw": 0,
            "bonusFireDamage": 0,
            "bonusWaterDamage": 0,
            "bonusAirDamage": 0,
            "bonusThunderDamage": 0,
            "bonusEarthDamage": 0,
            "bonusFireDefense": 0,
            "bonusWaterDefense": 0,
            "bonusAirDefense": 0,
            "bonusThunderDefense": 0,
            "bonusEarthDefense": 0,
            "category": "armor"
        }],
    "request": {
        "timestamp": Number,
        "version": Number
    }
}
```
{% endmethod %}