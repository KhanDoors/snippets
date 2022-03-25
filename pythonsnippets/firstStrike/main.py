# py -m venv venv
# use cmd prompt -- not Powershell or git bash
# venv\Scripts\activate
# deactivate
# pip freeze
# pip freeze > requirements.txt

# list[], set{}, dict, tuple, str, int, float, bool, None
# data = {1, "b", 10.4, "c"}
# print(data)

import requests
import pandas as pd

# https://www.youtube.com/watch?v=-oPuGc05Lxs
# https://www.youtube.com/watch?v=2mSwcRb3KjQ
# https://www.youtube.com/channel/UCtA2USp3OCEL_QRXsLwF5fw/videos
# https://www.youtube.com/watch?v=T6OLDHAWjjA&list=PLIhvC56v63ILPDA2DQBv0IKzqsWTZxCkp&index=3
# https://www.youtube.com/watch?v=t8pPdKYpowI 2:30
# https://www.youtube.com/watch?v=LzYNWme1W6Q
# https://www.youtube.com/watch?v=Al1xwYhQ-BM


baseUrl = "https://rickandmortyapi.com/api"
endpoint = "/character/"


def main_request(baseUrl, endpoint, x):
    r = requests.get(baseUrl + endpoint + "?page=" + str(x))
    return r.json()


def get_pages(response):
    return response["info"]["pages"]


def parse_json(response):

    charlist = []

    for item in response["results"]:
        char = {"id": item["id"], "name": item["name"],
                "no_ep": len(item["episode"])}
        charlist.append(char)

    return charlist


mainlist = []

data = main_request(baseUrl, endpoint, 1)
for x in range(1, get_pages(data) + 1):
    print(x)
    mainlist.extend(parse_json(main_request(baseUrl, endpoint, x)))

df = pd.DataFrame(mainlist)

df.to_csv("characters.csv", index=False)
