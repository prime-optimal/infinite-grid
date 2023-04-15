FROM python:3.9

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

Copy . .

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "wsgi:app"]

