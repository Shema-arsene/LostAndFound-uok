### Task Manager API

## Installation

### Installing Dependencies

Run
`yarn install` or `npm i`

### .env

Create a .env file in the root directory and refer to **.env.example**

## Routes Menu

### Admin

- [Login](#1-admin-login-post-request)

### Post

- [Add new Post](#2-add-new-post-post-request)
- [Fetch all Posts](#3-fetch-all-posts-get-request)
- [Get Post](#4-get-post-get-request)
- [Update Post](#5-update-post-put-request)
- [Delete Post](#6-delete-post-delete-request)

### 1. Admin Login: POST Request

End Point

```
/api/v1/admin/login
```

Body

```json
{
  "username": "String",
  "password": "String"
}
```

### Response

<details>
  <summary>201</summary>

### Success

```json
{
  "status": 201,
  "message": "Logged in successfuly",
  "data": {
    "username": "String",
    "role": "String",
    "token": "String"
  }
}
```

</details>

<details>
  <summary>400</summary>

### Bad Request

```json
{
  "status": 400,
  "message": "Username or Password is incorrect!",
  "error": "AUTHENTICATION_ERROR"
}
```

</details>

<details>
  <summary>500</summary>

### Error

```json
{
  "status": 500,
  "message": "Error",
  "error": "SERVER_ERROR"
}
```

</details>

###

### 2. Add new Post: POST Request

End Point

```
/api/v1/posts/new
```

Content-Type (multipart/form-data)

Body
```json
{
  "title": "String",
  "description": "String",
  "category": "String",
  "image": "File"
}
```

### Response

<details>
  <summary>201</summary>

### Success

```json
{
  "status": 201,
  "message": "Post Registered",
  "data": {
    "title": "String",
    "description": "String",
    "imageUrl": "String",
    "datePosted": "Number",
    "id": "ID (String)",
  }
}
```

</details>

<details>
  <summary>422</summary>

### Bad Request

```json
{
  "status": 422,
  "message": "Validation Error Message",
  "error": "VALIDATION_ERROR"
}
```

</details>

<details>
  <summary>500</summary>

### Error

```json
{
  "status": 500,
  "message": "Error",
  "error": "SERVER_ERROR"
}
```

</details>

###

### 3. Fetch all Posts: GET Request

End Point

```
/api/v1/posts/all
```

### Response

<details>
  <summary>200</summary>

### Success

```json
{
  "status": 200,
  "message": "All Posts",
  "data": [
    {
      "_id": "String",
      "title": "String",
      "description": "String",
      "imageUrl": "String",
      "category": "String",
      "datePosted": "Number",
      "createdAt": "DATE (String)",
      "updatedAt": "DATE (String)"
    }
  ]
}
```

</details>

<details>
  <summary>404</summary>

### Not Found

```json
{
  "status": 404,
  "message": "No Posts found",
  "error": "NOT_FOUND"
}
```

</details>

<details>
  <summary>500</summary>

### Error

```json
{
  "status": 500,
  "message": "Error",
  "error": "SERVER_ERROR"
}
```

</details>

###

### 4. Get Post: GET Request

End Point

```
/api/v1/posts/:id
```

### Response

<details>
  <summary>200</summary>

### Success

```json
{
  "status": 200,
  "message": "Post Details",
  "data": {
    "id": "String",
    "title": "String",
    "description": "String",
    "category": "String",
    "imageUrl": "String",
    "datePosted": "Number",
  }
}
```

</details>

<details>
  <summary>404</summary>

### Not Found

```json
{
  "status": 404,
  "message": "Post does not exist",
  "error": "NOT_FOUND"
}
```

</details>

<details>
  <summary>500</summary>

### Error

```json
{
  "status": 500,
  "message": "Error",
  "error": "SERVER_ERROR"
}
```

</details>

###

### 5. Update Post: PUT Request

End Point

```
/api/v1/posts/:id/update
```

Content-Type (multipart/form-data)

Body
```json
{
  "title": "String (optional)",
  "description": "String (optional)",
  "image": "File (optional)",
  "category": "File (optional)",
}
```

### Response

<details>
  <summary>201</summary>

### Success

```json
{
  "status": 201,
  "message": "Post Updated",
  "data": {
    "id": "String",
    "title": "String",
    "description": "String",
    "category": "String",
    "imageUrl": "String",
    "datePosted": "Number",
    "createdAt": "DATE (String)",
    "updatedAt": "DATE (String)"
  }
}
```

</details>

<details>
  <summary>404</summary>

### Not Found

```json
{
  "status": 404,
  "message": "Post does not exist",
  "error": "NOT_FOUND"
}
```

</details>

<details>
  <summary>422</summary>

### Validation

```json
{
  "status": 422,
  "message": "Validation Error Message",
  "error": "VALIDATION_ERROR"
}
```

</details>

<details>
  <summary>500</summary>

### Error

```json
{
  "status": 500,
  "message": "Error",
  "error": "SERVER_ERROR"
}
```

</details>

###

### 6. Delete Post: DELETE Request

End Point

```
/api/v1/posts/:id/delete
```

### Response

<details>
  <summary>200</summary>

### Success

```json
{
  "status": 200,
  "message": "Post Deleted",
  "data": null
}
```

</details>

<details>
  <summary>404</summary>

### Not Found

```json
{
  "status": 404,
  "message": "Post does not exist",
  "error": "NOT_FOUND"
}
```

</details>

<details>
  <summary>500</summary>

### Error

```json
{
  "status": 500,
  "message": "Error",
  "error": "SERVER_ERROR"
}
```

</details>