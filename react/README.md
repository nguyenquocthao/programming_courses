# REACT

## 1. What is React.js?
- React is a library for user interfaces
- React was created by Facebook & Instagram
- React Native for mobile
- Set up Chrome tools for React: use extension react-detector; page using React -> extension icon is blue; react developer tools for debugging react
- Efficient rendering with React: React uses DOM diffing to make minimum changes

## 2. Intro to JSX and Babel
- html file: add script to react and react-dom;
- `React.createElement(type, [props], [...children])`: `React.createElement('header', {type:'content'}, title, 'abc def')`
- `ReactDOM.render(element, domNode)`
- setup little server: `npm install -g httpster` (-g is global); use: `httpster -d <path-to-folder> -p <port>`, go to url localhost:<port>
- JSX: JavaScript XML. To use JSX, need transpiling
* Babel inline transpiling: translate for browser to understand; use Babel version 56:
	* Add link to babel library (cdnjs)
	* In tag script link to react file, add attribute `type='text/babel'`
	* Use httpster to create server
- Babel static transpiling:
	- In working directory (02_04/start): `npm init`, create package.json file
	- `npm install --save-dev babel-cli`: install babel-cli to dev dependencies
	- Or anywhere, `npm install -g babel-cli` to access babel in all folder
	- create file .babel: `'<link-to-sublime>' <link-to-.babelrc>'`
	- In .babelrc: `{ 'presets': ['latest', 'react', 'stage-0']}`
	- `npm install --save-dev babel-preset-latest babel-preset-react babel-preset-stage-0`
	- `babel <in-file> --out-file <out-file>`
	- in package.json, change scripts.test to script.start `'httpster -d ./dist -p 3000'`
	- in file html: unlink link to babel core, in script to .js, change type to text/javascript, source to output file of babel
	- `npm start`
- webpack: a module bundler to create static files and automate processes, automate update changes. Config: add file webpack.config.js; install webpack@1.13.3, babel-loader@6.2.5, webpack-dev-server@1.16.2 (install locally using --save-dev)
	- run webpack to compile: `webpack` (install webpack globally) or `./node_modules/.bin/webpack`
	- in package.json: change scripts.start to `./node_modules/.bin/webpack-dev-server`
	- `npm init`
- To close a port: `netstat -ano | findstr <port>` -> find pid (last column) -> `taskkill /f /pid <pid>`
- Loading JSON with webpack: 
	- `npm install --save react react-dom`
	- remove link to react, react-dom from html 
	- in folder src, create lib.js, titles.json 
	- in lib.js, import react and titles.json, export: `import React from 'react'`; `export const hello = ()`, `className=`, `backgroundColor:` 
	- in index.js, import and use. **Must** import React and react-dom
	- in webpack.config.js, in module.loaders, add `test: /\.json$/`, loader: "json-loader"
	- `npm install --save-dev json-loader`
	- `npm start`
- to install packages in package.json, `npm install`
- Adding CSS to webpack build:
	- in folder src create new folder stylesheets, create file hello.css
	- create goodbye.scss: use webpack to take scss and transpile into css: create variable `$bg-color: turquoise; .goodbye{background-color: $bg-color;}`
	- in webpack.config.js, add loader for .css: `'style-loader!css-loader!autoprefixer-loader'`
	- add loader for .scss: `'style-loader!css-loader!autoprefixer-loader!sass-loader'`
	- `npm install style-loader css-loader autoprefixer-loader sass-loader node-sass --save-dev`
	- in lib.js, import './stylesheets/goodbye.scss' and './stylesheets/hello.css'
- add `node_modules` to .gitignore_global and ignore file globally

## 3. React components
- In React, user interfaces are an organized collection of components
- create class: use `React.createClass({})`; method render(){}
- add React to window to prevent *React is not defined*: in index.js `window.React = React`
- jsx put value int, boolean in {}, except string
- `class <> extends React.Component{}`
- Adding react-icons: `npm install --save react-icons`

