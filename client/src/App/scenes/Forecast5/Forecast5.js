import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
import { fetchForecastByCityName } from '../../services/openweathermap/openweathermap';

import ForecastView from './components/ForecastView/ForecastView';

const initialState = {
	loading: false,
	loaded: false,
	forecast: []
}
class Forecast5 extends Component {
	constructor() {
    super();
    this.state = initialState;
  }

	componentDidUpdate(prevProps) {
		if (this.props.cityName !== prevProps.cityName) {
			this.getForecastData();
		}
	}

	async getForecastData() {
		const {cityName} = this.props;
		this.setState({
			loading: true,
			loaded: false
		});
		const result = await fetchForecastByCityName(cityName);
		const forecast = (result.cod === "404" || result.message ==="city not found") ? {} : this.handleForecast5(result.list); //TODO: handle no data from api
		this.setState({
			loading: false,
			loaded: true,
			forecast: forecast
		});
	}

	handleForecast5(list) {
		return _.values(list.reduce((acc, item) => {
			const date = item.dt_txt.split(' ')[0];
			const {dt,weather} = item;
			const {temp,humidity} = item.main;
			if (acc[date]) {
				if (acc[date].max.temp !== temp) {
					if (acc[date].max.temp < temp) {
						acc[date].max.temp = temp;
						acc[date].max.date = moment(dt * 1000);
						acc[date].max.humidity = humidity;
						acc[date].max.weather = weather[0];
					}
				}
				if (acc[date].min.temp !== temp) {
					if (acc[date].min.temp > temp) {
						acc[date].min.temp = temp;
						acc[date].min.date = moment(dt* 1000);
						acc[date].min.humidity = humidity;
						acc[date].min.weather = weather[0];
					}
				}
			} else {
				acc[date] = {
					max: {
						temp: temp,
						date: moment(dt * 1000),
						humidity: humidity,
						weather: weather[0]
					},
					min: {
						temp: temp,
						date: moment(dt * 1000),
						humidity: humidity,
						weather: weather[0]
					}
				};
			}
			return acc;
		}, {}));
	}

	render() {
		const {cityName, } = this.props;
		const {forecast, loading, loaded} = this.state;
		return (
			<ForecastView
				cityName={cityName}
				forecast={forecast}
				loading={loading}
				loaded={loaded}
				onPressRefresh={() => this.getForecastData()}
				onButtonSubmit={() => this.getForecastData()}
			/>
		);
	}
}

export default Forecast5;