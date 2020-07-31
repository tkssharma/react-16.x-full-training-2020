import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spin } from 'antd';
import RepoListItem from './repoListItemComponent';


const OverviewTechnologyComponent = (props) => {

	const [respos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const { params } = props.match
		const name = params.name !== 'all' ? params.name : 'js';
		fetchRepos(name);
	}, [props.match.params.name]);

	const fetchRepos = (tag) => {
		const techTag = tag !== 'all' ? `language:${tag}` : '';
		return axios({
			method: 'get',
			url: `https://api.github.com/search/repositories?q=stars:%3E1+${techTag}&sort=stars&order=desc&type=Repositories`,
		}).then((response) => {
			setRepos(response.data.items);
			setLoading(false);
		}).catch(() => {
			setLoading(false);
		})
	}
	const Repos = <RepoListItem repos={respos} />
	return (
		<div>
			{!loading ? Repos : <Spin indicator={loading} />}
		</div>
	)
}
export default OverviewTechnologyComponent;
