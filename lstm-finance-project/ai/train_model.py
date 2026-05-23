import numpy as np
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout

X = np.random.rand(1000,50,1)
y = np.random.rand(1000)

model = Sequential()

model.add(
    LSTM(
        50,
        return_sequences=False,
        input_shape=(50,1)
    )
)

model.add(Dropout(0.2))

model.add(Dense(1))

model.compile(
    optimizer="adam",
    loss="mean_squared_error"
)

model.fit(
    X,
    y,
    epochs=10,
    batch_size=32
)

model.save("saved_model.keras")

print("Modelo treinado com sucesso")