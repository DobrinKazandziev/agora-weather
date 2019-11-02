import React, {Component} from 'react';
import Loading from '../../../../components/Loading/Loading';
import Item from './components/Item/Item';

import './ForecastView.scss';

const CLASS_NAMES = {
	FORECAST_VIEW_WRAPPER: 'forecast-view-wrapper',
	FORECAST_VIEW_CITY_NAME: 'forecast-view-city-name',
	FORECAST_VIEW_RELOAD: 'forecast-view-reload grow link', //grow,link are tacyons
	FORECAST_VIEW_FORECAST_DAY: 'forecast-view-forecast-day',
	FORECAST_VIEW_FORECAST_DAY_HEADER: 'forecast-view-forecast-day-header'
}

const formatCityName = cityName => {
	if (!cityName.includes(',')) {
		return cityName;
	}
	const data = cityName.split(',');
	const city = data[0].substring(0, 1).toUpperCase() + data[0].substring(1);
	return `${city}, ${data[1].toUpperCase()}`;
}

class ForecastView extends Component {
	render() {
		const {cityName, onPressRefresh, loading, loaded, forecast} = this.props;

		const formatedCityName = (
			<div className={CLASS_NAMES.FORECAST_VIEW_CITY_NAME}>
				<span>{formatCityName(cityName)}</span>
			</div>
		)

		const refreshButton = (
			<div className={CLASS_NAMES.FORECAST_VIEW_RELOAD}>
				<button
					onClick={onPressRefresh}
					disabled={loading}
				>
					Refresh
				</button>
			</div>
		)
		const ListItems = () => {
				return (
					<div className={CLASS_NAMES.FORECAST_VIEW_FORECAST_DAY}>
						<div className={CLASS_NAMES.FORECAST_VIEW_FORECAST_DAY_HEADER}>
							<span>Hottest</span>
							<span>Coldest</span>
						</div>
						{forecast.map((item, index) => (
							<Item
								key={index}
								idx={index}
								{...item}
							/>
						))}
					</div>
				)
		}

		return (
			<div className={CLASS_NAMES.FORECAST_VIEW_WRAPPER}>
				{formatedCityName}
				{refreshButton}
				{loading ? (
					<Loading />
				) : loaded && <ListItems />}
			</div>
		)
	}
};

export default ForecastView;