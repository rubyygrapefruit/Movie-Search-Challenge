import React, { Component } from 'react';
import Search from './Components/Search.jsx';
import MovieList from './Components/MovieList.jsx';
import ReactPaginate from 'react-paginate';
import './App.css';
const axios = require('axios');
const API_KEY = require('./config.js').API_KEY;

class App extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			selectedPage: 1,
			title: '',
			pageCount: 1,
		};
		this.getData = this.getData.bind(this);
		this.rottenMeter = this.rottenMeter.bind(this);
		this.handlePageChange = this.handlePageChange.bind(this);
	}

	rottenMeter(num) {
		if (num >= 7.5) {
			return <img className = "icon" src = "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/global/cf-lg.3c29eff04f2.png" alt = ""></img>
		}
		if (num < 7.5 && num >= 6) {
			return <img className = "icon" src = "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/global/new-fresh-lg.12e316e31d2.png" alt = ""></img>

		} else {
			return <img className = "icon" src = "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/global/new-rotten-lg.ecdfcf9596f.png" alt = "" ></img>
		}
	}

	getData(title) {
		const { selectedPage } = this.state;
		axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}&page=${selectedPage}`)
			.then((res) => {
				this.setState({
					movies: res.data.results,
					pageCount: res.data.total_pages,
					title,
				});
			})
			.catch((err) => {
				console.log(err, 'Data retrieval failed');
			});
	}

	handlePageChange({ selected }) {
		const { title } = this.state;
		this.setState({
			selectedPage: selected + 1,
		}, () => {
			this.getData(title)
		});
	}


	render() {
		const { movies, pageCount } = this.state;
		return (
		<div>
			<h1> Movie Search App </h1>
			<Search getData = { this.getData }/>
			<div>
				{ movies.length > 0 &&
					( <div>
						<ReactPaginate
						pageClassName={'paginate'}
						previousLabel={'<'}
						nextLabel={'>'}
						pageCount={ pageCount }
						onPageChange={ this.handlePageChange }
						containerClassName={'pagination'}
						activeClassName={'active'}
						/>
						<MovieList movies={ movies } rottenMeter={ this.rottenMeter	}
						/>
						</div>
					)
				}
			</div>
		</div>
		);
	}
}

export default App;

