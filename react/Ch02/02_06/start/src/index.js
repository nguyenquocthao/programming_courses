//const { render } = ReactDOM
import React from 'react'
import {render} from 'react-dom'
import {hello} from './lib'

render(
	<div>
	<h1 id='title'
		className='header'
		style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
	Hello!	
	</h1>
	{hello}
	</div>,
	document.getElementById('react-container')
)