When you're building something in node beyond just simple procedural scripts you'll likely want to start using objects and classes.

Since NodeJS uses modern javascript you'll have access to all ES6 features including classes and inheritence.

For more information on the features avaiable to use in ES6 check out the info here: http://es6-features.org/

This example shows the traditional shape concept with a shape base class that defines a calculateArea method.  That method is then overloaded by the circle and rectangle classes to use the specific are clalculations for circles and rectangles.

To run the following example:

```
node index.js
```