# # syntax=docker/dockerfile:1
# FROM python:3.8-slim-buster
# WORKDIR /app
# COPY requirements.txt requirements.txt
# RUN pip3 install -r requirements.txt
# COPY . .
# CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]

FROM python:3.7
RUN mkdir /backend
WORKDIR /backend
COPY requirements.txt /backend/requirements.txt
RUN pip install --upgrade pip && \
    pip install -U flask-cors \
    pip install -r requirements.txt
COPY . .
