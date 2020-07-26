import React from 'react';

const Hero = (props) => {

		return (
			<div id="hero" className="Hero" style={{backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)'}}>
				<div className="content">
					<img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="" />
					<h2>Season 2 now available</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
					<div className="button-wrapper">
					<a href="#" className="Button primary">Watch now</a>
					<a href="#" className="Button">+ My list</a>
					</div>
				</div>
				<div className="overlay"></div>
			</div>
		);
}
export default Hero;
