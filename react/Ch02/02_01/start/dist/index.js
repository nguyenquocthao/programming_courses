const {render}=ReactDOM;
const title=React.createElement(
	'h1', {}, 'Hello world');
const content=React.createElement('p', {type:'content'}, title, 'abc def');
render(content, document.getElementById('react-container'));