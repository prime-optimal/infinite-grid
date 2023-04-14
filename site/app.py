'''
For whatever reason, this file must be run from the terminal i.e. python app.py

When I run it from VSCode, I get weird 404 errors because it can't find a few files.  

'''
from config import api_key, base_id, table_id
from pyairtable import Table
from flask import Flask, render_template, send_from_directory
import os
import requests
import pprint



table = Table(api_key, base_id, table_id)

def fetch_records(table_id, view_name, fields=None):
    # Adding the fields we need for the template
    fields = ["Title", "Streamer", "Thumbnail", "Server URL"]

    # records has to be declared as a list first, otherwise record.get doesn't work
    records = []
    for page in table.iterate(view=view_name, fields=fields, max_records=100):
        records.extend(page)
    return records

app = Flask(__name__)

@app.route('/')
def home():
    clips = []
    view_name = "kimberly"
    fields = ["Server URL", "Title", "Streamer", "Clipped",
             "Thumbnail", "Duration", "Clip URL", "Views"]
    playlist = "output/playlist.m3u"
    filename = "output/output.txt"
    records = fetch_records(table_id, view_name, fields)

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
        server_url = fields.get('Server URL')
        # Add the extracted values to the clips list
        clips.append({"title": title, "streamer": streamer, "thumbnail_url": thumbnail_url, "server_url": server_url})
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
