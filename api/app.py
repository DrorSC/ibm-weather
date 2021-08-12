import flask
from flask import request
from utils import Utils
from api import Weather
from flask_cors import CORS

utils = Utils()
weather_api = Weather()

app = flask.Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return "<h1>Hi :)</h1>"


@app.route('/lowest-temp-city', methods=['GET'])
def get_lowest_temp():
    # Get cities string from http request parameters
    cities_string = request.args.get('cities')
    if not cities_string:
        return "Error! Request must have cities parameters (?cities=tel aviv,berlin,budapest)"
    # Convers cities string to a list
    try:
        cities_array = utils.create_city_list(cities_string)
    except:
        return "Error in create_city_list"
    # Return the lowest temp value
    try:
        return weather_api.lowest_temp(cities_array)
    except Exception as e:
        return f"Error in weather_api.lowest_temp: {e}"

if __name__ == "__main__":
    app.run()
