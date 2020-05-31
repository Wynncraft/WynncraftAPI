import requests

#make the request
r = requests.get('https://api-legacy.wynncraft.com/public_api.php?action=territoryList')
#get the data
json = r.json()
#Print the data
print(json['territories']['Detlas'])