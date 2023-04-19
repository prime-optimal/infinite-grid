# This is a video experiment using the infinite grid: 
https://codecanyon.net/item/infinite-grid-pro/8506142

## Goal
The goal is to build an automated video site that has the best clips in a grid.

## How
A small flask server that uses simple jinja2 templates to display:
- video player 
- gallery grid of video thumbnails 
- gallery grid of still images

## Updates
### 04-18-23
- addedd the rest of the characters by adjusting `app.py` to include categories, which are passed to the `index.html` template.
- changed the title and description classes to `bottomout`, which now displays the title, streamer, view count, and the date the clip was created below the video player.
- added `app.routes` that are linked to `view_name` to pull records from specific views so now `sf6.lol/guile` will pull the `guile` view from Airtable.
- Added `Caddyfile.production` and `Caddyfile.local` for local and production environments.
- Added functionality to `startserver.sh` which uses the appropriate Caddyfile depending on whether its running locally or on the server. 
- Added functionality to `startserver.sh` that uses `pkill` to end gunicorn and caddy processes. 

### 04-17-23
- got SSL working remotely through `Caddyfile`
- Fixed a problem where videos wouldn't load when SSL was on by adjusting `Caddyfile` to point to the domain.
- Started the process of migrating the video files to BunnyCDN by creating `bunny2.py`.

### 04-14-23
- got the videos and thumbnails working, pulling from the API:
  - 88 videos from the "kimberly" view.
- generates an M3U playlist that can be played in any media player.
- generates a text file with attribution links of all the videos.
- changed thumbnail color to green. 
- customized some of the javascript options:
  - auto-scrolling of the entire grid.
  - auto-plays the next video when one ends.
  - reduced auto-scrolling speed.
  - removed some dead social platforms. 

#### Next Steps
- [ ] move videos to the b2 bucket to be pulled into BunnyCDN
- [ ] upload `site` folder to b2 bucket and run speed tests on Bunny vs speed tests just on vultr.

### 04-11-23 
- Added Airtable API functionality via `pyairtable`. 
- AIRTABLE_API_KEY is stored as an environment variable.
- Pulls in 10 records from the table and brings in these fields:
  - Title 
  - Streamer
  - Thumbnail URL
- These fields are then passed to the index.html jinja template.
- **Next steps**: Get clip URL from the Airtable API and add that to the index.html template. 

### 04-11-23 
- Was getting 404 errors with the `FWDEVPlayer.js` file not loading.  
- For some reason, it works just fine if you run `app.py` from the terminal, but not from within VSCode.  Truly a mystery, but I guess that's good to know.  
- Could possibly have something to do with using pyenv?  Not really sure unfortunately. 

### 04-09-23 
- Site is created. 

### 04-09-23 
- Demo gallery works.  
- It's a miracle.

