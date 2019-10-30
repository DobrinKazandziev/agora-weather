import React, { Component } from 'react';

import 'owfont/css/owfont-regular.css';
import './Item.scss';

class Forecast1 extends Component {

	render() {
		const isHighestTemp = this.props.idx === this.props.minMaxTemp.max.idx;
		const isLowestTemp = this.props.idx === this.props.minMaxTemp.min.idx;

		return (
			<div className={isHighestTemp ? "Forecast1Red" : isLowestTemp ? "Forecast1Blue" : "Forecast1" }>
				<div className="date">
					<span>{this.props.date.format('MMM D')}<br /><br />{this.props.date.format('ha')}</span>
				</div>
				<div className="weather">
					<div className={`owf owf-${this.props.weather.id}`} />
					<div className="description">
						<span>{this.props.weather.main}</span>
					</div>
				</div>
				<div className="temperature">
					<span>{Math.round(this.props.temp)}&deg;</span>
				</div>
				<div className="humidity">
					<span>{Math.round(this.props.humidity)}%<br />humidity</span>
				</div>
			</div>
			);
		};
}

export default Forecast1;