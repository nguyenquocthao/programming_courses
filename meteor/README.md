# METEOR
- Project: soccer team management tool
	1. Set up development environment
	2. Going through refresher in react while creating initial player view
	3. Backend with Meteor
	4. Create a chart for stats
- Go to [www.meteor.com](www.meteor.com) to install

## 1. Setting Up
- Atom plugin, packages: language-babel, language-javascript-jsx, meteor-api, meteor-snippets
- Sublime text: babel, reactjs, react es6 snippets, tern js, meteor autocomplete
- Chrome plugin: react developer tools, meteor devTools; ctrl+shift+j, go to tab meteor, react (netflix)
- `meteor create nameOfProject`: create new meteor project
- `meteor`: start app on localhost:3000
- `meteor npm install --save react react-dom`
- Turn on to see hidden files, so can open/edit hidden files on editor
- change meteor version on .meteor/local/release
- ES6 syntax

## 2. React Refresher: Basic Player View
- React is a javascript framework that helps us build big and fast web applications.
- Principle: web applications is composed of reusable components
- Components: every object is a component
- Stateless need parent component (stateful) to do something.
- props: pass data from a stateful parent to a child component
- `meteor`: run meteor
- `meteor npm install --save material-ui`: materialize CSS styles and creating components with it
- `meteor npm install --save react-tap-event-plugin`
	- **react-tap-event-plugin@2.0.0**. version 1.0.0 is incompatible
	- -> meteor server restarted when changing/install
- `render()`: use on stateful component
- In application:
	- in client/main.html: delete template,... only left behind head & body
	- change title, h1
	- Add font to tag head by going to [fonts.google.com](fonts.google.com)
	- delete main.js, create main.jsx in folder client
	- create folder imports, in imports create api, ui: in order to separate context into our own file structure; import other files using es6 approach, meteor only bundle files imported
	- create ui/app.jsx, ui/Player.jsx, ui/Team-List.jsx, ui-Team-stats.jsx
	- In main.jsx
```
		import React from 'react';
		import {Meteor} from 'meteor/meteor';
		import {render} from 'react-dom';
		import injectTapEventPlugin from 'react-tap-event-plugin';

		import App from '../imports/ui/App.jsx'
		injectTapEventPlugin();

		Meteor.startup(() => {
  		render(<App />, document.getElementById('render-target'));
		});
```
- client files: html file: main.html; main jsx file: main.jsx. In main.jsx (render website), import from folder `imports`
- `imports`: save files, components for other files to import, include api, ui (user interface): App.jsx, Player.jsx, Team-list.jsx, Team-stats.jsx, each file export component with the same name as file
- App.jsx use `import {MuiThemeProvider} from 'material-ui/styles'` and `import {RaisedButton, AppBar} from 'material-ui'`
- [material-ui.com](material-ui.com): google's react component, go to website example code
- Player.jsx use `import {Card, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card'`, `import {RaisedButton, Avatar, Chip} from 'material-ui'`, `import {blue200, blue900} from 'material-ui/styles/colors'`
- images saved in folder `publics`, in code only need `<img src='player.jpg' />`
- create inline: `display: 'flex', flexWrap: 'wrap'`
- setup static data: in App.jsx, add method `getPlayer()`, return object, element start with `_id: `
- App.jsx use `import {List} from 'material-ui/List'`, `import {Divider} from 'material-ui'`
- Team-list.jsx use `import {Avatar} from 'material-ui'`, `import {ListItem} from 'material-ui/List'`
- on browser, click tab react, see react components
- `meteor add installs packages`
- App.jsx add application state: in class, method `constructor`, `this.state={}`; method `componentWillMount()`, `this.setState({})`; can see state in tab react in browser

## 3. Reduce Player Stats
- meteor use mongodb for database, install tools like npm
- in project, .meteor folder: file packages: meteor packages used by project (`meteor add` or `meteor remove`); release: version of meteor; version: version of packages
- [atmospherejs.com](atmospherejs.com): packages for meteor
- can browse in `node_modules/material-ui` for components
- yarn: a new package manager for JavaScript, Facebook package manager: `sudo npm install -g yarn`; run in folder: `yarn`, `yarn add react-router`
- react-router: in main.jsx, `import {Router, Route, browserHistory} from 'react-router';`
- in imports/ui, add Example.jsx and Lost.jsx
- in main.jsx:
```
	import {Router, Route, browerHistory} from 'react-router';

	Meteor.startup(() => {
 	render((
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/example" component={Example}/>
      <Route path="*" component={Lost}/>
    </Router>
  	), document.getElementById('render-target'));
	});
```
- in packages, add `aldeed:collection2`
- add api/players.js (create schema for Player):
```
	import {Mongo} from 'meteor/mongo';

	export const Players=new Mongo.Collection('players');
	const PlayerSchema = new SimpleSchema({
		name: {type:String},
		team: {type: String},
		balManipulation: {type: Number, defaultValue: 0},
		...,
		notes: {type: String, optional: true}
	});
	Players.attachSchema(PlayerSchema);
```
- rename Example.jsx to New.jsx
- in tag `input`, `textarea`,... `ref` refers to the key in schema (use in component: `this.refs.<name>.value`)
- jsx: use className `row` and `col`, `select` and `option`, remember to `event.preventDefault();`, `Players.insert()`, `browserHistory.push('/');`
- New.jsx: render form to create new player
- main.js: `import {Players}`
- in `packages`, add `react-meteor-data`; `yarn add react-addons-pure-render-mixin`
- Secure database transactions (create, delete, update collections): database insertion into collection on server and using Meteor.call method from client
- Change the version of Meteor into the release file inside of the Meteor folder
- Publish and subscribe approach in Meteor: to control data sent from server to client
- App.jsx: `import {createContainer} from 'meteor/react-meteor-data'`
	- `App.propTypes=`
	- `export default createContainer(() => {})`
