from flask import Flask, request, jsonify, send_file
from tensorflow.keras.models import load_model
import numpy as np
import matplotlib.pyplot as plt

app = Flask(__name__)

model = load_model("saved_model.keras")

last_graph = "prediction.png"

@app.route("/predict", methods=["POST"])
def predict():

    global last_graph

    data = request.json

    prices = np.array(data["prices"])

    x = prices[-50:]
    x = x.reshape((1,50,1))

    prediction = model.predict(x)

    predicted_price = float(prediction[0][0])

    plt.figure(figsize=(10,5))

    plt.plot(prices, label="Histórico")
    plt.axhline(predicted_price, label="Previsão")

    plt.legend()

    plt.savefig(last_graph)

    plt.close()   # ADICIONE ESTA LINHA

    return jsonify({
        "predicted_price": predicted_price
    })

@app.route("/graph")
def graph():
    return send_file(last_graph,mimetype='image/png')

if __name__ == "__main__":
    app.run(port=5000)