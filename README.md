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
    query: { A: B },
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
> ​ h1=item.title
>
> ​ p= item.description

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

<br/>

### Video configuration on DB, Node

- console.dir

  - find location

- middleware to upload video file & give URL

  - multer
    - give url of the file
    - makes files in /videos directory
    - creates path:
  - middleware.js modification
  - videoRouter.js
    - at post method, add "uploadVideo"

- display videos on /Home without URL error

  - delete /videos

  - middlewares.js

    - dest: "uploads/videos/" \*\*\*NO SLASH

      - > dest: "/uploads/videos/"
        >
        > the videos will be put at the root of the hardware dir.

  - manipulate MongoDB with commands

    - ```mariadb
      > use youtube_clone
      switched to db youtube_clone
      > show collections
      videos
      > db.videos.remove({})
      WriteResult({ "nRemoved" : 2 })
      > db.collection(videos).find({})
      ---Shows a list of elements in the collection---
      > exit
      bye
      ```

  - app.js

    - create /uploads route
    - express.static()

- User Generated Content should be on a **SEPARATE** Server

  - Do **NOT** put CODE / FILE at the same Server

<br/>

### Get Video ID for Video Detail

1. modify videoController.js

   - > req.params = "/:id", not get anything when "/:id/something"

2. mongoose model.findById() -> [Link](https://mongoosejs.com/docs/api.html#model_Model.findById)

3. videoDetail.pug

   - display like youtube
   - create a button for editing video
     - routes.js
       - modify const to function

4. videoRouter.js

   - change .get request from const to function()

<br/>

### GET = .render || POST = .update, .redirect

<br/>

### Editing a Video

1. videoController.js

   - separate getEditVideo, postEditVideo

2. videoRouter.js

   - separate get, post

3. get id as a parameter from the URL

4. at editVideo page, show video's title and description

   - pass video object when rendering

     > 1. res.render("editVideo", { pageTitle: `Edit ${video.title}`, video })
     >
     > 2. at editVideo.pug, value prop
     > 3. value=video.title
     > 4. textarea does not have value
     >    - textarea(_name_="description", _placeholder_="Description")=video.description

5. check URL for editVideo

<br/>

### Update Video

1. videoController.js

   - modify postEditVideo

2. mongoose

   - model.findOneAndUpdate -> [Link](https://mongoosejs.com/docs/tutorials/findoneandupdate.html)

   - save

<br/>

### Delete Video

- only GET

1. routes.js
   - modify deleteVideo route
2. editVideo.pug
3. videoRouter.js
4. videoController.js
   - mongoose -> [findOneAndRemove](https://mongoosejs.com/docs/api/model.html#model_Model.findOneAndRemove)

<br/>

### Cleanups - minor fixes

- old videos ordered at the top

  - videoController.js
    - .sort(-1)
    - newest one first

- search - **ESLint**

  - Linter

    - automatic code checker

    - > npm install eslint -g //global use
      >
      > eslint --init

    - eslint prettier single quotes

      - > npm install eslint-config-prettier

    - npm uninstall

- search

  - regex -> [Link](https://regex101.com/)

  - videoController.js

    - > \${regex}

  - search.pug

    - add id
    - modify vidoeFile

<br/>

<br/>

## Frontend: Webpack

- bundler

- > npm install webpack webpack-cli

- will look for webpack.config.js

- have to teach each .fileExtensions to webpack

<br/>

### Styles with Webpack

1. webpack.config.js

   - > const MODE = process.env.WEBPACK_ENV

   - \*[WEBPACK error](https://www.npmjs.com/package/cross-env)

     - download cross-env

   - add loaders to webpack (webpack processes the written code order backwards)

     - module > rules
     - from .scss to .css
       - extract text plugin
     - from .css to many more css for use
     - [sass-loader](https://github.com/webpack-contrib/sass-loader) [postcss-loader](https://github.com/postcss/postcss-loader) [css-loader](https://github.com/webpack-contrib/css-loader)

2. enable JS by Webpack

   - babel-loader
   - "webpack -w" watch, keep on running when changed
   - main.pug
     - add <link></link> and script
     - let the server know to add "/static" path
   - \*regeneratorRuntime is not defined
     - when there is only ASYNC not followed by AWAIT
     - @babel/polyfill [Link](https://babeljs.io/docs/en/babel-polyfill)
       - .JS that fixes home
       - restart the servers

<br/>

<br/>

## Frontend: Styling

- reset.scss

  - puts everything into default

- main.scss

  - min-height
    - have footer at the desired location

- exclusively sass file = "\_sass.scss"

- forms

  - middlewares.js
    - delete authenticated

- > nodemon --ignore 'scss'

<br/>

<br/>

## User Authentication

### Passport JS

- simple, easy to integrate
- [Link](http://www.passportjs.org/)
- What are cookies?
  - thing we can save on the browser
  - info that will be sent to backend everytime requests are sent
- install passport-local-mongoose

<br/>

### Local Authentication with Passport

- > npm i passport passport-local

- PassportJS - [createStrategy()](http://www.passportjs.org/docs/)

- serialization

  - what info should cookie have?
  - choose which fields to include to cookie

- deserialization

  - how to find the cookie ot convert to user?

- modify routing before all the post requests

<br/>

### Logging the User In & Sessions on Express

- middlewares pass information after next()

- install [express session](https://www.npmjs.com/package/express-session)

  - > npm install express-session

  - options

    - secret: a random string to encrypt session ID [random keygen](https://randomkeygen.com/)
    - at .env write `COOKIE_SECRET`
    - resave: true
    - saveUninitialized: false

- goal: to maintain session even if made changes to the server

<br/>

### MongoStore and Middlewares

- use database to store sessions
- [connect mongo](https://www.npmjs.com/package/connect-mongo)

- give CookieStore a connection to mongo
- protect routes
  - logged in user to go to "join"
  - create middleware
  - add security

<br/>

### Github Login

- passport-github - [Link](http://www.passportjs.org/packages/passport-github/)

- steps
  1. send user to github
  2. github will say "do you want to share?"
  3. github will send the information to my website with data
- save clientID, clientSecret on .env
- modify function that is executed after coming back from Github

- send user to github
  - modify routes.js
  - create callback function
- passport logout

- modify callback function
  - if found user, then return with null
  - if not found user, return the newUser

<br/>

### Recap on Authentication

- user, password authentication

  1. send POST with user, password
  2. mongoose automatically checks if password works
  3. passport puts it on cookie

- github authentication
  1. user goes to github website and authorizes
  2. github (auth) -> /auth/github/callback
  3. passport calls function "githubLoginCallback", gets profile data, find user by email etc
  4. it needs to execute cb(error?, user?)
  5. cookie = makeCookie(user), savedCookie = saveCookie(cookie), sendCookie(savedCookie)
  6. redirects to home

<br/>

### User Profile

- create new route "me"
- change middleware
  - the "user" variable was confused between the user variable provided by the controller or the middlewares
- redirect home is cannot find users id

<br/>

### Facebook Login

- [facebook developers](https://developers.facebook.com/)

- [passport-facebook](http://www.passportjs.org/packages/passport-facebook/)

- we need email and profile photo, but not getting them

- error

  - > URL을 읽어들일 수 없음: 앱 도메인에 포함되어 있지 않은 URL입니다. 이 URL을 읽어들이려면 앱 설정에서 앱 도메인 필드에 앱의 모든 도메인과 서브 도메인을 추가하세요.

  - need to make localhost https

    - [localtunnel](https://localtunnel.github.io/www/) => DOESN'T WORK
    - just for testing
    - [ngrok](https://ngrok.com/)
    - use cmd to execute

- get information by profileFields

<br/>

<br/>

## Relationships and Route Protection

### User Profile Styling and Security

- prevent user from modifying another user's account information

  - ```javascript
    if user.id === loggedUser.id
    // render the buttons for editing profile and changing password
    ```

<br/>

### Edit Profile GET and POST

- allow user to change profile photo

  - if file path is null?

  - ```javascript
    avatarUrl: file ? file.path : req.user.avatarUrl,
    ```

- be cautious about routing

<br/>

### Change Password

- https://github.com/saintedlama/passport-local-mongoose/#API-Documentation
- password is encrypted
- create GET and POST change password

<br/>

### Adding Creator to Video

- remove videos

  - > db.videos.delete({})

- upload video with user

  1. add creator at Video.js, Comment.js, and plus comment in User.js => Model

- in POST, there is user object inside request

- extracting the user ID from video model data

  - await Video.findById(id).populate();
    - can only use with FIELDS: ObjectId

- protect edit video

<br/>

### Protect Video Routes

- await Video.findById(id) is just the ID
- when clicked on the user, show videos uploaded by the user

<br/>

<br/>

## Custom Video Player

- problem

  - if logged out, cannot access video detail

    - loggedUser.id is not found

  - solution

    - > _res**.**locals**.**loggedUser_ = _req**.**user_ || _null_;
      >
      > _res**.**locals**.**loggedUser_ = _req**.**user_ || {};

- create frontend for video player

  1. create mixins
  2. create css styles

     - get icons from fontawesome.com

  3. create js file
     - "cannot read property" error
       - js files will be loaded to all pages because it is included in the footer
       - based on the element id, able functions or not able them
       - either declare let or do const + querySelector
     - create ids
       - play button
         - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
         - handlePlayClick
           - video.paused
       - before calling mixins, the javascript calls js files first, so no queryselectors are selected
       - pause button
       - volume button
       - mute button
       - fullscreen button
         - switch addEventListeners
         - https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
         - implemented with the vendor prefix:webkit
       - exit fullscreen button
       - time
         - duration, playback time
         - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
         - JS is run before the loading of the video, so time of duration is NaN
         - run getCurrentTime function with 1second interval
         - Math.floor(videoPlayer.currentTime)
       - volume bar
         - CSS styling
         - .pug, amending range parameters
         - JS - show different speaker characters
         - JS - correspond with mute

<br/>

<br/>

## Recording Video with JavaScript

### Getting User Media

- create basic CSS styling and HTML
- add JS - get stream from camera
  - https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices

<br/>

### Recording Video

- save the recorded video
- https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder
  - only have 1 onclick per button -> addEventListener!
  - "dataavailable"
    - when recording is ended, have access to the stream data
    - setTimeout 5000ms OR videoRecorder.start(1000)
- Process
  1. get the videoFile from event
  2. create link as <a> tag
  3. create URL from the videoFile
  4. provide name for the file with .webm || .mp4 extension
  5. append the link to the body as child
  6. pretend the download link has been clicked
- NOTE!
  - Duration is not provided

<br/>

<br/>

## API + AJAX

### Register Views

- AJAX

  - add to browser without browser loading
  - foundation for single page apps

- API
  - if an URL was visited with the right configuration
    - do something to the server
- How to add API, the whole routing URL?

  1. routes.js
     - configure the specific URLs
  2. videoController.js
     - add postRegisterView, async-await
     - try catch finally
     - change the number of views and save it to DB
  3. apiRouter.js
     - state the function to run when visited routes.registerView
  4. app.js
     - connect when localhost:4000/api + routing(GET request to routes.registerView)

- Axios

  - library => easier HTTP requests
  - Needed for returning StatusCode after API request

- fetch() for video player, axios for comments

- How to get the video ID?

  - ```javascript
    window.location.href.split("/videos/")[1];
    ```

- After watching the video -> send the API request to raise the views

  - @handleEnded()

<br/>

### Add Comment

- How to add comment API, and routing?

  1. routes.js
     - add comment URL
  2. videoController.js

     - add postAddComment

  3. apiRouter.js
     - add post request to routes.addComment

- videoController.js

  - make sure to populate comments

- send comments with AJAX

  - ```javascript
    const sendComment = async (comment) => {
      // axios.post is okay too
      const videoId = window.location.href.split("/videos/")[1];
      const response = await axios({
        url: `/api/${videoId}/comment`,
        method: "POST",
        data: {
          comment,
        },
      });
    };
    ```

- style the comments

- fake comments
  - listen to the status code from Axios
  - the populate() lists elements from **older to new**
    1. either reverse() on the frontend
    2. videoController.js, when adding comment, append it rather than push it
  - fake the number of comments
    - parseInt since the number is a string

<br/>

### Delete Comment

1. frontend

   - styling
   - icon

2. assets/deleteComment.js

   - ```javascript
     const deleteBtnArr = commentList.getElementsByClassName("jsDeleteButton");
     ```

   - deleteBtnArr is not an Array, it is HTMLCollection

     - not `forEach` method

     - ```javascript
       const deleteBtnArr = [
         ...commentList.getElementsByClassName("jsDeleteButton"),
       ];
       // to transform HTMLCollection to Array
       ```

     - ```javascript
       const deleteBtnArr = commentList.querySelectorAll(".jsDeleteButton");
       // This Works TOO!
       ```

<br/>

<br/>

## Deploy app

- Amazon S3

  - storage, folder
  - divided into buckets

  - make a public bucket

  - use multer to upload to bucket
  - IAM -> create new user
    - AmazonS3FullAccess
    - copy keyID, secret access key

<br/>

- at youtube_clone app
  - npm i aws-sdk multer-s3
  - multer -> multer-s3
    - change how video gets uploaded
    - middlewares.js
      - acl = access control lists
    - clean up URL paths in views

<br/>

- Blob Duration Bug

  - > npm i get-blob-duration

  - ```javascript
    const blob = await fetch(videoPlayer.src).then((response) =>
      response.blob()
    );
    // returning the blob
    ```

  - Amazon S3 CORS configuration

<br/>

- Migrate the DB to MongoLab
  - [MongoLab](https://mlab.com/)
  - create cluster
  - create database user
  - connect with the mlab
