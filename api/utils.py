
class Utils:

    def calculate_lowest_temp_city(self, cities_data):
        print("calculate_lowest_temp_city")
        print(cities_data[0]["list"][0]["main"]["temp"])
        coldest_city = {}
        coldest_city_main = {}
        temp_min = 9999
        for city_data in cities_data:
            cod = city_data["cod"]
            city = city_data["city"]
            list = city_data["list"]

            for sample in list:
                sample_temp = sample["main"]["temp"]
                print(sample_temp)
                if temp_min > sample_temp:
                    temp_min = sample_temp
                    coldest_city = city
                    coldest_city_main = sample["main"]

        print("temp_min")
        print(temp_min)
        print("coldest_city")
        print(coldest_city)
        print("coldest_city_main")
        print(coldest_city_main)
        return coldest_city_main
