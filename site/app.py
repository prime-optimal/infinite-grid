'''
For whatever reason, this file must be run from the terminal i.e. python app.py

When I run it from VSCode, I get weird 404 errors because it can't find a few files.  

'''

from flask import Flask, render_template, send_from_directory
from pyairtable import Table
import os
import requests
import pprint

api_key = os.environ["AIRTABLE_API_KEY"]
base_id = "appJY4Y9khAzca4Ja"
table_id = "tblz9H1VFraMkkhnc"

table = Table(api_key, base_id, table_id)

app = Flask(__name__)

@app.route('/')
def home():
    clips = []

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

            # Add the extracted values to the clips list
            clips.append({"title": title, "streamer": streamer, "thumbnail_url": thumbnail_url})
            print(thumbnail_url)
    return render_template("index.html", clips=clips)

@app.route('/content/<path:subpath>')
def serve_content(subpath):
    return send_from_directory(os.path.join(os.getcwd(), 'static', 'content'), subpath)

@app.route('/media/thumbnails/<path:subpath>')
def serve_thumbnails(subpath):
    return send_from_directory(os.path.join(os.getcwd(), 'media', 'thumbnails'), subpath)

@app.route('/media/audio/<path:subpath>')
def serve_audio(subpath):
    return send_from_directory(os.path.join(os.getcwd(), 'media', 'audio'), subpath)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))
