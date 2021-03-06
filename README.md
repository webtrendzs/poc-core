# OpenMRS Point of Care System
This is a demo repo to show how we can go about collaboration. Its an idea for now.

Each organization will have their own repo. For example Ampath will have [https://github.com/AMPATH/ampath-poc.git](https://github.com/webtrendzs/ampath-poc.git).

We will have the shared code in its on repo [https://github.com/webtrendzs/poc-shared.git](https://github.com/webtrendzs/poc-shared.git)

We will also have the core in its on repo(this repo). A production build will be made out of this core repo that will consume organizational repo and the shared repo as packages.

## Quick start
**Make sure you have Node version >= 5.0 and NPM >= 3**

### Shared repo
```bash
# clone poc-shared repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/webtrendzs/poc-shared.git

# change directory to poc-shared
cd poc-shared

# install the repo with npm
npm install

# build the repo
npm build

# create a npm symlink for local development
# this will create a symlink `poc-shared`
npm link

```
### Organizational repo
```bash
# clone ampath-poc repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/webtrendzs/ampath-poc.git

# change directory to ampath-poc repo
cd ampath-poc

# install the repo with npm
npm install

# build the repo
npm build

# create a npm symlink for local development
# this will create a symlink `ampath-poc`
npm link

# link with poc-shared package through the symlink
npm link poc-shared

```

### Core repo
```bash
# clone poc-core repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/webtrendzs/poc-core.git

# change directory to poc-core repo
cd poc-core

# install the repo with npm
npm install

# update ampath-poc and poc-shared symlinks in the core repo
# rem this will make the production build hence it needs all the packages
# this is the same as doing `npm install ampath-poc` only that your package is local hence the use of symlinks
npm link ampath-poc
npm link poc-shared

# start the app
npm start

```

Go to [http://localhost:3000](http://localhost:3000) in your browser.

**When you make changes to poc-shared or ampath-poc, make sure run `npm build` so that the changes can reflect in poc-core**

Below are seed specific settings you may not need for now. But good for your dev guidance

# Table of Contents
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
* [Configuration](#configuration)
* [Contributing](#contributing)
* [TypeScript](#typescript)
* [@Types](#types)
* [Frequently asked questions](#frequently-asked-questions)
* [Support, Questions, or Feedback](#support-questions-or-feedback)
* [License](#license)


## File Structure
This is the folder sturucture of the app
style, template, specs, e2e, and component class. Here's how it looks:
```
angular2-webpack-starter/
 ├──config/                    * our configuration
 |   ├──helpers.js             * helper functions for our configuration files
 |   ├──spec-bundle.js         * ignore this magic that sets up our angular 2 testing environment
 |   ├──karma.conf.js          * karma config for our unit tests
 |   ├──protractor.conf.js     * protractor config for our end-to-end tests
 │   ├──webpack.dev.js         * our development webpack config
 │   ├──webpack.prod.js        * our production webpack config
 │   └──webpack.test.js        * our testing webpack config
 │
 ├──src/                       * our source files that will be compiled to javascript
 |   ├──main.browser.ts        * our entry file for our browser environment
 │   │
 |   ├──index.html             * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts           * our polyfills file
 │   │
 |   ├──vendor.ts              * our vendor file
 │   │
 │   ├──app/                   * WebApp: folder
 │   │   ├──app.spec.ts        * a simple test of components in app.ts
 │   │   ├──app.e2e.ts         * a simple end-to-end test for /
 │   │   └──app.ts             * App.ts: a simple version of our App component components
 │   │
 │   └──assets/                * static assets are served here
 │       ├──icon/              * our list of icons from www.favicon-generator.org
 │       ├──service-worker.js  * ignore this. Web App service worker that's not complete yet
 │       ├──robots.txt         * for search engines to crawl your website
 │       └──humans.txt          * for humans to know who the developers are
 │
 │
 ├──tslint.json                * typescript lint config
 ├──typedoc.json               * typescript documentation generator
 ├──tsconfig.json              * config that webpack uses for typescript
 ├──package.json               * what npm uses to manage it's dependencies
 └──webpack.config.js          * webpack main configuration file

```

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v4.x.x`+ (or `v5.x.x`) and NPM `3.x.x`+

> If you have `nvm` installed, which is highly recommended (`brew install nvm`) you can do a `nvm install --lts && nvm use` in `$` to run with the latest Node LTS. You can also have this `zsh` done for you [automatically](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file) 

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typescript` (`npm install --global typescript`)
* `release-it` (`npm install --global release-it`)
## Releasing the app
* `checkout maintenance branch (git checkout -b 2.2.x or git checkout 2.2.x)`
* `npm run release`

## Installing
* `fork` this repo
* `clone` your fork
* `npm install webpack-dev-server rimraf webpack -g` to install required global dependencies
* `npm install` to install all dependencies
* `npm run server` to start the dev server in another tab

## Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).

### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```

## Other commands

### build files
```bash
# development
npm run build:dev
# production
npm run build:prod
```

### hot module replacement
```bash
npm run server:dev:hmr
```

### watch and build files
```bash
npm run watch
```

### run tests
```bash
npm run test
```

### watch and run our tests
```bash
npm run watch:test
```

### run end-to-end tests
```bash
# make sure you have your server running in another terminal
npm run e2e
```

### run webdriver (for end-to-end)
```bash
npm run webdriver:update
npm run webdriver:start
```

### run Protractor's elementExplorer (for end-to-end)
```bash
npm run webdriver:start
# in another terminal
npm run e2e:live
```

### build Docker
```bash
npm run build:docker
```

# Configuration
Configuration files live in `config/` we are currently using webpack, karma, and protractor for different stages of your application

# Contributing
You can include more examples as components but they must introduce a new concept such as `Home` component (separate folders), and Todo (services). I'll accept pretty much everything so feel free to open a Pull-Request

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 1.7.x includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## Use a TypeScript-aware editor
We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 10](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

### Visual Studio Code + Debugger for Chrome
> Install [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) and see docs for instructions to launch Chrome 

The included `.vscode` automatically connects to the webpack development server on port `3000`.

# Types
> When you include a module that doesn't include Type Definitions inside of the module you can include external Type Definitions with @types

i.e, to have youtube api support, run this command in terminal: 
```shell
npm i @types/youtube @types/gapi @types/gapi.youtube
``` 
In some cases where your code editor doesn't support Typescript 2 yet or these types weren't listed in ```tsconfig.json```, add these to **"src/custom-typings.d.ts"** to make peace with the compile check: 
```es6
import '@types/gapi.youtube';
import '@types/gapi';
import '@types/youtube';
```

## Custom Type Definitions
When including 3rd party modules you also need to include the type definition for the module
if they don't provide one within the module. You can try to install it with @types

```
npm install @types/node
npm install @types/lodash
```

If you can't find the type definition in the registry we can make an ambient definition in
this file for now. For example

```typescript
declare module "my-module" {
  export function doesSomething(value: string): string;
}
```


If you're prototyping and you will fix the types later you can also declare it as type any

```typescript
declare var assert: any;
declare var _: any;
declare var $: any;
```

If you're importing a module that uses Node.js modules which are CommonJS you need to import as

```typescript
import * as _ from 'lodash';
```


# Frequently asked questions

# Support, Questions, or Feedback
> Contact us anytime for anything about this repo or Angular 2

* [Chat: AngularClass.slack](http://angularclass.com/member-join/)
* [Twitter: @AngularClass](https://twitter.com/AngularClass)
* [Gitter: AngularClass/angular2-webpack-starter](https://gitter.im/angularclass/angular2-webpack-starter)

# How to add App Analytics as you code
> This project is configured with angulartics with piwik as the analytics provider. It is important to track events and actions as you code. Here is a basic quide on how to do this: 

* Provider: https://test1.ampath.or.ke/piwik 
* Default App: NG2-AMRS-Localhost

Import ```AppFeatureAnalytics``` Service in your component, service, directive or pipe

```es6
import { AppFeatureAnalytics } from '../../shared/services/app-feature-analytics.service.ts';
```

... and inject it 
 
```es6
constructor(private appFeatureAnalytics: AppFeatureAnalytics) {}
```
then call this.appFeatureAnalytics.trackEvent() with the following parameters
   * @param {string} category  --> The Module/Dashboard eg 'Patient Dashboard'
   * @param {string} action  --> The Feature you want to track eg 'Searching Patient'
   * @param {string} [name]  --> The name of the function trackEvent() fx was invoked eg 'searchPatient'
   
```es6

  public searchPatient(event: any) {
    //.... functionality of your method
    this.appFeatureAnalytics.trackEvent('Patient Dashboard', 'Searched Patient', 'searchPatient');
  }
```

___


# License
 [MIT](/LICENSE)
