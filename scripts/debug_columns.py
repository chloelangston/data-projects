import requests
from scripts.config import API_ENDPOINT

columns_to_test = [
    "filer_name", 
    "transaction_first_name", 
    "transaction_last_name", 
    "circle_amount", 
    "calculated_amount", 
    "transaction_date", 
    "entity_cd", 
    "memo_text", 
    "memo_code"
]

print(f"Testing columns on {API_ENDPOINT}")

for col in columns_to_test:
    params = {
        "$select": col,
        "$limit": 1
    }
    try:
        response = requests.get(API_ENDPOINT, params=params, timeout=5)
        if response.status_code == 200:
            print(f"✅ {col}: OK")
        else:
            print(f"❌ {col}: Failed ({response.status_code}) - {response.text}")
    except Exception as e:
        print(f"❌ {col}: Exception {e}")
