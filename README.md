# library-api

a [Sails](http://sailsjs.org) application

Used to make the library-frontend works correctly.

This file is not complete.

## NGINX configuration example
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

## Database
This is currently working with a disk database. Sails abstracts the database layer.

### Configure the API to work with a MySQL database
It's possible and easy to add a MySQL database configuration for the project.
At the next first run, Sails will create the tables.

### Safe mode when tables are created
Then it's recommended to run the API in safe mode for database. This means Sails won't be able to change automatically the structure of tables.


