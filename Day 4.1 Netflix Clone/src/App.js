import React from 'react'
import $ from 'jquery';
import axios from 'axios';
import './assets/index.css';
import Header from './components/partails/header';
import Hero from './components/partails/hero';
import TitleList from './components/titleList';
import SerachList from './components/partails/search-resuts';
class App extends React.Component{
  
   constructor(props) {
     super(props)
     this.state = {
      data: []
     }
   }
	performSearch(val) {
		const apiKey = '87dfa1c669eea853da609d4968d294be'
		axios.get('https://api.themoviedb.org/3/search/multi?query=' + val + '&api_key=' + apiKey)
		  .then((data) => {
						this.setState({data: data.data});
			}).catch(err => {
				console.log(err);
						console.error(this.props.url, err.toString());
		  })
	}
	componentDidUpdate() {
	}
	render() {
		if(this.state.data.results) {
			console.log(this.state.data);
		}
		return (
			<div>
				<Header onSubmit={(val) => this.performSearch(val)} />
				<Hero />
				<SerachList data={this.state.data}/>
				<TitleList title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1' />
				<TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
				<TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
				<TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
				<TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />
			</div>
		);
  }
}

export default App;