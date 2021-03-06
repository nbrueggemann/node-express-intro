# Intro to Express

https://expressjs.com/

Now that we know a bit about npm packages we can introduce Express.  Express is a npm package and it claims to be a "Fast, unopinionated, minimalist web framework for Node.js"

So what is a web framework?  Essentially a web framework provides the libraries you need in order to build a service that can respond to HTTP requests (GET POST PUT etc) that it receives.  With this you can build things from static websites to APIs.  We'll be focusing mainly on the APIs.

## Setup

This project was setup by running:

```
npm init -y
npm install --save express
```

## Your First Route

With express you'll define routes.  These routes are paths to resources you want to interact with.

A defined route of / will execute when a GET request is made against localhost:3000

Whereas a defined route of /my-tasks will execute when a GET request is made against localhost:3000/my-tasks.

The index.js file defines a route that responds when a get request is made on the root URL (/). 

To run this example do the following:

```
node index.js
```

When you run this it should log out that a server is listening on port 3000.
If you receive an error that says: Error: listen EADDRINUSE: address already in use :::3000 it means that there is an app already running that's using port 3000.  Either close that app or pick a different port for this app.

Now that the app is running ipen a browser and enter the url:  http://localhost:3000

This should print: Hello World! in your browser.

## Introducing Postman

We can successfully test our route that uses GET with the browser.  Routes that use POST are a little bit more complex.  One of the best tools I've come across to test any web services is Postman (https://www.postman.com/)

Now using Postman change the GET to a POST and send a request to the following url: localhost:3000/handlePost

You should get back a response of:

```
{
    "message": "This is a response that returns JSON"
}
```

For almost everything I typically do I use either a GET or a POST and even eith those 2 options I typically favor POST over GET simply because it gives me some additional flexibility in the information I can pass from the client (typically a browser) and the express server.