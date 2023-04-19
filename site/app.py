'''
For whatever reason, this file must be run from the terminal i.e. python app.py

When I run it from VSCode, I get weird 404 errors because it can't find a few files.  

'''

from datetime import datetime
from pyairtable import Table
from flask import Flask, render_template, send_from_directory
import os

api_key = os.environ.get('API_KEY')
base_id = os.environ.get('BASE_ID')
table_id = os.environ.get('TABLE_ID')


app = Flask(__name__)

table = Table(api_key, base_id, table_id)

def fetch_records(table_id, view_name, fields=None):
    # Adding the fields we need for the template
    fields = ["Server URL", "Title", "Streamer", "Clipped",
             "Thumbnail", "Duration", "Clip URL", "Views"]

    # records has to be declared as a list first, otherwise record.get doesn't work
    records = []
    for page in table.iterate(view=view_name, fields=fields, max_records=100):
        records.extend(page)
    return records


@app.route('/')
@app.route('/<view_name>')
def home(view_name=None):
    all_clips = []
    categories = [
        {"name": "Chun-Li", "view_name": "chunli"},
        {"name": "Guile", "view_name": "guile"},
        {"name": "Jamie", "view_name": "jamie"},
        {"name": "Juri", "view_name": "juri"},
        {"name": "Ken", "view_name": "ken"},
        {"name": "Kimberly", "view_name": "kimberly"},
        {"name": "Luke", "view_name": "luke"},
        {"name": "Ryu", "view_name": "ryu"}
    ]
    
    for category in categories:
        view_name = category['view_name']
        records = fetch_records(table_id, view_name)
        
        for record in records:
            fields = record.get('fields', {})
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
            views = fields.get('Views')
            timestamp = fields.get('Clipped')
            datetime_obj = datetime.strptime(timestamp, '%Y-%m-%dT%H:%M:%S.%fZ')
            formatted_date = datetime_obj.strftime('%m-%d-%Y')

            all_clips.append({"title": title, "streamer": streamer,
                        "thumbnail_url": thumbnail_url, "server_url": server_url,
                        "views": views, "date": formatted_date, "view_name": view_name})

    return render_template("index.html", clips=all_clips, categories=categories)

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
