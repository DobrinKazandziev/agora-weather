import React from 'react';
import Loading from '../../../../components/Loading/Loading';
import Item from './components/Item/Item';

import './ForecastView.scss';

const formatCityName = cityName => {
	console.log("ForecastView.formatCityName.cityName",cityName);
	const data = cityName.split(',');
	const city = data[0].substring(0, 1).toUpperCase() + data[0].substring(1);
	return `${city}, ${data[1].toUpperCase()}`;
}

const ForecastView = props => (
	<div className="ForecastView center pa4 br3 shadow-5">
		<div className="city-name">
			<span>{props.cityName.includes(',') ? formatCityName(props.cityName): props.cityName}</span>
		</div>
		<div className="reload">
			<button
				onClick={props.onPressRefresh}
				disabled={props.loading}
			>
				Refresh
			</button>
		</div>
		{props.loading ? (
			<Loading />
		) : (
			<div className="forecast-day">
				{props.forecast.map((item, index) => (
					<Item
						key={index}
						idx={index}
						minMaxTemp={props.minMaxTemp}
						{...item}
					/>
				))}
			</div>
		)}
	</div>
);

export default ForecastView;