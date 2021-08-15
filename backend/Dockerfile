FROM python:3
ENV PYTHONUNBUFFERED 1

RUN mkdir /backend
WORKDIR /backend
COPY ./HouseholdProject/requirements.txt /backend/
EXPOSE 8000
RUN pip install -r requirements.txt
COPY . /backend/
WORKDIR /backend/HouseholdProject
RUN gunicorn HouseholdProject.wsgi --bind 0.0.0.0:8000 -D