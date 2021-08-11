import flask
from flask import request
from utils import Utils
from api import Weather

utils = Utils()
weather_api = Weather()

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return "<h1>Home</h1>"

@app.route('/lowest-temp-city', methods=['GET'])
def get_lowest_temp():
    # Get cities string from http request parameters
    cities_string = request.args.get('cities')
    # Convers cities string to a list
    cities_array = utils.create_city_list(cities_string)
    # Return the lowest temp value
    return weather_api.lowest_temp(cities_array)

app.run()
