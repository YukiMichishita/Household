#!/bin/bash
sudo certbot --nginx -d kakeibo.tk -d www.kakeibo.tk -m michishita.ocu@gmail.com --agree-tos -n
sudo certbot renew
/bin/bash