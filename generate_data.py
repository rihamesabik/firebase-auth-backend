import json
from datetime import datetime, timedelta
import random

data = []
start_time = datetime(2025, 5, 23, 10, 0)

for i in range(100):
    card_id = random.randint(1, 10)  # par exemple 10 cartes différentes
    is_correct = random.choice([True, False])
    timestamp = (start_time + timedelta(minutes=5*i)).isoformat() + 'Z'
    data.append({
        "cardId": card_id,
        "isCorrect": is_correct,
        "timestamp": timestamp
    })

with open('review_data.json', 'w') as f:
    json.dump(data, f, indent=2)
