#!/bin/bash
certbot --nginx -d kakeibo.tk -d www.kakeibo.tk -m michishita.ocu@gmail.com --agree-tos -n
certbot renew
/bin/bash