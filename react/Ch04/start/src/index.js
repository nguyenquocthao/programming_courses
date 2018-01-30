import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import {App} from './components/App'

window.React = React

// render(
// 	<SkiDayCount total={true}/>,
// 	document.getElementById('react-container')
// 	)

render(
	<App/>,
	document.getElementById('react-container')
)