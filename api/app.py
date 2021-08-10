import flask

from api import Weather

app = flask.Flask(__name__)
app.config["DEBUG"] = True

weather_api = Weather()

@app.route('/', methods=['GET'])
def home():
    return "<h1>Home</h1>"

@app.route('/lowest-temp-city', methods=['GET'])
def get_lowest_temp():
    return weather_api.lowest_temp()

app.run()
