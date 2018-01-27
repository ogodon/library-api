# library-api

## Purpose
a [Sails](http://sailsjs.org) application
Used to make the library-frontend works correctly.

## To use it
Install dependencies
```npm install```

Start the API
```sails lift```

## NGINX configuration example
```
server {
	listen 80;

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

The dependency `sails mysql` is already installed.

In `config/connections.js` add the mysql adapter:
```
mysql: {
	adapter: 'sails-mysql',
	host: '127.0.0.1',
	user: 'user',
	password: 'password',
	database: 'library',
	charset   : 'utf8',
	collation : 'utf8_unicode_ci'
},
```
In `config/models.js` replace `connection: 'localDiskDb'` by `connection: 'mysql'`.

At the next first run, Sails will create the empty tables.

### Safe mode when tables are created
Then it's recommended to run the API in safe mode for database. This means Sails won't be able to change automatically the structure of tables.

For that in `config/models.js` replace `migrate: 'alter'` by `migrate: 'safe'`.
