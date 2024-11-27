### Lost & Found UOK API

## Installation

### Installing Dependencies

Run
`yarn install` or `npm i`

### .env

Create a .env file in the root directory and refer to **.env.example**

## Routes Menu

### Admin

- [Login](#1-admin-login-post-request)

### Employee

- [Add new Employee](#2-add-new-employee-post-request)
- [Fetch all Employees](#3-fetch-all-employees-get-request)
- [Get Employee](#4-get-employee-get-request)
- [Update Employee](#5-update-employee-put-request)

### Task

- [Assign new Task](#6-assign-new-task-post-request)
- [Fetch All Tasks](#7-fetch-all-tasks-get-request)
- [Fetch Employee Tasks](#8-fetch-employee-tasks-get-request)
- [Update Task](#9-update-task-put-request)
- [Remove Task](#10-remove-task-delete-request)

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

### 2. Add new Employee: POST Request

End Point

```
/api/v1/employees/new
```

Body

```json
{
  "name": "String",
  "phone": "String",
  "isManager": "Boolean",
  "email": "String"
}
```

### Response

<details>
  <summary>201</summary>

### Success

```json
{
  "status": 201,
  "message": "Employee Registered",
  "data": {
    "name": "String",
    "phone": "String",
    "isManager": "Boolean",
    "email": "String",
    "_id": "ID (String)",
    "createdAt": "DATE (String)",
    "updatedAt": "DATE (String)"
  }
}
```

</details>

<details>
  <summary>409</summary>

### Conflict

```json
{
  "status": 409,
  "message": "Employee exists already",
  "error": "CONFLICT_ERROR"
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

### 3. Fetch all Employees: GET Request

End Point

```
/api/v1/employees/all
```

### Response

<details>
  <summary>200</summary>

### Success

```json
{
  "status": 200,
  "message": "All Employees",
  "data": [
    {
      "_id": "String",
      "name": "String",
      "phone": "String",
      "email": "String",
      "isManager": "Boolean",
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
  "message": "No Employees Registered yet",
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

### 4. Get Employee: GET Request

End Point

```
/api/v1/employees/{employee_id}
```

### Response

<details>
  <summary>200</summary>

### Success

```json
{
  "status": 200,
  "message": "Employee Details",
  "data": [
    {
      "_id": "String",
      "name": "String",
      "phone": "String",
      "email": "String",
      "isManager": "Boolean",
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
  "message": "Employee does not exist",
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

### 5. Update Employee: PUT Request

End Point

```
/api/v1/employees/update/{employee_id}
```

Body

```json
{
  "name": "String",
  "phone": "String",
  "isManager": "Boolean",
  "email": "String"
}
```

### Response

<details>
  <summary>200</summary>

### Success

```json
{
  "status": 200,
  "message": "Employee Updated",
  "data": [
    {
      "_id": "String",
      "name": "String",
      "phone": "String",
      "email": "String",
      "isManager": "Boolean",
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
  "message": "Employee does not exist",
  "error": "NOT_FOUND"
}
```

</details>

<details>
  <summary>409</summary>

### Conflict

```json
{
  "status": 409,
  "message": "Employee with same email already exists",
  "error": "CONFLICT_ERROR"
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

### 6. Assign new Task: POST Request

End Point

```
/api/v1/employees/update/{employee_id}
```

Body

```json
{
  "title": "String",
  "deadline": "Timestamp",
  "employee": "Employee_ID",
  "details": "String"
}
```

### Response

<details>
  <summary>201</summary>

### Success

```json
{
  "status": 201,
  "message": "Task assigned successfully",
  "data": {
    "title": "String",
    "details": "String",
    "deadline": "Timestamp",
    "employee": "Employee_ID",
    "_id": "ID",
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
  "message": "Employee doesn't exist",
  "error": "NOT_FOUND"
}
```

</details>

<details>
  <summary>409</summary>

### Conflict

```json
{
  "status": 409,
  "message": "This task is already assigned to this user",
  "error": "CONFLICT_ERROR"
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

### 7. Fetch all Tasks: GET Request

End Point

```
/api/v1/tasks/all
```

### Response

<details>
  <summary>200</summary>

### Success

```json
{
  "status": 200,
  "message": "All Tasks",
  "data": [
    {
      "_id": "ID",
      "title": "String",
      "details": "String",
      "deadline": "Timestamp",
      "employee": {
        "_id": "Employee_ID",
        "name": "String",
        "email": "String",
        "isManager": "Boolean"
      },
      "createdAt": "Date (String)",
      "updatedAt": "Date (String)"
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
  "message": "No tasks data found",
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

### 8. Fetch Employee Tasks: GET Request

End Point

```
/api/v1/tasks/for/{employee_id}
```

### Response

<details>
  <summary>200</summary>

### Success

```json
{
  "status": 200,
  "message": "All Tasks",
  "data": {
    "employee": {
      "_id": "ID",
      "name": "String",
      "email": "String",
      "isManager": "Boolean"
    },
    "tasks": [
      {
        "_id": "String",
        "title": "String",
        "details": "String",
        "deadline": "Timestamp",
        "createdAt": "Date (String)",
        "updatedAt": "Date (String)"
      }
    ]
  }
}
```

</details>

<details>
  <summary>404 (Tasks)</summary>

### Not Found

```json
{
  "status": 404,
  "message": "No tasks data found",
  "error": "NOT_FOUND"
}
```

</details>

<details>
  <summary>404 (Employee)</summary>

### Not Found

```json
{
  "status": 404,
  "message": "Employee doesn't exist",
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

### 9. Update Task: PUT Request

End Point

```
/api/v1/tasks/update/{task_id}
```

Body

```json
{
  "title": "String",
  "deadline": "Timestamp",
  "employee": "Employee_ID",
  "details": "String"
}
```

### Response

<details>
  <summary>200</summary>

### Success

```json
{
  "status": 200,
  "message": "Task updated",
  "data": {
    "title": "String",
    "details": "String",
    "deadline": "Timestamp",
    "employee": "Employee_ID",
    "_id": "ID",
    "createdAt": "DATE (String)",
    "updatedAt": "DATE (String)"
  }
}
```

</details>

<details>
  <summary>404 (Task)</summary>

### Not Found - Task

```json
{
  "status": 404,
  "message": "Task doesn't exits",
  "error": "NOT_FOUND"
}
```

</details>

<details>
  <summary>404 (Employee)</summary>

### Not Found - Employee

```json
{
  "status": 404,
  "message": "Employee doesn't exist",
  "error": "NOT_FOUND"
}
```
</details>

<details>
  <summary>409</summary>

### Conflict

```json
{
  "status": 409,
  "message": "This task is already assigned to this user",
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

### 10. Remove Task: Delete Request

End Point

```
/api/v1/tasks/delete/{task_id}
```

### Response

<details>
  <summary>200</summary>

### Success

```json
{
  "status": 200,
  "message": "Task Deleted",
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
  "message": "Task doesn't exits",
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
