# Welcome!

This project is a RESTful API for managing a medieval store - it sells products for heroes on an adventure! This API creates and lists products, orders and users. There's also authentication with Json Web Token.

The main focus of this project was to practice the recently learned **Typescript** language. Most of this project was written using `classes` as an introductory practice of Object-Oriented Programming (OOP). Typescript's `interfaces` were also used.

The project was built with a three-layered software architecture: the Model layer, responsible for communicating with the database, the Service layer in the middle, which validates the business rules and the Controller layer, which receives and responds HTTP requests.

This project was developed while studying Back-end web development [@betrybe](https://github.com/betrybe). The files I worked on are in the ```/src``` folder. I got approval on 100% of this project's requirements.

<details>
<summary><strong>Database diagram</strong></summary>

![EER Diagram](https://github.com/tryber/sd-022-a-project-trybesmith/blob/main/images/diagram-der.png)

</details>

## Main languages and tools used

- Typescript
- Node.js
- Express.js
- MySQL
- Joi for input data validation
- Json Web Token (JWT) for authentication
- Docker
- Layered Software Architecture

## Installation

<details>
<summary><strong>With Docker</strong></summary>

- Start the `trybesmith` and `trybesmith_db` containers with the `docker-compose up -d` command
- Access the `trybesmith` container terminal with `docker exec -it trybesmith bash`
- In the terminal, install the dependencies with `npm install`
- **All other node commands must be run inside the container**

</details>

<details>
<summary><strong>Without Docker</strong></summary>

- Install the dependencies with ``` npm install ``` (requires node on version 16)
- Configure a `.env` file based on the `.env.example` avaliable.

</details>

<details>
<summary><strong>Commands</strong></summary>

- Run the app with `npm start` or `npm run dev` (live reload)
- To run the project's requirements tests, first start the app with `npm run dev`, then `npm test` for all tests or `npm test <test-name>` for a specific requirement (ex. `npm test 01`)
- Use `npm run restore` to (re)create and (re)populate the database

</details>

## Endpoints

<details>
<summary><strong>GET</strong> <code>/products</code></summary>

<br />

- Returns an array with all the registered products ordered by their id, or an empty array if there are no products. 

<br />

- Example:

```json
[
  {
    "id": 1,
    "name": "Poção de cura",
    "amount": "20 gold",
    "orderId": null
  },
  {
    "id": 2,
    "name": "Escudo do Herói",
    "amount": "100 diamond",
    "orderId": 1
  }
]
```

</details>

<details>
<summary><strong>POST</strong> <code>/products</code></summary>

<br />

- Creates a new product in the `Products` table and returns it with the inserted id. Six validations are done: (1) the product needs a name; (2) the name must be a string; (3) the name must be at least 3 characters long; (4) the product needs an amount; (5) the amount must be a string; (6) the amount must be at least 3 characters long. If the new entry fails any of the validations, a message is returned instead. 

<br />

- Example request body:

```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```

- Example of response for valid entry:

```json
  {
    "id": 1,
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```

Examples of *invalid* requests:
  
- Response for request without a "name" field (status 400):

```json
{ "message": "\"name\" is required" }
```
  
- Response for request where "name" is not a string (status 422):
  
  ```json
  { "message": "\"name\" must be a string" }
  ```

- Response for request with an invalid "name" (status 422):

```json
{ "message": "\"name\" length must be at least 3 characters long" }
```

</details>
  
<details>
<summary><strong>POST</strong> <code>/users</code></summary>

<br />

- Inserts a new user in the `Users` table. Returns an authentication token. All request fields are required, must be strings (number in the case of the "level" field) and need a minimum length (or to be greater than zero for "level").

<br />

- Example request body:

```json
{ 
  "username": "MAX",
  "classe": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}
```

- Example of response for valid entry:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

Examples of *invalid* requests:
  
- Response for request without a "username" field (status 400):

```json
{ "message": "\"username\" is required" }
```
  
- Response for request where "username" is not a string (status 422):
  
  ```json
  { "message": "\"username\" must be a string" }
  ```

- Response for request with an invalid "username" (status 422):

```json
{ "message": "\"username\" length must be at least 3 characters long" }
```

</details>

<details>
<summary><strong>POST</strong> <code>/login</code></summary>

<br />

- Validates the sent username and password and returns a JWT token.

<br />

- Example request body:

```json
  {
    "username": "string",
    "password": "string"
  }
```

- Example of returned token:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

</details>
  
<details>
<summary><strong>GET</strong> <code>/orders</code></summary>

<br />

- Returns an array with all the registered orders and their respective products, or an empty array if there are no orders. 

<br />

- Example:

```json
  [
    {
      "id": 1,
      "userId": 2,
      "productsIds": [1, 2]
    },
    {
      "id": 2,
      "userId": 1,
      "productsIds": [3, 4]
    }
  ]
```

</details>

<details>
<summary><strong>POST</strong> <code>/orders</code></summary>

<br />

- **Requires token in the request header under `authorization`**. Otherwise, the request is denied.
- Inserts a new order of one or many products in the `Orders` table and updates the 'Products' to add the respective orderId. The ordered products must be in an array of numbers.

<br />

- Example request body:

```json
  {
    "productsIds": [1, 2]
  }
```

- Example of response for valid entry:

```json
  {
    "userId": 1,
    "productsIds": [1, 2]
  }
```

- Response for request without a "productsIds" field (status 400):

```json
  { "message": "\"productsIds\" is required" }
```

- Response for request where "productsIds" is not an array (status 422):

```json
  { "message": "\"productsIds\" must be an array" }
```

- Response for request where "productsIds" is an empty array (status 422):

```json
  { "message": "\"productsIds\" must include only numbers" }
```

</details>
