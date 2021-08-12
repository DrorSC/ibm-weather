import requests
import json
from flask import jsonify
from utils import Utils

utils = Utils()

API_URL = "https://api.openweathermap.org/data/2.5/"
API_KEY = "a8b3076d14ffcf7303882663a4d59cb0"

def get_forcast_by_city(city_name):
    return requests.get(f"{API_URL}forecast?q={city_name}&appid={API_KEY}")

class Weather:

    def lowest_temp(self, cities_array):
        print(cities_array)

        cities_data_to_compare = []
        
        # retrieve cities data and put data inside array
        for city in cities_array:
            result = get_forcast_by_city(city)
            if result.status_code == 200:
                data = json.loads(result.text)
                if data["cod"] == "200":
                    cities_data_to_compare.append(data)
            else:
                print("bad")
        
        if not cities_data_to_compare:
            raise ValueError("No cities found")

        lowest_temp_city = utils.calculate_lowest_temp_city(cities_data_to_compare)

        return lowest_temp_city
