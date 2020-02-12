# API test project
This is a NodeJS testing project which uses ES6, Mocha, Chai.
EcmaScript 6 features: http://es6-features.org

## Used NPM Packages
- @babel/cli
- @babel/core
- @babel/node - babel-node is a CLI that works exactly the same as the Node.js CLI, with the added benefit of compiling with Babel presets and plugins before running it
- @babel/preset-env - is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!
- @babel/register - tells Mocha that we use ES6
- chai - Assertion library
- lodash - Simplifies programming with strings, numbers, arrays, functions and objects (mapped to the underscore character)
- mocha -  Test framework
- mocha-logger - Logger for Mocha tests


## Run it locally:
1. Install the dependencies with:
```npm install ```

2. running tests locally
Precondition: you will have to run the application related docker containers first.
``` npm run test ```

3. running tests on dev environment:
```npm run test:dev```  
and you can replace the environment related part to stage or prod also.

### Run it in Docker container
not solved yet....

### Using the mocha-logger
```
mlog.log('This is .log()');
mlog.pending('This is .pending()');
mlog.success('This is .success()');
mlog.error('This is .error()');
```
