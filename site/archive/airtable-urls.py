from pyairtable import Table
from config import api_key, base_id, table_id



airtable = Table(api_key, base_id, table_id)
# records = airtable.iterate(max_records=5, fields=["Server URL", "Duration", "Title"])

import os

# Fetch records with the desired fields
record_batches = airtable.iterate(max_records=50, fields=["Server URL", "Duration", "Title", "Streamer"])

# Create or overwrite the M3U playlist file
with open("playlist.m3u", "w") as playlist:
    # Write the M3U header
    playlist.write("#EXTM3U\n")
    
    # Iterate through each batch of records
    for batch in record_batches:
        # Iterate through each record in the batch
        for record in batch:
            # Get the URL, duration, and title from the record
            url = record["fields"]["Server URL"]
            duration = record["fields"]["Duration"]
            title = record["fields"]["Title"]
            streamer = record["fields"]["Streamer"]
            print(title)
            # Write the EXTINF line and the URL to the playlist
            playlist.write(f"#EXTINF:{duration},{title},{streamer}\n")
            playlist.write(f"{url}\n")
