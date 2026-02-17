import requests
from scripts.config import API_ENDPOINT, ELECTION_DATE, MIN_AMOUNT, START_DATE_ONE_YEAR_AGO, D8_CANDIDATES

def fetch_major_contributions():
    print("fetching major contributors...")
    # Using the exact column names found in your error message
    # params = {
    #     "$where": f"calculated_amount >= {MIN_AMOUNT} AND transaction_date >= '{START_DATE_ONE_YEAR_AGO}'",
    #     "$select": "filer_name, transaction_first_name, transaction_last_name, calculated_amount, transaction_date, support_oppose_code",
    #     "$order": "calculated_amount DESC",
    #     "$limit": 20
    # }

    params = {
        # We must explicitly list every column we want the API to return
        "$where": f"calculated_amount >= {MIN_AMOUNT} AND transaction_date >= '{START_DATE_ONE_YEAR_AGO}'",
        "$select": "filer_name, transaction_first_name, transaction_last_name, calculated_amount, transaction_date",
        "$order": "transaction_date DESC",
    }
    
    try:
        response = requests.get(API_ENDPOINT, params=params, timeout=10)
        print(response.json())
        if response.status_code == 200:
            return response.json()
        else:
            print(f"❌ Server Error {response.status_code}: {response.text}")
            return []
    except Exception as e:
        print(f"Connection failed: {e}")
        return []


def fetch_d8_contributions():
    # Builds a query to find "District 8", "D8", or any candidate name
    name_filters = " OR ".join([f"filer_name LIKE '%{name}%'" for name in D8_CANDIDATES])
    d8_where = f"(filer_name LIKE '%District 8%' OR filer_name LIKE '%D8%' OR {name_filters})"
    
    params = {
        "$where": f"calculated_amount >= {MIN_AMOUNT} AND transaction_date >= '{START_DATE_ONE_YEAR_AGO}' AND {d8_where}",
        "$select": "filer_name, transaction_first_name, transaction_last_name, calculated_amount, transaction_date",
        "$order": "transaction_date DESC",
        "$limit": 5000
    }
    
    try:
        response = requests.get(API_ENDPOINT, params=params, timeout=10)
        return response.json() if response.status_code == 200 else []
    except Exception as e:
        print(f"Connection failed: {e}")
        return []

def fetch_large_donations():
    print("fetching large donations > $1M...")
    params = {
        "$where": f"calculated_amount >= {MIN_AMOUNT} AND transaction_date >= '{START_DATE_ONE_YEAR_AGO}'",
        "$select": "filer_name, transaction_first_name, transaction_last_name, calculated_amount, transaction_date",
        "$order": "calculated_amount DESC",
        "$limit": 5000
    }
    
    try:
        response = requests.get(API_ENDPOINT, params=params, timeout=10)
        return response.json() if response.status_code == 200 else []
    except Exception as e:
        print(f"Connection failed: {e}")
        return []

def fetch_all_donations():
    print("fetching all donations (last 365 days)...")
    params = {
        "$where": f"calculated_amount > 0 AND transaction_date >= '{START_DATE_ONE_YEAR_AGO}'",
        "$select": "filer_name, transaction_first_name, transaction_last_name, calculated_amount, transaction_date, entity_code, transaction_description, memo_code",
        "$order": "transaction_date DESC",
        "$limit": 50000 
    }
    
    try:
        response = requests.get(API_ENDPOINT, params=params, timeout=20)
        if response.status_code == 200:
            return response.json()
        else:
            print(f"❌ Error {response.status_code}: {response.text}")
            return []
    except Exception as e:
        print(f"Connection failed: {e}")
        return []