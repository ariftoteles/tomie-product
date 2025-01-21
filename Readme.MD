# Tomie Tech Test

This is a backend application built with Express.js, written in TypeScript. The product data is fetched from the **FakeStore API** as a dummy data source.


## Features

- **Express.js** as the backend framework.
- **Joi** for request body validation.
- **Winston** for logging (including error logging).
- **TypeScript** for structured and type-safe code.

## Prerequisites

- **Node.js** version 14 or higher.
- **npm** for managing dependencies.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/ariftoteles/tomie-product.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Copy the `.env.example` file to `.env` and adjust the environment variables as needed.
4. Build and Run the Application
   ```
   npm run start
   ```
   Or you want to run in the development mode:
   ```
   npm run dev
   ```

## Endpoints

### 1. **GET /products**

**Description**: Retrieve a list of all available products from the FakeStore API

#### Request

- **Method**: `GET`
- **URL**: `/products`

#### Response

```json
[
   {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        },
        "stock": "OUT_OF_STOCK"
    }
]
```

### 2. **POST /order**

**Description**: Place an order for a product with a specified quantity.

#### Request

- **Method**: `POST`
- **URL**: `/order`
- **Body**:

```json
{
  "id": 1,
  "quantity": 2
}
```
#### Response

```json
{
    "msg": "Order placed succesfully"
}
```