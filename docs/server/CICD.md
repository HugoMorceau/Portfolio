
# CICD
https://www.youtube.com/watch?v=6-RtA6FlbgQ

## User
Namming conv : 
portfolio-dev-front portfolio
portfolio-prod-front portfolio-prod

adduser username 
sudo usermod -aG sudo username

su username
sudo chmod -R 777 /var/www/dev/portfolio 

(si pb de droits Ou sudo chmod -R 777 /root/Portfolio || sudo chmod -R 777 /root )

 sudo ./svc.sh install
 sudo ./svc.sh start
 
 sudo visudo -f /etc/sudoers.d/diablo
 diablo ALL=(ALL) NOPASSWD: /usr/sbin/service nginx start,/usr/sbin/service nginx stop,/user/sbin/service nginx restart
 
 
 uninstall : 
 sudo ./svc.sh uninstall
 ./config.sh remove --token ENTERTOKENHERE
 
 


