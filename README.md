Badger-Env
==========

### Rails + React + ES6 + Webpack

Minimal environment designed for use by Badger Academy, created by Sam White 

#### Setup
Rails
```
bundle install
bundle exec rake db:migrate
```
Node (including React, Browserify, ES6 through Babel, ...)
```
npm install
```
To Run:
```
webpack
rails server
```
Server will now be running at http://localhost:3000, displaying a basic React component which can be found in `app/assets/components/javascripts/components/DemoComponent.jsx`.

### Todo

- Add SASS/SCSS compilation to webpack
- Add rspec for rails tests
- Add some front-end testing framework
- ..?

*** This README is a work in progress ***
