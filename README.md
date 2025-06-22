# 📌 Secondhand Marketplace - Back-end Development

## 🚀 MERN Stack Development

### 🛠️ Technologies Used
- **Node.js** - JavaScript runtime for building scalable applications.
- **Express.js** - Web framework for building RESTful APIs.
- **Mongoose** - ODM for MongoDB, handling data modeling and validation.
- **TypeScript** - Strongly typed JavaScript for better maintainability.

---

## ✅ Project Setup
1. **Initialize Express Server**
2. **Set Up Import/Export Module System**
3. **API Testing with Postman**
4. **Environment Variables & .gitignore Configuration**
5. **Create README.md File**
6. **Follow Modular Pattern in Software Architecture**

---

## ✅ Database Setup
- **Connect to MongoDB Atlas** (Cloud-based) or **MongoDB Compass** (Local).

---

## ✅ User API
### 🔖 User Model & Validation
- Define user Schema with validation rules.
- Implement user creation validation.
- Set up user routes and controllers.

### 📌 User API Endpoints
1. **Create a user**  
   `POST /api/users/register`
   - Validate request body.
   - Check if user already exists.
   - Save user and send response.

2. **Get All users (with Search & Filters)**  
   `GET /api/users`
   - Retrieve users from database.
   - Implement search functionality using regex.
   - Send response.

3. **Get a Single user**  
   `GET /api/users/:id`
   - Retrieve user by ID.
   - Handle Mongoose Cast error if ID is invalid.
   - Send appropriate response.

4. **Delete a user**  
   `DELETE /api/users/:id`
   - Find user by ID and delete.
   - Handle Mongoose Cast error.
   - Send response based on success/failure.

5. **Update a user**  
   `PUT /api/users/:id`
   - Retrieve data from request body and params.
   - Apply updates using `findByIdAndUpdate`.
   - Return response after successful update.

---

## ✅ Auth API
### 🔖 Auth interface for auth api
- create auth validation
- create auth routes controller and service

### 📌 Auth API Endpoints
1. **User Login**  
   `POST /api/auth/login -> user login (D)`
   - middlewares: auth
   - extract request body
   - compare the password & return response
   - create jwt token with an expiry time

2. **Refresh Token**  
   `POST /api/auth/refresh-token -> crate a refresh token (D)`
   - create jwt refresh token with an expiry time
   - Send response.

---

## ✅ Listing API
### 🔖 Listing Model & Validation
- Define listing Schema with validation rules.
- Implement listing creation validation.
- Set up listing routes and controllers.

### 📌 Listing API Endpoints
1. **Create a listing**  
   `POST /api/listings`
   - Validate request body.
   - Check if listing already exists.
   - Save listing and send response.

2. **Get All Listings (with Search, Filters & Pagination )**  
   `GET /api/listings`
   - Retrieve listings from database.
   - Implement search functionality, Filters & Pagination.
   - Send response.

3. **Get a Single Listing**  
   `GET /api/listings/:id`
   - Retrieve listing by ID.
   - Handle Mongoose Cast error if ID is invalid.
   - Send appropriate response.

4. **Delete a Listing**  
   `DELETE /api/listings/:id`
   - Find listing by ID and delete.
   - Handle Mongoose Cast error.
   - Send response based on success/failure.

5. **Update a Listing**  
   `PUT /api/listings/:id`
   - Retrieve data from request body and params.
   - Apply updates using `findByIdAndUpdate`.
   - Return response after successful update.

---

## ✅ Order API
### 🔖 Order Model & Validation
- Define order Schema with validation rules.
- Implement order creation validation.
- Set up order routes and controllers.

### 📌 Order API Endpoints
1. **Create a Order**  
   `POST /api/orders`
   - Validate request body.
   - Check if order already exists.
   - Save order and send response.

2. **Get All orders (with Search, Filters & Pagination)**  
   `GET /api/orders`
   - Retrieve orders from database.
   - Implement search functionality & Filters & Pagination.
   - Send response.

3. **Get a Single Order**  
   `GET /api/orders/:id`
   - Retrieve order by ID.
   - Handle Mongoose Cast error if ID is invalid.
   - Send appropriate response.

4. **Delete a order**  
   `DELETE /api/orders/:id`
   - Find order by ID and delete.
   - Handle Mongoose Cast error.
   - Send response based on success/failure.

5. **Update a order**  
   `PUT /api/orders/:id`
   - Retrieve data from request body and params.
   - Apply updates using `findByIdAndUpdate`.
   - Return response after successful update.

---

- **Payment Integration:**
  - Stripe payment gateways.

---

## ✅ Required Packages
Install dependencies:
```sh
npm install express cors dotenv mongoose cookie-parser jsonwebtoken stripe zod bcrypt
```

Install development dependencies:
```sh
npm install --save-dev typescript ts-node-dev @eslint/js @types/cors @types/express @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier globals prettier
```

---

## 📌 Folder Structure
```
📂 stationery-shop-backend
│-- 📂 src
│   ├── 📂 app
│   │   ├── 📂 modules
│   │   │   ├── 📂 listings    
│   │   │   │   ├── listing.constant.ts
│   │   │   │   ├── listing.model.ts
│   │   │   │   ├── listing.interface.ts
│   │   │   │   ├── listing.routes.ts
│   │   │   │   ├── listing.controller.ts
│   │   │   │   ├── listing.service.ts
│   │   │   │   ├── listing.validation.ts
│   │   │   ├── 📂 orders      
│   │   │   │   ├── order.constant.ts
│   │   │   │   ├── order.interface.ts
│   │   │   │   ├── order.model.ts
│   │   │   │   ├── order.routes.ts
│   │   │   │   ├── order.controller.ts
│   │   │   │   ├── order.service.ts
│   │   │   │   ├── order.validation.ts
│   │   │   ├── 📂 users       
│   │   │   │   ├── user.interface.ts
│   │   │   │   ├── user.model.ts
│   │   │   │   ├── user.routes.ts
│   │   │   │   ├── user.controller.ts
│   │   │   │   ├── user.service.ts
│   │   │   │   ├── user.validation.ts
│   │   │   ├── 📂 auth       
│   │   │   │   ├── auth.interface.ts
│   │   │   │   ├── auth.routes.ts
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── auth.validation.ts
│   │   │   ├── 📂 payment       
│   │   │   │   ├── payment.interface.ts
│   │   │   │   ├── payment.model.ts
│   │   │   │   ├── payment.routes.ts
│   │   │   │   ├── payment.controller.ts
│   │   │   │   ├── payment.service.ts
│   │   │   │   ├── payment.validation.ts
│   │   │   ├── 📂 config
│   │   │   ├── 📂 errors
│   │   │   ├── 📂 middlewares
│   │   │   ├── 📂 utils
│   │   │   ├── 📂 routes
│   │   │   ├── 📂 constants
│   │   │   ├── 📂 interfaces
│   │   ├── app.ts
│   │   ├── server.ts
│   │-- .env
│   │-- package.json
│   │-- tsconfig.json
│   │-- README.md
```

---

## 📝 License
This project is licensed under the MIT License.

---

## 👨‍💻 Contributors
- **[MD. AZIM UDDIN]**

Feel free to contribute to improve this project! 🚀
