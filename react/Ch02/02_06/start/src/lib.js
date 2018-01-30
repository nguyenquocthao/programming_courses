import React from 'react'
import titles from './titles.json'

export const hello=(
	<h1 className='header' 
	style={{backgroundColor:'blue', color:'red'}}> 
	{'Hello ' + titles.hello} 
	</h1>
)