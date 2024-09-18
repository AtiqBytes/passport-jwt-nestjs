
# NestJs Authentication & Authorization

Are you tired of worrying about user authentication and authorization in your NestJS applications and want role-based authorization? Look no further! This project provides a comprehensive, battle-tested solution for managing user access and permissions, so you can focus on building amazing apps.

Built for developers, by developers

Whether you're a solo dev or part of a team, this project is designed to help you:

1. Secure your app with robust authentication and authorization

2. Scale your solution with confidence

3. Customize access control to fit your unique needs


## API Reference

#### Create a User

```http
  POST  http://localhost:3000/users/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username,password,email` | `string` | **Required**. Running database |

#### Login User

```http
  POST  http://localhost:3000/auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username,password`      | `string` | **Required**.  |

#### View  Profile

```http
  GET http://localhost:3000/profile
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username,password`      | `string` | **Required**. Jwt Access Token |

#### View Protected Route (Based On Role based Access)

```http
  POST http://localhost:3000/profile
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username,password`      | `string` | **Required**. Jwt Bearer Token |


#### Create an Admin

```http
  POST  http://localhost:3000/admin/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username,password,email` | `string` | **Required**. Running database |

#### Login Admin

```http
  POST   http://localhost:3000/auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username,password`      | `string` | **Required**.  |

#### View  Profile

```http
  GET http://localhost:3000/profile
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username,password`      | `string` | **Required**. Jwt Access Token |

#### View Protected Route (Based On Role based Access)

```http
  POST http://localhost:3000/profile
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username,password`      | `string` | **Required**. Jwt Bearer Token |



## Appendix

Any additional information goes here


## Author

- [AtiqBytes](https://github.com/AtiqBytes)
## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Demo



## Deployment

To deploy this project run

```bash
  npm run start:dev
```


## Documentation

1.  [Jwt](https://jwt.io/)

2.  [Passport Js](https://docs.nestjs.com/recipes/passport)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. You can customize it the way you want :

`DB_PORT='5432'`

`DB_USERNAME='postgres'`

`DB_PASSWORD='root'`

`DB_DATABASE='passportdb'`








#### Q: How do I troubleshoot issues with authentication?
A: Check the console logs for error messages, ensure your environment variables are set correctly, and verify your database connection.

#### Q: Can I customize the authentication flow?
A: Yes, you can modify the authentication flow by editing the auth.controller.ts and auth.service.ts files.

#### Q: What if I encounter a "401 Unauthorized" error?

A: Ensure your JWT token is valid, not expired, and correctly formatted. Also, check your role-based access control settings.

#### Q: How do I handle errors when creating a new user?
A: Catch and handle errors thrown by the users.service.ts file, such as duplicate usernames or invalid input.

#### Q: Can I use this project with a different database?
A: Yes, you can modify the database.module.ts file to support a different database provider.

#### Q: What if I encounter a "500 Internal Server Error"?
A: Check the server logs for error messages, ensure your environment variables are set correctly, and verify your database connection.
## Features

- Role-Based Access Control
- JSON Web Token Authentication
- Customizable Authentication Flow
- Environment Variable Configuration
- Database Support
- Error Handling and Logging
- Cross-Platform Compatibility

## Feedback

If you have any feedback, please reach out to me at https://www.linkedin.com/in/atiq-ur-rehman-1314712aa/


## 🚀 About Me
I'm a full stack developer...

wokring in Angular | 
NestJs | 
Django |
Amazon Aws
# Hi, I'm Atiq Ur Rehman! 👋


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/AtiqBytes)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/atiq-ur-rehman-1314712aa/)



## Other Common Github Profile Sections
👩‍💻 I'm currently working on Backend

🧠 I'm currently learning NestJs

👯‍♀️ I'm looking to collaborate on full Stack Projects

🤔 I'm looking for help with getting Internship



## 🛠 Skills
Typescript, Javascript, HTML, CSS, Python


## Installation

Install my-project with npm

```bash
  cd my-project
  npm install 
  
```
    
## Lessons Learned

## Authorization with Enum Files:

Files Involved: role.enum.ts
- I learned that we can manage authorization effectively using enum files.
- By defining roles such as admin and user in role.enum.ts, we can then add an extra column, role, to an entity (e.g., user.entity.ts)
- This setup allows the database to recognize which entity has which role and apply the appropriate permissions.

## Defining Roles in DTOs:

Files Involved: create-user.dto.ts

- When creating Data Transfer Objects (DTOs), such as create-user.dto.ts, I included an additional attribute called role of type Role.
- This ensures that when creating a user, the backend expects the role to be part of the request structure.

## Role Decorator and Guard:

Files Involved: role.decorator.ts, roles.guard.ts

- To utilize the role variable, I created a role decorator (role.decorator.ts).
- This decorator is applied to routes, such as a signup route, and allows specifying which roles (e.g., user or admin) are required.

-  The role guard (roles.guard.ts) is then used to enforce these role requirements on the route.

## Issue with Global Auth Guard:

## Files Involved: auth.module.ts, auth.guard.ts
- I encountered an issue where signup and signin routes were not functioning correctly.
- The problem was that the authentication guard (auth.guard.ts) was registered globally in auth.module.ts, applying it to all routes.
- Since signup and signin should not require a token, this setup caused problems. The solution was to use a public decorator on the signup route, allowing access without restriction.

## JWT Payload and Role Encoding:

Files Involved: auth.service.ts, jwt.strategy.ts

- Another issue arose when I could not access route protected by the role decorator.
-  After investigation, I discovered that the JWT payload was only encoding the user ID and username, not the role.
-  As a result, the system could not verify the user's role.
-  To resolve this, I included the role in the JWT payload within auth.service.ts and updated jwt.strategy.ts accordingly.
- With this change, access to protected routes based on roles began functioning correctly.


## License

[MIT](https://choosealicense.com/licenses/mit/)


![Logo](https://docs.nestjs.com/assets/logo-small-gradient.svg)


## Related

Here are some related projects

[Awesome README](https://github.com/matiassingers/awesome-readme)


## Running Tests

To run tests, run the following command

```bash
  npm run test
```
unit tests : 
 ```
 
 npm run test
 ```

 e2e tests : 
```
$ npm run test:e2e
```
test coverage: 
```

 npm run test:cov
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/AtiqBytes/nestjs-security-authentication-authorization.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start:dev
```

