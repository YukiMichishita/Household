FROM nginx:latest
RUN apt-get update && apt-get install -y \
    wget && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
RUN apt update
RUN apt install sudo 
RUN apt -y install certbot
RUN sudo apt-get -y install python-certbot-nginx
COPY ./entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]