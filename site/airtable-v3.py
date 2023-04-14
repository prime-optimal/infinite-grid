import os
from pyairtable import Table
from config import api_key, base_id, table_id
from datetime import datetime


table = Table(api_key, base_id, table_id)

# Fetch records from Airtable
def fetch_records(table_id, view_name, fields=None):
    # records has to be declared as a list first, otherwise record.get doesn't work
    records = []
    for page in table.iterate(view=view_name, fields=fields, max_records=100):
        records.extend(page)
    return records

# Print records from Airtable
def print_records(record):
    # Extract the fields from the record
    fields = record.get('fields', {})

    # Get the 'Title', 'Streamer', and 'Thumbnail: url' fields
    title = fields.get('Title')
    streamer = fields.get('Streamer')
    server_url = fields.get('Server URL')
    thumbnail_url = None
    thumbnail = fields.get('Thumbnail')
    if thumbnail:
        thumbnail_data = thumbnail[0]
        thumbnails = thumbnail_data.get('thumbnails', {})
        large_thumbnail = thumbnails.get('large')
        if large_thumbnail:
            thumbnail_url = large_thumbnail.get('url')
    duration = fields.get('Duration')
    views = fields.get('Views')
    date = fields.get('Clipped')

    # Convert long UTC to readable format: YYYY-MM-DD
    date_obj = datetime.fromisoformat(date.rstrip("Z"))
    formatted_date = date_obj.strftime("%Y-%m-%d")

    # Print the extracted values
    print("Title:", title)
    print("Streamer:", streamer)
    print("Date:", formatted_date)
    print("Views: ", views)
    print("Duration: ", duration, " seconds")
    print("Server URL:", server_url)
    print("Thumbnail URL:", thumbnail_url)
    print("\n")

# Write records to a text file
def write_records_to_file(record, file):
    fields = record.get('fields', {})

    title = fields.get('Title')
    streamer = fields.get('Streamer')
    clip_url = fields.get('Clip URL')

    file.write(f"Title: {title}\n")
    file.write(f"Streamer: {streamer}\n")
    file.write(f"Clip URL: {clip_url}\n")
    file.write("\n")


# Write the M3U playlist
def write_m3u_playlist(records, playlist):
    with open(playlist, "w") as file:
        file.write("#EXTM3U\n")
        for record in records:
            streamer = record["fields"]["Streamer"]
            title = record["fields"]["Title"]
            url = record["fields"]["Server URL"]
            duration = record["fields"]["Duration"]
            file.write(f"#EXTINF:{duration},{streamer},{title}\n")
            file.write(f"{url}\n")


def main():
    view_name = "kimberly"
    fields = ["Server URL", "Title", "Streamer", "Clipped",
             "Thumbnail", "Duration", "Clip URL", "Views"]
    playlist = "output/playlist.m3u"
    filename = "output/output.txt"

    # Fetch records from Airtable
    records = fetch_records(table_id, view_name, fields)

    # Iterate through each record
    for record in records:
        print_records(record)

    # Write the M3U playlist
    write_m3u_playlist(records, playlist)

    # Write the text file
    with open(filename, 'w') as file:
        for record in records:
            write_records_to_file(record, file)



if __name__ == "__main__":
    main()
