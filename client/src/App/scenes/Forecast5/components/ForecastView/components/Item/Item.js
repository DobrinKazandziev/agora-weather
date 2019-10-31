import React, { Component } from 'react';
import cx from 'classnames';

import 'owfont/css/owfont-regular.css';
import './Item.scss';

const DATE_FORMAT = {
	MONTH_DAY : 'MMM D',
	HOURS : 'ha'
}

const CLASS_NAMES = {
	FORECAST_1_WRAPPER: 'forecast-1-wrapper',
	FORECAST_1_WRAPPER_MAX_TEMP: 'forecast-1-wrapper-max-temp',
	FORECAST_1_WRAPPER_MIN_TEMP: 'forecast-1-wrapper-min-temp',
	FORECAST_1_DATE: 'forecast-1-date',
	FORECAST_1_WEATHER: 'forecast-1-weather',
	FORECAST_1_DESCRIPTION: 'forecast-1-description',
	FORECAST_1_TEMPERATURE: 'forecast-1-temperature',
	FORECAST_1_HUMIDITY: 'forecast-1-humidity',
}
class Forecast1 extends Component {
cx
	render() {
		const {date, weather, temp, humidity} = this.props;

		const isHighestTemp = this.props.idx === this.props.minMaxTemp.max.idx;
		const isLowestTemp = this.props.idx === this.props.minMaxTemp.min.idx;

		return (
			<div className={cx(CLASS_NAMES.FORECAST_1_WRAPPER,
					{[CLASS_NAMES.FORECAST_1_WRAPPER_MAX_TEMP]:isHighestTemp,
					 [CLASS_NAMES.FORECAST_1_WRAPPER_MIN_TEMP]: isLowestTemp})}>
				<div className={CLASS_NAMES.FORECAST_1_DATE}>
					<span>{date.format(DATE_FORMAT.MONTH_DAY)}<br /><br />{date.format(DATE_FORMAT.HOURS)}</span>
				</div>
				<div className={CLASS_NAMES.FORECAST_1_WEATHER}>
					<div className={`owf owf-${this.props.weather.id}`} />
					<div className={CLASS_NAMES.FORECAST_1_DESCRIPTION}>
						<span>{weather.main}</span>
					</div>
				</div>
				<div className={CLASS_NAMES.FORECAST_1_TEMPERATURE}>
					<span>{Math.round(temp)}&deg;</span>
				</div>
				<div className={CLASS_NAMES.FORECAST_1_HUMIDITY}>
					<span>{Math.round(humidity)}%<br />humidity</span>
				</div>
			</div>
			);
		};
}

export default Forecast1;