import React from 'react';
import Item from '../Item';
class  SerachList extends React.Component {
	render() {
		if(this.props.data.results) {
			var titles = this.props.data.results.map(function(title, i) {
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
			<div className="TitleList" data-loaded={true}>
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

export default SerachList;