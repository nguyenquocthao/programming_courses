import {Component, PropTypes} from 'react'
import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

export class SkiDayCount extends Component{
	percentToDecimal(decimal){
		return ((decimal * 100) + '%')
	}
	calcGoalProgress(total, goal){
		return percentToDecimal(total/goal)
	}
	render(){
		return (
		<div className="ski-day-count">
			<div className="total-days">
				<span>{total}</span>
					<Calendar />
				<span>days</span>
			</div>
			<div className="powder-days">
				<span>{powder}</span>
					<SnowFlake />
				<span>days</span>
			</div>
			<div className="backcountry-days">
				<span>{backcountry}</span>
					<Terrain />
				<span>days</span>
			</div>
			<div>
				<span>
					{calcGoalProgress(
						total, 
						goal
					)}
				</span>
			</div>
		</div>
		)
	}
}
SkiDayCount.defaultProps={
			total: 40,
			powder: 30,
			backcountry: 20,
			goal: 75
}
SkiDayCount.propTypes: {
		total: PropTypes.number,
		powder: PropTypes.number,
		backcountry: PropTypes.number
}