import requests
import json
from flask import jsonify
from utils import Utils

utils = Utils()

API_URL = "https://api.openweathermap.org/data/2.5/"
API_KEY = "a8b3076d14ffcf7303882663a4d59cb0"


def get_forcast_by_city(city_name):
    requests.get(f"{API_URL}forecast?q={city_name}&appid={API_KEY}")


cities_to_check = ["tel aviv", "berlin", "budapest"]


class Weather:

    def lowest_temp(self):
        # retrieve cities data
        tel_aviv_response = get_forcast_by_city("tel aviv")
        budapest_response = get_forcast_by_city("budapest")
        berlin_response = get_forcast_by_city("berlin")

        lowest_temp_city = utils.calculate_lowest_temp_city(cities_to_check)

        return lowest_temp_city