## 4. Props and state
- `this.props.children`: return everything in between a component's opening and closing JSX tags. If has >1 child, return an array; if has 1, not wrapped in an array
- `new Date('4/14/2016')`: create Date object
- spread operator `{...day}`
- Default props: 
	- in createClass function, add method getDefaultProps
	- class extends Component and stateless method: after declaration, add prop `defaultProps={}`. Need to bind methods in constructor: `this.<method> = this.<method>.bind(this)`
	- stateless method: can pass default argument
- PropTypes: supply a property type. If error, show in console, useful in debug
	- In createClass, add prop `propTypes:{},`, types `PropTypes.number`, `PropTypes.string`, `PropTypes.array`, `PropTypes.bool`, `PropTypes.instanceOf(<class>)`. Require: `PropTypes.<type>.isRequired`. Import PropTypes from react. To access property, use `this.props.<prop>`
	- ES6, stateless: `<class>.propTypes={}`
- Custom validation: instead of `PropTypes.<>`, use function; error -> `return new Error('')` else `return null` 
- State: state is not passed in from outside editing/saved; logged in/out. method: `getInitialState(){}`; access: `this.state.`
- When state change, automatically call render() => do not put setState in render() because it will cause infinite loop; when props change, do not automatically call render()
- `<array>.filer(function(val, id){})`: filter values pass function (return true)
	- Create app.js in components
- State with ES6 classes: 
	- `createClass`: have comma `,` between methods; `extends Component`: don't have comma `,`
- Markdown: to create nested list indented by a tab/4 spaces

## 5. Using the React Router
- route: path/url
- `npm install react-router@3.0.0 --save`
- `npm list -g --depth=0`: list globally installed npm packages and version
- import: `import {Router, Route, hashHistory} from 'react-router'`
```
	render(
		<Router history={hashHistory}>
			<Route path="/" component={App}/> //home page
			<Route path="*" component={Whoops404}/> //other pages
		</Router>,
		document.getElementbyId('react-container')
	)
```
- `Route path='add-day'` -> `this.props.location.pathname === "/add-day"`
- `import <Link> from 'react-router'`, `<Link to='/add-day' activeClassName=''><Link/>`
- `this.props.params.filer` -> get params filter in `list-days:filter`.
```
	<Route path='list-days' component={App}>
		<Route path=":filter" component={App} />
	</Route>
```

## 6. Forms and Refs
- jsx: `<label htmlFor="resort">Resort Name</label>`
- class reference: `<input ref='abc'/>` => `this.refs.abc.value`
- stateless reference: `<input ref={input=>_date=input}/>` => `let _date; _date.value`
- `<input type='checkbox' defaultChecked={}`
- Autocomplete:
```
	<input type='text' list='abc'/>
	<datalist id='abc'>
		<option key=0>a</option>
		<option key=1>b</option>
	</datalist>
```

## 7. The component lifecircle
- [https://facebook.github.io/react/docs/react-component.html](https://facebook.github.io/react/docs/react-component.html)
- Methods prefixed with `will` are called right before something happens.
- Methods prefixed with `did` are called right after something happens
- Component lifecircle methods can be used in createClass and ES6 Class components
- `Mount`: are called when an instance of a component is being created and inserted into the DOM
- `Update`:An update can be caused by changes to props or state. These methods are called when a component is being re-rendered
- `Unmount`: This method is called when a component is being removed from the DOM
- Examples: `componentDidMount`, `componentWillUnmount`
- `fetch(<url>).then(response=>response.json()).then(json=>json.results).then(members=>this.setState({}))`
- `componentWillMount`, `componentWillUpdate` (return components not update), `shouldComponentUpdate`
```
	componentWillUpdate(nextProps){
		this.style={
			backgroundColor: 
			(nextProps.admin) ? 'green':'purple'
		}
	}
```