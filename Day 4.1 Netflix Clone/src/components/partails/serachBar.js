import React,{useState} from 'react';

const  Search = (props) => { 
	    const [value, setValue] = useState('');
	    const onSubmit = (e) => {
			e.preventDefault();
			props.onSubmit(value);
		}
		const handleChange = (e) => {
		  setValue(e.target.value);
		}
		return (
			<form onSubmit={onSubmit} id="search" className="Search">
				<input value={value} type="search" onChange={handleChange} placeholder="Search for a title..." />
			</form>
		);
}

export default Search;