- `meteor add accounts-ui accounts-facebook`
	- `accounts-facebook` has error; need to be fixed
- `yarn add bcrypt`
- `meteor npm rebuild`
- add file ui/AccountWrapper.jsx: import `React, {Component}`, `ReactDOM`, `{Template} from 'meteor/emplating';`, `{Blaze} from 'meteor/blaze'`
- Register app with facebook:
	- go to [https://developers.facebook.com](https://developers.facebook.com)
	- click Create application (show frame *Create a new app ID*), click *Create App ID*
	- in a new page, click Dashboard, show name of application
	- **Create new secret key**
	- copy Application ID, secret key and paste to pop-up in `localhost:3000` 
	- ctrl - to zoom in, click *Save Configuration*
	- Copy url (localhost:3000), go to [https://developers.facebook.com](https://developers.facebook.com), click *Choose Platform*, *Webpage*, paste to *Site URL*
	- go back to localhost:3000 and *SIGN IN WITH FACEBOOK*
- Using schema: validate type of data as inserting into the database
- AccountsWrapper.js: create login facebook function
- using `meteor-user/account`
- New.jsx, schema: `owner: Meteor.userId()` (String)
- App.jsx: `Meteor.subscribe()`, `Meteor.userId()`
- main.css: edit styles
- Secure DB transactions with server methods: packages: remove insecure
	- `Meteor.publish('players', function(){})`: a named API on the server that constructs a set of data to send to a client
	- `Meteor.subscribe('players')`: clients connect to a publication and receives data, keep up to date with the server 
	- `Mongo.Collection#find([selector], [options])`: example `Player.find({owner: user}, {sort: {name:1}})`, options: `sort`, `skip`, `limit`, `fields`,...; return a cursor provide `fetch`, `map`, `forEach`, `observe`, `observerChanges`
- create server/methods.js, server/main.js
- replace `Players.insert` by `Meteor.call('insertPlayer', player, (error) =>{})`
- `Meteor.methods` and `Meteor.call`: meteor's remote procedure call system to write database:
	- `Meteor.methods(obj)`: in `obj` is methods defined. Example: 
```
	Meteor.methods({ 
		insertPlayer(player){Players.insert(player);},
		updatePlayer(player){Players.update(player._id, {$set: player})},
		deletePlayer(playerId){Players.remove(playerId);}
		})
```
	- `Meteor.call(nameOfMethod, arg, (err, res) => {})`
- players.js: `Players.allow({})`, `Players.deny({})`
- In object, can write function member by <name>(args){}

## 4. Players CRUD and Team View

### Project outline

- **.meteor**: store info about meteor and packages of meteor
	- **local**: built when first run application, has info of facebook authorization, is ignored by git
	- **.gitignore**: ignore *local*
	- **.id**: contains a token that is unique to project
	- **packages**: meteor packages used by project, edit by `meteor add`, `meteor remove` or edit by hand. **IMPORTANT**: use `accounts-facebook@1.1.0` and `facebook-oauth@1.3.0` to avoid *Internal Server Error*
	- **release**: meteor version
	- **versions**: versions of meteor packages 
- **client**: 
	- **main.css**: styles for website
	- **main.html**: basic layouts for website, has link to fonts and materialize
	- **main.jsx**: basic render, has info about route
- **imports**: for client and server to import
	- **api**: mongo collections
		- **players.js**: create schema and collection for Players and exports Players
	- **ui**: rendering user interface
		- **AccountsWrapper.jsx**: facebook login button & config
		- **App.jsx**: user interface at localhost:3000
			- import from 'material-ui', {createContainer} from 'meteor/react-meteor-data', {Link} from 'react-router'
			- import other files from folder *ui*
			- tempPlayer to show when haven't choosen player
			- class App constructor: set state `currentPlayer`, `showEditPlayer`, bind `this.updateCurrentPlayer`, `this.showEditForm`, `this.showTeamStats`
			- `renderPlayers()` from props players, using TeamList passing props player and updateCurrentPlayer
			- `updateCurrentPlayer(player)`, `showEditForm()`, `showTeamStats()` (set state showEditPlayer to false)
			- `showForm()` return component `Edit` if showEditPlayer, else return `TeamStats`
			- `render()`, set `App.propTypes`
			- `createContainer(() => {}, App)`: a wrapper around App, re-render when reactive data changes. First function can pass props, return props of component. Can use `shouldComponentUpdate` to avoid re-render
			- `Meteor.subscribe('players')`: subscribe to `players` from server/main.js. Can check by calling `ready()` 
		- **EditPlayer.jsx**: Edit component, exported to App
		- **Lost.jsx**: show in invalid url
		- **Player.jsx**: show info of a player and allow to edit
		- **Team-list.jsx**: use in method renderPlayers() of App.jsx, clicking can delete and update player
		- **Team-stats.jsx**: show team stats using chart of chartjs:
			- `import {Radar} from 'react-chartjs-2'`
			- `arr.reduce(callback[, initialValue])`: applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
				- callback = `(accumulator, currentValue, currentIndex, array) => {return value;}`
				- example: `let a = [1,3].reduce((acc, val) => (acc+val+','), ''); \\'1,3,'`
- **node_modules**: stored modules installed for nodejs, is ignored by git
- **public**: store resources as image
	- **player.jpg**: player picture
- **server**:
	- **main.js**: publish `players`, return cursor to all Players
	- **methods.js**: define methods using `Meteor.methods({})`
- **.gitignore**: ignore files in git
- **package.json**: store info about packages for nodejs
- **yarn.lock**: store info about packages managed by yarn