import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import { Input, Tooltip, Icon } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;
class OverviewTechnologyComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			repos: [],
			loading: true
		}
	}
	componentWillMount() {
		const { params } = this.props.match
		const name = params.name !== 'all' ? params.name : 'all';
		this.fetchRepos(name);
		//  
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.match.params !== this.props.match.params) {
			//Perform some operation
			this.setState({ loading: true });
			this.fetchRepos(nextProps.match.params.name)
		}
	}
	render() {
		return (
			<div className="instructions-container">
				<h1 className="center-text header-lg">Let's Begin Battle</h1>
				<Row>
					<Col span={12}>
						<div className="user-grid">
							<h5>User 1 Github UserName</h5>
							<Input
								placeholder="Enter your username"
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								suffix={
									<Tooltip title="Extra information">
										<Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
									</Tooltip>
								}
							/>
							<Card
								cover={<img alt="example" src="https://github.com/tkssharma.png" />}
							>
							<Meta
								title="Europe Street beat"
								description="www.instagram.com"
							/>
							</Card>
						</div>
					</Col>
					<Col span={12}>
						<div className="user-grid">
							<h5>User 2 Github UserName</h5>
							<Input
								placeholder="Enter your username"
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								suffix={
									<Tooltip title="Extra information">
										<Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
									</Tooltip>
								}
							/>
							<Card
								cover={<img alt="example" src="https://github.com/tkssharma.png" />}
							>
							<Meta
								title="Europe Street beat"
								description="www.instagram.com"
							/>
							</Card>
						</div>
					</Col>
				</Row>
			</div>

		)
	}
	fetchRepos(tag) {
		const techTag = tag !== 'all' ? `language:${tag}` : '';
		return axios({
			method: 'get',
			url: `https://api.github.com/search/repositories?q=stars:%3E1+${techTag}&sort=stars&order=desc&type=Repositories`,
		}).then((response) => {
			this.setState({ repos: response.data.items, loading: false });
		}).catch(() => {
			this.setState({ loading: false });
		})
	}
}
export default OverviewTechnologyComponent;
