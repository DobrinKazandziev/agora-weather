import React, { Component } from 'react';
import moment from 'moment';
import { fetchForecastByCityName } from '../../services/openweathermap/openweathermap';

import ForecastView from './components/ForecastView/ForecastView';

class Forecast5 extends Component {

	state = {
		//cityName: '',
		loading: false,
		forecast: [],
	}

	componentWillMount() {
		//this.getForecastData();
	}

	componentDidUpdate(prevProps) {
		if (this.props.cityName !== prevProps.cityName) {
			this.getForecastData();
		}
	}

	async getForecastData() {
		this.setState({ loading: true });
		setTimeout(async function () {
			const result = await fetchForecastByCityName(this.props.cityName);
			console.log("getForecastData().result:",result);
			const forecast= (result.cod === "404" || result.message ==="city not found") ? [] : this.handleForecast(result);

			this.setState({
				loading: false,
				forecast: forecast
			});
		}.bind(this), 5000);
	}

	handleForecast(result) {
		return result.list.map(item => ({
			date: moment(item.dt * 1000),
			temp: item.main.temp,
			humidity: item.main.humidity,
			weather: item.weather[0],
		}))
	}

	render() {
		return (
			<ForecastView
				cityName={this.props.cityName}
				forecast={this.state.forecast}
				loading={this.state.loading}
				onPressRefresh={() => this.getForecastData()}
				onButtonSubmit={() => this.getForecastData()}
			/>
		);
	}
}

export default Forecast5;