# Node Packages via npm
npm is a package manager for javascript and is the default package  manager for node js.

There are a plethora of npm packages availavle to you via https://www.npmjs.com/

Some examples of useful packages that are included:

* UUID - Create unique identifiers (https://www.npmjs.com/package/uuid)
* Moment - Parse and manipute dates and times (https://www.npmjs.com/package/moment)
* aws-sdk - The official AWS SDK for JavaScript (https://www.npmjs.com/package/aws-sdk)
* Gulp - Streaming build system (https://www.npmjs.com/package/gulp)
* Express - Fast, unopinionated, minimalist web framework for node (https://www.npmjs.com/package/express)

More on express is a bit...

## Getting Started

Any node application that utilizes node packages will include a package.json file.  This file describes the dependencies your application has.

When you install a node package a node_modules folder is created for you and the node modules are pulled down from npm and installed there.

By convention you do not want to commit the node_modules folder to source control.  You only want to check your code into source control.

## Initializing 

To inialize your application with a package.json file run the following command:

```
npm init
```

This will ask you several questions about your application and then create the package.json file for you.

## Installing Packages

To install packages run the following command

```
npm install --save moment
```

This will pull the moment package down from npm, install it to node_modules, and add a new dependency for moment to your package.json with the mersion of the moment package being used.  Open your package.json and you'll now see that the following has been added.

```
"dependencies": {
    "moment": "^2.24.0"
},
```

Typically when you checkout any node application from git (or any other repo) the first thing you'll need to do is install the dependencies so you can run the application.

The following command will install all of the dependencies defined in the application's package.json file.

```
npm install
```

For more information and details on using npm check out the following link:

https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/


