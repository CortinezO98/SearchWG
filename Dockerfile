# Dockerfil
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY manage.py .
COPY static/css/styles.css .
COPY static/js/scripts.js .
COPY templates/index.html .

ENV PYTHONUNBUFFERED=1

RUN pip install -r requirements.txt

EXPOSE 8080

CMD python run manage.py --server.port=8080 --server.address=0.0.0.0