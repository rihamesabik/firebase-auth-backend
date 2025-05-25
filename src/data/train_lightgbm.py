import json
import pandas as pd
import lightgbm as lgb
from datetime import datetime

# 1. Charger les données JSON
with open('review_data.json', 'r') as f:
    data = json.load(f)

# 2. Convertir en DataFrame
df = pd.DataFrame(data)

# 3. Feature engineering simple
# Convertir timestamp en feature numérique (ex: timestamp en secondes depuis epoch)
df['timestamp'] = pd.to_datetime(df['timestamp'])
df['timestamp_unix'] = df['timestamp'].astype(int) // 10**9

# Features (ex: cardId et timestamp_unix)
X = df[['cardId', 'timestamp_unix']]

# Label (isCorrect -> 1 ou 0)
y = df['isCorrect'].astype(int)

# 4. Créer Dataset LightGBM
dataset = lgb.Dataset(X, label=y)

# 5. Définir paramètres d'entraînement
params = {
    'objective': 'binary',
    'metric': 'binary_logloss',
    'verbose': -1
}

# 6. Entraîner le modèle
model = lgb.train(params, dataset, num_boost_round=50)

# 7. Sauvegarder le modèle
model.save_model('model.txt')

print("Modèle entraîné et sauvegardé !")
