import sys
import os

# Add parent directory to path to allow importing from 'scripts' package
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import csv
from scripts.data_fetcher import fetch_d8_contributions, fetch_large_donations, fetch_all_donations
from scripts.config import CSV_FILENAME

def run_aggregation_analysis():
    print("--- ➕ AGGREGATING DONATIONS ---")
    data = fetch_all_donations()
    
    if not data:
        print("No donations found.")
        return

    # Dictionary to store aggregated amounts: {(Contributor, Recipient): [TotalAmount, Count]}
    aggregated_data = {}

    print(f"Processing {len(data)} records...")

    for entry in data:
        amount = float(entry.get('calculated_amount', 0))
        
        # Merge Contributor Names
        first = entry.get('transaction_first_name', '')
        last = entry.get('transaction_last_name', 'ORGANIZATION')
        contributor = f"{first} {last}".strip().upper()
        
        # Recipient
        recipient = entry.get('filer_name', 'Unknown Committee')
        
        key = (contributor, recipient)
        
        if key in aggregated_data:
            aggregated_data[key][0] += amount
            aggregated_data[key][1] += 1
        else:
            aggregated_data[key] = [amount, 1]

    # Convert to list for sorting and saving
    # Sorting by Total Amount DESC, Filtering for >= $1M
    sorted_rows = sorted([
        [contributor, data[0], data[1], recipient] 
        for (contributor, recipient), data in aggregated_data.items()
        if data[0] >= 1000000
    ], key=lambda x: x[1], reverse=True)

    # Headers
    headers = ["Contributor", "Total Amount", "Number of Donations", "Recipient"]

    # Save to CSV
    filename = "aggregated_large_donations.csv"
    try:
        with open(filename, mode='w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow(headers)
            writer.writerows(sorted_rows)
        print(f"✅ SUCCESS: {len(sorted_rows)} aggregated records saved to {filename}")
    except Exception as e:
        print(f"❌ Error saving CSV: {e}")

def run_large_donations_analysis():
    print("--- 💰 TRACKING DONATIONS > $1M ---")
    data = fetch_large_donations()
    
    if not data:
        print("No large donations found.")
        return

    # Headers: Contributor, Amount, Recipient, Date
    headers = ["Contributor", "Amount", "Recipient", "Date"]
    rows = []

    for entry in data:
        raw_date = entry.get('transaction_date', '0000-00-00')
        clean_date = raw_date.split('T')[0]
        
        amount = float(entry.get('calculated_amount', 0))
        
        # Merge Contributor Names
        first = entry.get('transaction_first_name', '')
        last = entry.get('transaction_last_name', 'ORGANIZATION')
        contributor = f"{first} {last}".strip().upper()
        
        # Recipient
        recipient = entry.get('filer_name', 'Unknown Committee')

        rows.append([contributor, amount, recipient, clean_date])

    # Save to CSV
    filename = "large_donations.csv"
    try:
        with open(filename, mode='w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow(headers)
            writer.writerows(rows)
        print(f"✅ SUCCESS: {len(rows)} rows saved to {filename}")
    except Exception as e:
        print(f"❌ Error saving CSV: {e}")

def run_analysis():
    print("--- 🔍 TRACKING DISTRICT 8 MONEY ---")
    data = fetch_d8_contributions()
    
    if not data:
        print("No District 8 records found.")
        return

    # UPDATED HEADERS: Now includes the Filer Name (Recipient)
    headers = ["Date", "Amount", "Contributor", "Recipient Committee"]
    rows = []

    for entry in data:
        raw_date = entry.get('transaction_date', '0000-00-00')
        clean_date = raw_date.split('T')[0]
        
        amount = float(entry.get('calculated_amount', 0))
        
        # Merge Contributor Names
        first = entry.get('transaction_first_name', '')
        last = entry.get('transaction_last_name', 'ORGANIZATION')
        contributor = f"{first} {last}".strip().upper()
        
        # Explicitly get the Recipient Name
        recipient = entry.get('filer_name', 'Unknown Committee')

        rows.append([clean_date, amount, contributor, recipient])

    # Save to CSV
    try:
        with open(CSV_FILENAME, mode='w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow(headers)
            writer.writerows(rows)
        print(f"✅ SUCCESS: {len(rows)} rows saved to {CSV_FILENAME}")
    except Exception as e:
        print(f"❌ Error saving CSV: {e}")

def run_latest_filings_update():
    print("--- 🆕 UPDATING LATEST FILINGS ---")
    data = fetch_all_donations()
    
    if not data:
        print("No data found.")
        return

    # Headers: Date, Contributor, Amount, Recipient, Description
    headers = ["Date", "Contributor", "Amount", "Recipient", "Description"]
    rows = []

    for entry in data:
        raw_date = entry.get('transaction_date', '0000-00-00')
        clean_date = raw_date.split('T')[0]
        
        amount = float(entry.get('calculated_amount', 0))
        
        # Merge Contributor Names
        first = entry.get('transaction_first_name', '')
        last = entry.get('transaction_last_name', 'ORGANIZATION')
        contributor = f"{first} {last}".strip().upper()
        
        recipient = entry.get('filer_name', 'Unknown Committee')
        description = entry.get('transaction_description', '')

        rows.append([clean_date, contributor, amount, recipient, description])

    # Save to CSV
    filename = "latest_filings.csv"
    try:
        with open(filename, mode='w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow(headers)
            writer.writerows(rows)
        print(f"✅ SUCCESS: {len(rows)} records saved to {filename}")
    except Exception as e:
        print(f"❌ Error saving CSV: {e}")

def run_transit_tax_update():
    print("--- 🚆 TRACKING TRANSIT TAX FILINGS ---")
    data = fetch_all_donations()
    
    if not data:
        print("No data found.")
        return

    headers = ["Date", "Contributor", "Amount", "Recipient", "Description"]
    rows = []
    
    keywords = ['TRANSIT', 'PARCEL', 'MUNI', 'BART']

    for entry in data:
        # 1. Filter out Individuals
        # If entity_cd is IND or if there is a first name, skip it.
        entity_type = entry.get('entity_code', '')
        first_name = entry.get('transaction_first_name', '')
        
        if entity_type == 'IND' or first_name:
            continue

        # 2. Keyword Search
        memo = entry.get('transaction_description', '').upper()
        filer = entry.get('filer_name', '').upper()
        
        # Check if any keyword matches
        if any(keyword in memo for keyword in keywords) or any(keyword in filer for keyword in keywords):
            
            raw_date = entry.get('transaction_date', '0000-00-00')
            clean_date = raw_date.split('T')[0]
            amount = float(entry.get('calculated_amount', 0))
            last = entry.get('transaction_last_name', 'ORGANIZATION')
            contributor = last.strip().upper() # No first name since we filtered them out
            recipient = entry.get('filer_name', 'Unknown Committee')
            
            rows.append([clean_date, contributor, amount, recipient, entry.get('transaction_description', '')])

    # Save to CSV
    filename = "transit_tax_filings.csv"
    try:
        with open(filename, mode='w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow(headers)
            writer.writerows(rows)
        print(f"✅ SUCCESS: {len(rows)} transit tax records saved to {filename}")
    except Exception as e:
        print(f"❌ Error saving CSV: {e}")

def run_daily_updates():
    print("🚀 STARTING DAILY UPDATES...")
    run_aggregation_analysis()
    run_latest_filings_update()
    run_transit_tax_update()
    print("🏁 DAILY UPDATES COMPLETE")

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1 and sys.argv[1] == "--all":
        run_daily_updates()
    else:
        # Default behavior or manual run availability
        # You can uncomment these to test individually
        # run_aggregation_analysis()
        # run_latest_filings_update()
        # run_transit_tax_update()
        run_daily_updates() # Defaults to running all for now as requested