FROM node:14.4.0-alpine3.10
USER root
ARG API_URL
ENV REACT_APP_HOST_IP_ADDRESS $API_URL
RUN mkdir /frontend
WORKDIR /frontend
COPY . /frontend
RUN npm install
RUN npm run build