import React, { Component } from 'react';
import '../App.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
		});
  }

  handleSubmit(event) {
    this.props.getData(this.state.title);
    event.preventDefault();
  }

  render() {
    return (
				<form onSubmit={this.handleSubmit}>
					<label>
						<input className="search" type="text" name ="title" value={this.state.value} onChange={this.handleChange} />
					</label>
				</form>
			);
  }
}

export default Search;
