# First Connection 

# Server Reset
** Reset ssh key **
If the server has been reset, you need to reset the ssh key associated on your local machine :
```
ssh-keygen -R adresse-ip-du-serveur
```
# Server configuration (first initialisation or after reset )
**System update**
```
apt-get update 
apt-get upgrade
```
**Npm & Node**
```
apt-get install npm
node -v npm-v
npm i -g n
n install lts
n use 16.16.0 // ou la version installée par LTS
```
*exit and relog with SSH*

**Git**
```
apt install git-all
```
**SSH Key generation**
```
ssh-keygen -t rsa
cd ~/
cd .ssh
cat id_rsa.pub
```
*copy paste the key to github*

**Cloning distant repository from github**
```
git clone -b <branch> <remote_repo>
```
*A this point, we can already test by launching the node server*
```
node index.js 
```
*and using the url & the port 3000 (we need to specifie the port even if we are not accessing the server on local for now)* 
```
www.unimetrix.xyz:3000
```

**Server launch automatisation with PM2**
PM2 will start automatically our index.js every time our server is restarted (so we won't have to do it manually each time)
```
npm install -g pm2
```
*in the folder that contain the sources code type this command. You can type wathever name you want instead of 'metrixserver' in the line below, by the name you want for the pm2 deamon :*
```
 pm2 start index.js -n metrixserver 
 ```

*We can made another test to check if the server is still reachable:*
```www.unimetrix.xyz:3000```


**We need to set PM2 to start whith the server**
```
pm2 start ubuntu
```

**Setting up a reverse proxy with NGINX**
Before setting up a reverse proxy we need to make sur our domain name is associated to our server ip adress in Hostinger control panel and
that the dns of the domain is well configured (there is some default line to remove in the dns config). Check this if encoutering error 403.
```
apt-get install nginx
cd ~
cd /etc/nginx
cd sites-available/
nano default
```
update the line :  
```
server_name _;
```  
remplace by 
```
server_name unimetrix.xyz www.unimetrix.xyz;
```
			
delete the lines in **location / { }** and replace by :  
```
location / {
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }
```

**Verify that the file is writtend and the config is ok :** 
```
nginx -t
```
**Restart nginx**
```
systemctl restart nginx
```
**At this point if nginx don't start it's proably beacause of Apache, so this is a temporary solution :**  
```
sudo fuser -k 80/tcp
sudo fuser -k 443/tcp
systemctl restart nginx 

OR 
Disable launch at startup Apache2
sudo update-rc.d apache2 disable

Stop
/etc/init.d/apache2 stop
systemctl restart nginx 
```
Another solution may be 
```
systemctl stop apache2
systemctl restart nginx
```
**Firewall install**
```
sudo apt-get install ufw
sudo ufw enable
sudo ufw status
ufw allow ssh
ufw allow http
ufw allow https
```

**Setting up HTTPS with certbot**
Don't do this before the site is accessible by the domain name instead of the ip (the site must be accessible by tipping http://site-name.xxx)
Install 
```
snap install --classic certbot
sudo apt install certbot
sudo apt install certbot python3-certbot-nginx

certbot --nginx -d example.com -d www.example.com
certbot --nginx
	enter email adress
	agree
	do not share email adress
	enter
	
certbot renew --dry-run
```
If snap have compatibility issues with the vps, we need to install cerbot that way instead :
```
sudo apt install python3 python3-venv libaugeas0
sudo python3 -m venv /opt/certbot/
sudo /opt/certbot/bin/pip install --upgrade pip
sudo /opt/certbot/bin/pip install certbot certbot-nginx
sudo ln -s /opt/certbot/bin/certbot /usr/bin/certbot
```
**POSTGRES Install**
```
sudo apt update
sudo apt install postgresql postgresql-contrib
```

**Serve React front end**
```
build react app in local (too much ram usage for the server
then on the server :
 - npm install -g serve
In the root folder of the project : 
 - pm2 serve build 4000 --spa --name frontserv
4000 is the local port, --spa for single page app, --name to define the name of pm2 deamon
```