import React from 'react';
import $ from 'jquery'; 
import Item from './Item';
import axios from 'axios';
class TitleList extends React.Component {
	 constructor(props){
			super(props);
			this.apiKey =  '87dfa1c669eea853da609d4968d294be';
			this.state = {
				data: [], mounted: false
			}
	 }

	loadContent() {
		// TBD replace this with axios 
		axios.get('https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.apiKey)
		.then((data) => {
					this.setState({data: data.data});
		}).catch(err => {
					console.error(this.props.url, err.toString());
		})
	}
	componentDidMount() {
		this.loadContent();
		this.setState({ mounted: true });
	}
	componentWillUnmount() {
		this.setState({ mounted: false });
	}
	render() {
		if(this.state.data.results) {
			var titles = this.state.data.results.map(function(title, i) {
				if(i < 5) {

					var backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
					if(!title.name) {
						var name = title.original_title;
					} else {
						var name = title.name;
					}
					return (
						<Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />
					);	

				}
			});	

		} else {
			var titles = '';
		}
		return (
			<div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
				<div className="Title">
					<h1>{this.props.title}</h1>
					<div className="titles-wrapper">
						{titles}
					</div>
				</div>
			</div>
		);
 }
}

export default TitleList;