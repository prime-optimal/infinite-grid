from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

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
    app.run(debug=True)
