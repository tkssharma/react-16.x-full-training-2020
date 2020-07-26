import React, { Component } from 'react';
import axios from 'axios';
import {Icon, Spin} from 'antd';
import RepoListItem from './repoListItemComponent';
class OverviewTechnologyComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			repos: [],
			loading: true
		}
	}
	componentDidlMount() {
		const { params } = this.props.match
		// this.props.match will give me route params 
		// /overview/:name // this.props.params.name 
		const name = params.name  !== 'all' ? params.name : 'all';
		this.fetchRepos(name);
		//  
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.match.params !== this.props.match.params){
		  //Perform some operation
		  this.setState({ loading: true });
		  this.fetchRepos(nextProps.match.params.name)
		}
	 }
	render() {
		const loading = <div className="loading"><Icon type="loading" style={{ fontSize: 24 }} spin /></div>;
		const Repos = <RepoListItem repos ={this.state.repos}/>
		return (
			  <div>
				{! this.state.loading ? Repos : <Spin indicator={loading} />} 
			 </div>
		)
	}
	fetchRepos(tag) {
		const techTag = tag !== 'all' ? `language:${tag}` : '';
		return axios({
			method: 'get',
			url: `https://api.github.com/search/repositories?q=stars:%3E1+${techTag}&sort=stars&order=desc&type=Repositories`,
		}).then((response) => {
			this.setState({ repos: response.data.items ,loading: false});
		}).catch(() => {
			this.setState({ loading: false });
		})
	}
}
export default OverviewTechnologyComponent;
