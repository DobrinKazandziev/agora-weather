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
	FORECAST_1_ITEMROW_CONTAINER: 'forecast-1-itemrow-container',
	FORECAST_1_ITEMROW_MAX_TEMP: 'forecast-1-itemrow-max-temp',
	FORECAST_1_ITEMROW_MIN_TEMP: 'forecast-1-itemrow-min-temp',
	FORECAST_1_DATE: 'forecast-1-date',
	FORECAST_1_WEATHER: 'forecast-1-weather',
	FORECAST_1_TEMPERATURE: 'forecast-1-temperature',
	FORECAST_1_HUMIDITY: 'forecast-1-humidity',
}
class Forecast1 extends Component {

	render() {
		const {min, max} = this.props;

		const ItemRow = (temp,className) => (
			<div className={cx(CLASS_NAMES.FORECAST_1_ITEMROW_CONTAINER,
				{[CLASS_NAMES.FORECAST_1_ITEMROW_MAX_TEMP]: className === CLASS_NAMES.FORECAST_1_ITEMROW_MAX_TEMP,
				[CLASS_NAMES.FORECAST_1_ITEMROW_MIN_TEMP]: className === CLASS_NAMES.FORECAST_1_ITEMROW_MIN_TEMP})}>
				<div className={CLASS_NAMES.FORECAST_1_DATE}>
					<span>{temp.date.format(DATE_FORMAT.MONTH_DAY)}<br /><br />{temp.date.format(DATE_FORMAT.HOURS)}</span>
				</div>
				<div className={CLASS_NAMES.FORECAST_1_WEATHER}>
					<div className={`owf owf-${temp.weather.id}`} />
					<div className={CLASS_NAMES.FORECAST_1_DESCRIPTION}>
						<span>{temp.weather.main}</span>
					</div>
				</div>
				<div className={CLASS_NAMES.FORECAST_1_TEMPERATURE}>
					<span>{temp.temp.toFixed(1)}&deg;</span>
				</div>
				<div className={CLASS_NAMES.FORECAST_1_HUMIDITY}>
					<span>{Math.round(temp.humidity)}%<br />humidity</span>
				</div>
			</div>
		)

		return (
			<div className={CLASS_NAMES.FORECAST_1_WRAPPER}>
				{ItemRow(max,CLASS_NAMES.FORECAST_1_ITEMROW_MAX_TEMP)}
				{ItemRow(min,CLASS_NAMES.FORECAST_1_ITEMROW_MIN_TEMP)}
			</div>
		);
	};
}

export default Forecast1;