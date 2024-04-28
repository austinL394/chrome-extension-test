# Node.js backend for the Chrome Extension


## Description
This  Node.js backend stores product logs to PostgresDB.
The Chrome Extension is going to send out API requests to record product information logs.

## Tech Stacks
- Node.js
- Sequelize
- Postgres

## APIs
- GET     `api/products`	            get all Products
- POST    `api/products`           create product log and store it to database

## 
## Database Models
- Product
   - name: String : name of the product
   - image: String : shopify product urls


### Test the APIs
Run our Node.js application with command: `node server.js`.

Using Postman, we're gonna test all the Apis above.

- Create a new Tutorial using `POST /products` Api


After creating some new Tutorials, you can check PostgreSQL table:
```testdb=# select * from tutorials;
 id |    name    |    image    |         createdAt          |         updatedAt
----+-------------+-------------------+-----------+----------------------------+----------------------------
  1 | Pitsa       | https://wteberify.com/products/Pitsa/info.jpg  |       | 2020-01-29 10:42:57.121+07 | 2020-01-29 10:42:57.121+07
  2 | Spaghetti   | https://wteberify.com/products/Spaghetti/info.jpg  |       | 2020-01-29 10:42:57.121+07 | 2020-01-29 10:42:57.121+07
  3 | Pitsa       | https://wteberify.com/products/Pitsa/info.jpg  |       | 2020-01-29 10:42:57.121+07 | 2020-01-29 10:42:57.121+07
  4 | Pitsa       | https://wteberify.com/products/Pitsa/info.jpg  |       | 2020-01-29 10:42:57.121+07 | 2020-01-29 10:42:57.121+07
  5 | Pitsa       | https://wteberify.com/products/Pitsa/info.jpg  |       | 2020-01-29 10:42:57.121+07 | 2020-01-29 10:42:57.121+07

```
## Environment Requireemtns

- Node.js 18.0
- PostgresDB 16.2

## Project setup
### Clone the Repository
```
git clone git@github.com:austinL394/chrome-extension-test.git
```
### Install node modules
```
npm install
```

### Run
```
npm start
```
Server should be available at Port Number: 8080
