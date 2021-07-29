FROM python:3
ENV PYTHONUNBUFFERED 1

ARG DJANGO_ALLOWED_HOSTS
ARG DJANGO_SECRET_KEY
ARG DJANGO_CORS_ORIGIN_WHITELIST

ENV DJANGO_ALLOWED_HOSTS $DJANGO_ALLOWED_HOSTS
ENV DJANGO_SECRET_KEY $DJANGO_SECRET_KEY
ENV DJANGO_CORS_ORIGIN_WHITELIST $DJANGO_CORS_ORIGIN_WHITELIST

RUN mkdir /backend
WORKDIR /backend
COPY ./HouseholdProject/requirements.txt /backend/
EXPOSE 8000
RUN pip install -r requirements.txt
COPY . /backend/
WORKDIR /backend/HouseholdProject
# RUN python3 manage.py migrate
# RUN python3 manage.py makemigrations
# RUN python3 manage.py migrate
# RUN gunicorn HouseholdProject.wsgi --bind 0.0.0.0:8000