import React, { Component } from 'react';
import moment from 'moment';
import { fetchForecastByCityName } from '../../services/openweathermap/openweathermap';

import ForecastView from './components/ForecastView/ForecastView';

class Forecast5 extends Component {

	state = {
		loading: false,
		forecast: [],
		minMaxTemp: {
			min: {
				temp: null,
				idx: null
			},
			max: {
				temp: null,
				idx: null
			}
		}
	}

	componentWillMount() {
		//this.getForecastData();
	}

	componentDidUpdate(prevProps) {
		if (this.props.cityName !== prevProps.cityName) {
			this.getForecastData();
		}
	}


 findMinMaxTemp (result) {
	let maxTemp=-100,minTemp=100;
	let maxTempIdx=-1,minTempIdx=-1;
	result.list.forEach((item,index) => {
		if (item.main.temp > maxTemp) {
			maxTemp=item.main.temp;
			maxTempIdx = index;
		}
		if (item.main.temp < minTemp) {
			minTemp=item.main.temp;
			minTempIdx = index;
		}
	});
	this.setState({
		minMaxTemp: {
			min: {
				temp: minTemp,
				idx: minTempIdx
			},
			max: {
				temp: maxTemp,
				idx: maxTempIdx
			}
		}
	});
}

	async getForecastData() {
		this.setState({ loading: true });
		const result = await fetchForecastByCityName(this.props.cityName);
		const forecast= (result.cod === "404" || result.message ==="city not found") ? {} : this.handleForecast(result);
		this.setState({
			loading: false,
			forecast: forecast
		});
	}

	handleForecast(result) {
		console.log("handleForecast.result",result);
		this.findMinMaxTemp(result);
		const handledForecast = result.list.map((item,index) => {
			return ({
				date: moment(item.dt * 1000),
				temp: item.main.temp,
				humidity: item.main.humidity,
				weather: item.weather[0],
			});
		});
		return handledForecast;
	}

	render() {
		return (
			<ForecastView
				cityName={this.props.cityName}
				forecast={this.state.forecast}
				loading={this.state.loading}
				onPressRefresh={() => this.getForecastData()}
				onButtonSubmit={() => this.getForecastData()}
				minMaxTemp={this.state.minMaxTemp}
			/>
		);
	}
}

export default Forecast5;