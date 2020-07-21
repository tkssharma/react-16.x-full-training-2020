import React from 'react';
import Logo from './logo';
import Navigation from './navigation';
import Search from './serachBar';
import UserProfile from './profile';

const Header = (props) => {
		return (
			<header className="Header">
				<Logo />
				<Navigation />
				<Search onSubmit={props.onSubmit} />
				<UserProfile />
			</header>
		);
}

export default Header;