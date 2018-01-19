# library-api

a [Sails](http://sailsjs.org) application

Used to make the library-frontend works correctly.

## NGINX configuration example
Please consider a nginx configuration like the following:
```
server {
	listen 8080;

  ...

	location /api/ {
		proxy_pass http://localhost:1337/;
	}

	location / {
		proxy_pass http://localhost:4200/;
	}
}
```
