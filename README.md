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
Node (including React, ES6 through Babel, Webpack ...)
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

- Change rails db to PostgreSQL instead of SQLite
- Add SASS/SCSS compilation to webpack
- Add rspec for rails tests
- Add some front-end testing framework
- ..?

**Please note: this README is a work in progress.**
