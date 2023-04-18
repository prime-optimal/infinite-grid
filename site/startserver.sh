#!/bin/bash

# Start Gunicorn server
gunicorn --bind 0.0.0.0:8080 --workers=4 app:app &

# Give Gunicorn some time to start
sleep 5

# Start Caddy reverse proxy
caddy run --watch
