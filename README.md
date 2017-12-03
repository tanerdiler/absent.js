# Absent

[![Coverage Status](https://coveralls.io/repos/github/tanerdiler/absent.js/badge.svg)](https://coveralls.io/github/tanerdiler/absent.js)

Absent checks existence or blankness of a variable.                       
 
## What is the goal of this project?

This project allows you to make both undefined checking and null checking on one method call. This makes your code more clean.

## Installation

```bash
$ npm install --save absent
```

## Usage


```javascript
var helper = require('absent');


// null checking of null variable
var instance = null;
if( helper.isNull(instance) ) { ... }

var undefinedInstance;
if( helper.isNull(undefinedInstance) ) { ... }

var str = "";
if( helper.isBlank(str) ) { ... }

if( helper.isSet(str) ) { ... }

var isExist = false;

if( helper.not(isExist) ) { ... }
```
## Test

This module is well tested. You can run:

- `npm test` to run the tests under Node.js.

![Test results](https://github.com/tanerdiler/absent.js/blob/master/test-results.png)

## License

[MIT](LICENSE)

