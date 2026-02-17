#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")/.." || exit

# Run the python script
# Ensure python3 is in the path or specify the absolute path to your python executable
if command -v python3 &> /dev/null; then
    python3 -m scripts.main --all
else
    python -m scripts.main --all
fi

# Copy CSVs to web public folder
mkdir -p web/public/data
cp aggregated_large_donations.csv web/public/data/
cp latest_filings.csv web/public/data/
cp transit_tax_filings.csv web/public/data/

echo "✅ CSVs copied to web/public/data/"
