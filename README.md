# Backend Practice

A Node.js backend application built with Express.js for user authentication and management. This project demonstrates secure authentication practices including JWT tokens, session management, email verification with OTP, and more.

## Features

- **User Registration**: Register new users with email verification via OTP
- **Secure Login**: Authenticate users with JWT access and refresh tokens
- **Session Management**: Track user sessions with IP and user agent
- **Token Refresh**: Refresh access tokens using refresh tokens
- **Logout Options**: Logout from current session or all sessions
- **Email Verification**: Send OTP codes via email for account verification
- **Password Hashing**: Secure password storage using bcrypt
- **MongoDB Integration**: Data persistence with Mongoose ODM

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Security**: bcrypt for password hashing
- **Email Service**: Nodemailer with Gmail OAuth2
- **Middleware**: Morgan for logging, Cookie-Parser for cookies

## Project Structure

```
backend-practice/
├── server.js                 # Main server entry point
├── package.json              # Project dependencies and scripts
├── README.md                 # Project documentation
└── src/
    ├── app.js                # Express application setup
    ├── config/
    │   ├── config.js         # Configuration settings
    │   └── db.js             # Database connection
    ├── controller/
    │   └── auth.controller.js # Authentication logic
    ├── model/
    │   ├── user.model.js     # User schema
    │   ├── session.model.js  # Session schema
    │   └── otp.model.js      # OTP schema
    ├── routes/
    │   └── auth.router.js    # Authentication routes
    ├── services/
    │   └── email.service.js  # Email sending service
    └── utils/
        └── utils.js          # Utility functions (OTP generation)
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd backend-practice
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and configure the following variables (refer to `src/config/config.js` for required fields):
   - Database connection string
   - JWT secrets
   - Google OAuth2 credentials for email service
   - Other configuration settings

4. **Start the server**:
   ```bash
   node server.js
   ```

## Usage

Once the server is running, you can interact with the API using tools like Postman or curl. The application provides RESTful endpoints for user authentication.

### API Endpoints

All authentication routes are prefixed with `/auth` (assuming the router is mounted accordingly).

- **POST /auth/register**
  - Register a new user
  - Body: `{ "username": "string", "email": "string", "password": "string" }`
  - Sends OTP to email for verification

- **POST /auth/login**
  - Login user
  - Body: `{ "email": "string", "password": "string" }`
  - Returns access token and sets refresh token cookie

- **GET /auth/get-me**
  - Get current user information
  - Headers: `Authorization: Bearer <access-token>`

- **GET /auth/refresh-token**
  - Refresh access token
  - Requires refresh token cookie

- **POST /auth/logout**
  - Logout from current session
  - Requires refresh token cookie

- **POST /auth/logout-all**
  - Logout from all sessions
  - Requires refresh token cookie

- **GET /auth/verify-email**
  - Verify email with OTP
  - Query: `?otp=<otp-code>&email=<email>`

## Configuration

The application uses environment variables for sensitive information. Key configuration includes:

- **Database**: MongoDB connection string
- **JWT**: Access and refresh token secrets
- **Email**: Google OAuth2 credentials (client ID, client secret, refresh token)
- **Server**: Port, environment settings

Refer to `src/config/config.js` for all configuration options.

## Security Features

- Password hashing with bcrypt
- JWT-based authentication with access and refresh tokens
- Session tracking with IP and user agent
- Secure cookie settings for refresh tokens
- OTP-based email verification
- Token revocation on logout

## Development

- **Logging**: Uses Morgan for HTTP request logging
- **Error Handling**: Comprehensive error handling in controllers
- **Validation**: Input validation in models and controllers

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the ISC License.