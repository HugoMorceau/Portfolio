# Manage & Logs server
## PM2
```
PM2 STATUS

PM2 STOP deamonName
PM2 START deamonName

pm2 serve build 4000 --spa --name front serv
```
replace deamonName with metrixserv or frontserv for examples

## NGINX
```
cat /var/log/nginx/access.log

cat /var/log/nginx/error.log
```
```
systemctl restart nginx
```
# SSH
## Show SSH Key
```
cd ~
cd .ssh
cat id_rsa.pub
```
