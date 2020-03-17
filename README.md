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
