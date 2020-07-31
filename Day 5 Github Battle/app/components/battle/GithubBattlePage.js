import React, { useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import { Input, Tooltip, Icon } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;
const Search = Input.Search;

const OverviewTechnologyComponent = () => {
	const [user1, setUser1] = useState({});
	const [user2, setUser2] = useState({});
	const getGithubProfile1 = (value) => {
		axios.get(`https://api.github.com/users/${value}`)
			.then(data => {
				setUser1(data.data);
			})
	}
	const getGithubProfile2 = (value) => {
		axios.get(`https://api.github.com/users/${value}`)
			.then(data => {
				setUser2(data.data);
			})
	}
	return (
		<div className="instructions-container">
			<h1 className="center-text header-lg">Let's Begin Battle</h1>
			<Row>
				<Col span={12}>
					<div className="user-grid">
						<h5>User 1 Github UserName</h5>
						<Search
							onSearch={getGithubProfile1}
							placeholder="Enter your username"
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							suffix={
								<Tooltip title="Extra information">
									<Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
								</Tooltip>
							}
						/>
						<Card
							cover={<img alt="example" src={user1.avatar_url} />}
						>
							<p>Name {user1.name}</p>
							<p>Company {user1.company}</p>
							<p>Location - {user1.location}</p>
							<Meta
								title={user1.public_repos}
								description={user1.followers}
							/>
						</Card>
					</div>
				</Col>
				<Col span={12}>
					<div className="user-grid">
						<h5>User 2 Github UserName</h5>
						<Search
							onSearch={getGithubProfile2}
							placeholder="Enter your username"
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							suffix={
								<Tooltip title="Extra information">
									<Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
								</Tooltip>
							}
						/>
						<Card
							cover={<img alt="example" src={user2.avatar_url} />}
						>
							<p>Name {user2.name}</p>
							<p>Company {user2.company}</p>
							<p>Location - {user2.location}</p>
							<Meta
								title={user2.public_repos}
								description={user2.followers}
							/>
						</Card>
					</div>
				</Col>
			</Row>
		</div>
	)
}
export default OverviewTechnologyComponent;
