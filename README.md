Valky
=====

A simple utility to deep search an object and return a key of a value.

[![Build Status](https://travis-ci.org/whoisandie/valky.svg?branch=v0.0.1)](https://travis-ci.org/whoisandie/valky)
[![npm version](https://badge.fury.io/js/valky.svg)](http://badge.fury.io/js/valky)

## Quickstart

Install the module from npm as shown

```js
npm install valky
```

Define an object as shown

```js
var myObject = {
    name: 'Application',
    port: 9001,
    database: {
        host: 'localhost',
        ports: {
            one: 27012,
            two: 27013
        },
        user: 'user',
        pass: 'pass'
    }
};
```

To get the key of a specific value, use the valky lib as shown

```js
var valky = require('valky');

var appKey = valky(myObject, 'Application');
var dbUserKey = valky(myObject, 'user');
var dbPassKey = valky(myObject, 'pass');

var dbHostOne = valky(myObject, 27012);
var dbHostTwo = valky(myObject, 27013);

console.log(appKey);
console.log(dbUserKey);
console.log(dbPassKey);

// Logs out name
// Logs out database.user
// Logs out database.pass

console.log(dbHostOne);
console.log(dbHostTwo);
// Logs out database.ports.one
// Logs out database.ports.two
```

Valky also works with custom delimiters, specify it as a third parameter.

```js
var valky = require('valky');

var dbHostOne = valky(myObject, 27012, '_');
var dbHostTwo = valky(myObject, 27013, '_');

console.log(dbHostOne);
console.log(dbHostTwo);
// Logs out database_ports_one
// Logs out database_ports_two
```

**NOTE:** If the value of two keys are same, the key-val pair first detected takes precedence.

## Tests

Clone the repo using `git clone https://github.com/whoisandie/valky.git`, cd into the directory
install the dependencies & run the test command as shown.

```bash
npm install
npm test
```

## Contribution

Want to make a contribution ? Cool! Fork the repo, tweak, add your changes, submit a pull request :) And yes contributions will be appreciated !

- Fork the repo
- Clone the repo
- Install the dependencies via `npm install`
- Make your changes & push to github
- Create a new pull request

Cheers (:

## License

The MIT License (MIT)

Copyright (c) 2014 Bhargav Anand

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

