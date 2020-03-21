# Youtube Clone

## Introduction

- website vs web application
  - passive consumption vs interactive action
- Why VanilaJS?
  - start from passive website -> try to get close to web application

<br/>

<br/>

## NodeJS

### What is NodeJS?

- "Javascript outside of the browser"
  - mobile, desktop, etc

<br/>

### When use NodeJS?

- like JS, fast development, nothing to everything -> NodeJS
- robust -> Django(already concrete, like learning skiing), Laravel
- move a lot of data, database movement, realtime -> NodeJS
- data science, compress image, when need to use lot of computing power -> Django, Laravel

<br/>

### Who uses NodeJS?

- Paypal, Netflix, Uber

<br/>

<br/>

## ExpressJS

### What is ExpressJS?

- web framework for NodeJS -> [NodeJS](https://expressjs.com/)
- able to create a server with so much less lines of code

<br/>

### NPM

- [npm](https://www.npmjs.com/)

- Steps to interact with NPM

  1. > npm init

     - package.json is created

  2. > npm install express

  3. > npm i or npm install

     - looks for package.json -> "dependencies"
     - installs them

- create .gitignore

  - what to .gitignore in NodeJS -> [gitignore](https://github.com/github/gitignore/blob/master/Node.gitignore)

- Git: How to remove files listed in .gitignore but still on git repository?

  - [Link](https://stackoverflow.com/questions/13541615/how-to-remove-files-that-are-listed-in-the-gitignore-but-still-on-the-repositor/13541721)

- How to install NPM without adding to "Dependencies"?

  - > npm install nodemon -D

<br/>

### Start with Routing

- **index.js**

- Routing -> [ExpressJS link](https://expressjs.com/en/guide/routing.html)

  - > app.listen(3030, callback_function after start listening to PORT:3030);

<br/>

### Handle Routes

- GET
  - **request** for a page
  - NEED to **respond** something
- POST
  - send information to website, ex) login

<br/>

### Babel

- translates new JS to old JS -> [babel](https://babeljs.io/)

- > npm install @babel/node
  >
  > npm install @babel/preset-env
  >
  > create .babelrc
  >
  > npm intall @babel/core

<br/>

### \*Express Core: Middlewares

- "Middleman" between **requests** and **responses** -> [Middleware in ExpressJS](https://medium.com/@zibon/what-the-heck-is-a-middleware-in-expressjs-8f2661813ecd)

- middleware functions: check all requests before the server making responses

- 4 capable tasks(executing code, make changes to req-res, ending req-res cycle, calling next middleware)

- Examples of middlewares

  - checks if user is logged in or not
  - create logs of requests, responses
  - check the purpose of requests(e.g. upload files)

- Order Matters!

  - > app.use(middleware);
    >
    > app.get("/", function);
    >
    > app.get("/hello", function);

- morgan middleware

  - HTTP request logger middleware -> [morgan](https://www.npmjs.com/package/morgan)

- helmet middleware

  - secure Express app by setting various HTTP headers -> [helmet](https://www.npmjs.com/package/morgan)

- body-parser, cookie-parser middleware

  - from req, get information from body -> [body-parser](https://www.npmjs.com/package/body-parser)
  - from req, get information from cookie and handle session -> [cookie-parser](https://www.npmjs.com/package/cookie-parser)

<br/>

### \*Express Core: Routing

- (~~index.js~~ -> app.js) -> call the application

- init.js -> start the application

- router.js -> handle routes

- export vs export default

  - export

    - > import { someRouter } from "./router"

  - export default

    - > import app from "./app"

<br/>

### MVC Pattern

- model-view-controller pattern -> [Link](https://www.tutorialspoint.com/design_pattern/mvc_pattern.htm)
- Model: data
- View: how data looks like
- Controller: function that looks for the data

1. Separate the routes from the function

   - > _app**.**get_("/", someFunction); -> inacceptable!

2. create URLs

   - create routes.js to control other routers

   - > /:id -> value that can change
     >
     > const USER = "/:id"

3. Update each child routers

4. create controllers directory, add user and video controllers

<br/>

### Pug

- easy template for HTML
- install -> [Link](https://www.npmjs.com/package/pug)
- change the view engine of express to pug -> [app.set](https://expressjs.com/en/4x/api.html#app.set)

- "view" of express -> create "views" directory

#### Pug: Layouts

- views -> layouts -> create base template for HTML

#### Pug: Partials

- portion of a page to extract

- [fontawesome](https://fontawesome.com/icons?d=gallery) to add the icon

- > include ../partials/header

#### Pug: Local Variables

- add information to the template as a whole

- res.locals -> [Link](https://expressjs.com/en/4x/api.html#res.locals)

- can access from any view

#### Pug: Template Variables

- > _res**.**render_("path", { variable: "value" });

<br/>

### Search Controller

- ```javascript
  // Which one is more intuitive?
  const B = req.query.A;

  const {
    query: { A: B }
  } = req;
  ```

<br/>

### Designing each pages

- Home

- Search

- Join

- Login -> added social login

- \*\*\*users/edit-profile leads to User Detail page

  - in routes.js

    - ```javascript
      const VIDEO_DETAIL = "/:id";
      const EDIT_VIDEO = "/edit-profile";
      const CHANGE_PASSWORD = "/change-password";
      // node thinks that /edit-profile is /:id since it is declared at the next line
      ```

    - ```javascript
      // Solution => change the order of declaration in userRouter.js
      userRouter.get(routes.editProfile, editProfile);
      userRouter.get(routes.changePassword, changePassword);
      userRouter.get(routes.userDetail, userDetail);
      ```

- Edit Profile

- Change Password

- Upload

- Video Detail

- Edit Video

- Delete Video

<br/>

### Add fake db data array to Home page

> each item in videos
>
> ? h1=item.title
>
> ? p= item.description

<br/>

### Mixins

- element to repeat in multiple pages

- > "<video width="some" height="thing"></video>"

- function

- \*PUG

  - > h1 = video.title // WRONG!!! outputs "= video.title"
    >
    > h1=video.title OR h1= video.title

- Different Information, Same Structure

<br/>

### Modify Join, Login page

- divide get / post routes
  - check globalRouter.js
- return correct status code for passwords do not match

  - [status codes](https://www.tutorialspoint.com/http/http_status_codes.htm)

- how to show actual user page with /:id url?
  - middlewares.js
    - add user { id: 1}
  - routes.js
    - change routes from const to function
  - header.pug
    - modify a tag to link routes.userDeatil(user.id)

<br/>

### Logout, Upload pages and Security

- router

  - > router([url], [controller])

- controller

  - prepares **what to render** on the page based on the kinds of request

- > required=true for security

<br/>

<br/>

## MongoDB

### Setup

- download mongoDB Community Server -> [Link](https://www.mongodb.com/download-center/community)

- DATABASE: check mongod, is running

  - > then mongo

- How We Talk to DB => need adapter of JS -> mongoose.js

  - talk to db

<br/>

### Connecting to MongoDB

- connect at init.js, nor at videoController.js
- dotenv - hide keys and strings
  - to keep DB secret
  - DB username and password

<br/>

### Create Video Model

- model = actual data
- schema = structure

  - [mongoose_schema](https://mongoosejs.com/docs/guide.html)

- JS, mongoose is conscious, but MongoDB does not know created schema yet
  - so at init.js, import the Video model

<br/>

### Comment Model

- Relationship of Data: How do we relate Video & Comment models?
  - save video id on comment model
  - OR video model contains array of comment ids
- Finally have a working DB!

<br/>

### Finish Home Controller

- How do we use models?

  - videoController.js

    - > _import_ Video _from_ "../models/Video";

    - > export const home = async(req, res)
      >
      > await while getting all videos
      >
      > \*\*\*use Try {} Catch {}
