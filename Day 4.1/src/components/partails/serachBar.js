import React from 'react';
const  Search = (props) => { 
		return (
			<form onSubmit={props.onSubmit} id="search" className="Search">
				<input type="search" placeholder="Search for a title..." />
			</form>
		);
}

export default Search;