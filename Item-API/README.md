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

### Item Object
| Field    | Type   | Description         | Options/Details |
|----------|--------|---------------------|-----------------|
| name | String | Item Name ||
| displayName | String | (Optional) Display Name ||
| tier | String | Item Tier |`Normal`, `Unique`, `Rare`, `Set`, `Legendary`, `Mythic`, `unique`, `rare`, `legendary`|
| set | String or null | The name of the set this item is part of |`null` if not part of a set|
| sockets | Number | Number of powder slots this item has ||
| type | String | (Optional) This item's type |`Chestplate`, `Leggings`, `Wand`, `Dagger`, `Spear`, `Boots`, `Helmet`, `Bow`, `bow`, `wand`, `dagger`, `spear`, `boots`, `helmet`, `leggings`, or `chestplate`|
| armorType | String | (Optional) This piece of armor's type |`Diamond`, `Iron`, `Leather`, `Chain`, `Golden`, `diamond`, `golden`, `iron`, or `chain`|
| armorColor | String | (Optional) This piece of armor's color |Format: `"(red,green,blue)"`|
| addedLore | String or null | This item's lore |`null` if this item has no lore|
| material | String | (Optional) This item's material |Minecraft [block](https://minecraft.gamepedia.com/Java_Edition_data_values/Pre-flattening/Block_IDs)/[item](https://minecraft.gamepedia.com/Java_Edition_data_values/Pre-flattening/Item_IDs) ID + [optional data value](https://minecraft.gamepedia.com/Java_Edition_data_values/Pre-flattening), pre-flattening. Format: `"ID:DV"`|
| dropType | String | (Optional) This item's drop location/type | `never`, `lootchest`, or `dungeon` |
| restrictions | String | (Optional) Restrictions on this items use | `Untradeable`, `untradeable`, or `Quest Item` |
| damage | String | (Optional) Amount of neutral damage this weapon deals |Format: `"Minimum-Maximum"`|
| fireDamage | String | (Optional) Amount of fire damage this weapon deals |Format: `"Minimum-Maximum"`|
| waterDamage | String | (Optional) Amount of water damage this weapon deals |Format: `"Minimum-Maximum"`|
| airDamage | String | (Optional) Amount of air damage this weapon deals |Format: `"Minimum-Maximum"`|
| thunderDamage | String | (Optional) Amount of thunder damage this weapon deals |Format: `"Minimum-Maximum"`|
| earthDamage | String | (Optional) Amount of earth damage this weapon deals |Format: `"Minimum-Maximum"`|
| attackSpeed | String | (Optional) Attack speed of this weapon |`SUPER_SLOW`, `VERY_SLOW`, `SLOW`, `NORMAL`, `FAST`, `VERY_FAST`, or `SUPER_FAST`|
| health | Number | (Optional) Set amount of health this armor provides ||
| fireDefense | Number | (Optional) Set amount of fire defense this armor provides ||
| waterDefense | Number | (Optional) Set amount of water defense this armor provides ||
| airDefense | Number | (Optional) Set amount of air defense this armor provides ||
| thunderDefense | Number | (Optional) Set amount of thunder defense this armor provides ||
| earthDefense | Number | (Optional) Set amount of earth defense this armor provides ||
| level | Number | Minimum level required to use this item ||
| quest | String or null | The quest that must have been completed in order for this item to be used |`null` if no quest is required|
| classRequirement | String or null | The class that is required for this item to be used |`Assassin`, `Archer`, `Warrior`, `Mage`, or `null` if no class is required|
| strength | Number | The amount of strength points that is required for this item to be used ||
| dexterity | Number | The amount of dexterity points that is required for this item to be used ||
| intelligence | Number | The amount of intelligence points that is required for this item to be used ||
| agility | Number | The amount of agility points that is required for this item to be used ||
| defense | Number | The amount of defense points that is required for this item to be used ||
| healthRegen | Number | (Identification) Percentage health regeneration modifier ||
| manaRegen | Number | (Identification) Mana regeneration bonus per 4 seconds ||
| spellDamage | Number | (Identification) Percentage spell damage modifier ||
| damageBonus | Number | (Identification) Percentage melee damage modifier ||
| lifeSteal | Number | (Identification) Amount of life ||
| manaSteal | Number | (Identification) Amount of mana ||
| xpBonus | Number | (Identification) Percentage XP bonus ||
| lootBonus | Number | (Identification) Percentage loot bonus ||
| reflection | Number |  (Identification) Percentage reflection modifier ||
| strengthPoints | Number | (Identification) Strength points provided by this item ||
| dexterityPoints | Number | (Identification) Dexterity points provided by this item ||
| intelligencePoints | Number | (Identification) Intelligence points provided by this item ||
| agilityPoints | Number | (Identification) Agility points provided by this item ||
| defensePoints | Number | (Identification) Defense points provided by this item ||
| thorns | Number | (Identification) Percentage thorns modifier ||
| exploding | Number | (Identification) Percentage exploding modifier ||
| speed | Number | (Identification) Percentage walk speed modifier ||
| attackSpeedBonus | Number | (Identification) Tier modifier to attack speed ||
| poison | Number | (Identification) Percentage poison modifier ||
| healthBonus | Number | (Identification) Health modifier |Unlike `health`, this is a identification, rather than being set|
| soulPoints | Number | (Identification) Percentage chance to regenerate an additional soul point ||
| emeraldStealing | Number | (Identification) Percentage bonus chance to steal an emerald on hit ||
| healthRegenRaw | Number | (Identification) Bonus to health regeneration ||
| spellDamageRaw | Number | (Identification) Bonus to spell damage ||
| damageBonusRaw | Number | (Identification) Bonus to melee damage ||
| bonusFireDamage | Number | (Identification) Percentage bonus to fire damage ||
| bonusWaterDamage | Number | (Identification) Percentage bonus to water damage ||
| bonusAirDamage | Number | (Identification) Percentage bonus to air damage ||
| bonusThunderDamage | Number | (Identification) Percentage bonus to thunder damage ||
| bonusEarthDamage | Number | (Identification) Percentage bonus to earth damage ||
| bonusFireDefense | Number | (Identification) Percentage bonus to fire defense ||
| bonusWaterDefense | Number | (Identification) Percentage bonus to water defense ||
| bonusAirDefense | Number | (Identification) Percentage bonus to air defense ||
| bonusThunderDefense | Number | (Identification) Percentage bonus to thunder defense ||
| bonusEarthDefense | Number | (Identification) Percentage bonus to earth defense ||
| accessoryType | String | (Optional) This accessory's type |`Ring`, `Bracelet`, `Necklace`, `necklace`, `ring`|
| identified | Boolean | (Optional) If this item is pre-identified when obtained | Assume `false` if this field is missing |
| skin | String | Base-64 encoded Json object containing the skin of the skull used by this item | [See details below](#skin-object) |
| category | String | This item's category | `armor`, `weapon`, or `accessory` |

#### Identifications
All fields in the item object marked with '(Identification)' are identifications that are revealed when an item is identified. The values given by the API represent the 'base value' of that identification, when an item is actually identifed a random number is generated for each non-zero identification and is then multipled by that identification's base value. For identifications that have a positive base value, the random number can be between 0.3 and 1.3. For identifications that have a negative base value, the random number can be between 0.7 and 1.3. The result after multiplication is then rounded to the neared integer, with a maximum value of -1 for negative identifications and a minimum value of 1 for positive identifications.

{% sample lang="v1" %}
#### Response
```js 
{
    "items": ["name": String,
            "displayName": String,
            "tier": String,
            "set": String || null,
            "sockets": Number,
            "type": String,
            "armorType": String,
            "armorColor": String,
            "addedLore": String || null,
            "material": String,
            "dropType": String,
            "restrictions": String,
            "damage": String,
            "fireDamage": String,
            "waterDamage": String,
            "airDamage": String,
            "thunderDamage": String,
            "earthDamage": String,
            "attackSpeed": String,
            "health": Number,
            "fireDefense": Number,
            "waterDefense": Number,
            "airDefense": Number,
            "thunderDefense": Number,
            "earthDefense": Number,
            "level": Number,
            "quest": String || null,
            "classRequirement": String || null,
            "strength": Number,
            "dexterity": Number,
            "intelligence": Number,
            "agility": Number,
            "defense": Number,
            "healthRegen": Number,
            "manaRegen": Number,
            "spellDamage": Number,
            "damageBonus": Number,
            "lifeSteal": Number,
            "manaSteal": Number,
            "xpBonus": Number,
            "lootBonus": Number,
            "reflection": Number,
            "strengthPoints": Number,
            "dexterityPoints": Number,
            "intelligencePoints": Number,
            "agilityPoints": Number,
            "defensePoints": Number,
            "thorns": Number,
            "exploding": Number,
            "speed": Number,
            "attackSpeedBonus": Number,
            "poison": Number,
            "healthBonus": Number,
            "soulPoints": Number,
            "emeraldStealing": Number,
            "healthRegenRaw": Number,
            "spellDamageRaw": Number,
            "damageBonusRaw": Number,
            "bonusFireDamage": Number,
            "bonusWaterDamage": Number,
            "bonusAirDamage": Number,
            "bonusThunderDamage": Number,
            "bonusEarthDamage": Number,
            "bonusFireDefense": Number,
            "bonusWaterDefense": Number,
            "bonusAirDefense": Number,
            "bonusThunderDefense": Number,
            "bonusEarthDefense": Number,
            "accessoryType": String,
            "identified": Boolean,
            "skin": String,
            "category": String
        }],
    "request": {
        "timestamp": Number,
        "version": Number
    }
}
```
{% endmethod %}
{% method %}
#### Skin Object
The skin field given in the [item object](#item-object) is a base-64 representation of a Json object; once decoded it follows the format of a response from Mojang's API. See the details [here](https://wiki.vg/Mojang_API#UUID_-.3E_Profile_.2B_Skin.2FCape). Note that some decoded object's will be missing the `timestamp`, `profileId`, and `profileName` fields, so you should not rely on these fields being present.

{% sample lang="v1" %}
```js
{
	"timestamp": 1409195281585,
	"profileId": "5da801c1790c47378c8b396236d9a796",
	"profileName": "Chumbledore",
	"isPublic": true,
	"textures": {
		"SKIN": {
			"url": "http://textures.minecraft.net/texture/695bbf9f175b1e76a61b4cd0ba183b18c9467017f41ed1046abf65a4a63c4a0"
		}
	}
}
```
{% endmethod %}