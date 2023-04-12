import os
import requests
from pyairtable import Table
import pprint

api_key = os.environ["AIRTABLE_API_KEY"]
base_id = "appJY4Y9khAzca4Ja"
table_id = "tblz9H1VFraMkkhnc"

# Replace your_table and your_api_key with appropriate values
table = Table(api_key, base_id, table_id)

# Fetch the first 10 records
for records in table.iterate(page_size=10, max_records=10):
    # Iterate through each record
    for record in records:
        # Extract the fields from the record
        fields = record.get('fields', {})

        # Get the 'Title', 'Streamer', and 'Thumbnail: url' fields
        title = fields.get('Title')
        streamer = fields.get('Streamer')
        thumbnail_url = None
        thumbnail = fields.get('Thumbnail')
        if thumbnail:
            thumbnail_data = thumbnail[0]
            thumbnails = thumbnail_data.get('thumbnails', {})
            large_thumbnail = thumbnails.get('large')
            if large_thumbnail:
                thumbnail_url = large_thumbnail.get('url')

        # Print the extracted values
        print("Title:", title)
        print("Streamer:", streamer)
        print("Thumbnail URL:", thumbnail_url)
        print("\n")
