
/users/register Endpoint
Description
Registers a new user by creating a user account with the provided information.

HTTP Method
POST

Request Body
The request body should be in JSON format and include the following fields:

json
Copy
Edit
{
  "fullname": {
    "firstname": "string (required, min 3 characters)",
    "lastname": "string (optional, min 3 characters)"
  },
  "email": "string (required, valid email)",
  "password": "string (required, min 6 characters)"
}
Example Response
json
Copy
Edit
{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string"
  },
  "token": "JWT Token"
}
/users/login Endpoint
Description
Authenticates a user using their email and password, returning a JWT token upon successful login.

HTTP Method
POST

Request Body
json
Copy
Edit
{
  "email": "string (required, valid email)",
  "password": "string (required, min 6 characters)"
}
Example Response
json
Copy
Edit
{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string"
  },
  "token": "JWT Token"
}
/users/profile Endpoint
Description
Retrieves the profile information of the currently authenticated user.

HTTP Method
GET

Authentication
Requires a valid JWT token in the Authorization header:

makefile
Copy
Edit
Authorization: Bearer <token>
Example Response
json
Copy
Edit
{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}
/users/logout Endpoint
Description
Logs out the current user and blacklists the token provided in cookie or headers.

HTTP Method
GET

Authentication
Requires a valid JWT token in the Authorization header or cookie.

Example Response
json
Copy
Edit
{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string"
  },
  "token": "JWT Token"
}
/captains/register Endpoint
Description
Registers a new captain by creating a captain account with the provided information.

HTTP Method
POST

Request Body
json
Copy
Edit
{
  "fullname": {
    "firstname": "string (required, min 3 characters)",
    "lastname": "string (optional)"
  },
  "email": "string (required, valid email)",
  "password": "string (required, min 6 characters)",
  "vehicle": {
    "color": "string (required, min 3 characters)",
    "plate": "string (required, min 3 characters)",
    "capacity": "number (required, min 1)",
    "vehicleType": "string (required, must be 'car', 'motorcycle', or 'auto')"
  }
}
Example Response
json
Copy
Edit
{
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": 4,
      "vehicleType": "car"
    }
  },
  "token": "JWT Token"
}