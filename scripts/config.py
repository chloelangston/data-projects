from datetime import datetime, timedelta

# API Settings
DATASET_ID = "pitq-e56w"
API_ENDPOINT = f"https://data.sfgov.org/resource/{DATASET_ID}.json"
ELECTION_DATE = "2026-06-02T00:00:00.000" # DataSF uses ISO timestamps

# Set "lookback" to 365 days ago
one_year_ago = (datetime.now() - timedelta(days=365)).strftime('%Y-%m-%dT00:00:00')
START_DATE_ONE_YEAR_AGO = one_year_ago

# "Billionaire" threshold
MIN_AMOUNT = 1000000 

# CSV_FILENAME = "sf_power_tracking.csv"
CSV_FILENAME = "sf_district_8_donations.csv"

# Updated Watchlist based on the error's column format
WATCHLIST = [
    "UBER", "LARSEN", "MORITZ", "FISHER", "CONWAY", 
    "TOGETHERSF", "NEIGHBORS FOR A BETTER SAN FRANCISCO"
]

D8_CANDIDATES = ["Yekutiel", "Gary Mc Coy", "Michael Nguyen", "Rafael Mandelman"]