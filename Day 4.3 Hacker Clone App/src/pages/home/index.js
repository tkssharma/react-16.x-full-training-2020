import React, { Component } from 'react';
import axios from 'axios';
import Layout from 'components/layout'
import Story from 'components/story';
import { Link } from 'react-router-dom';
import Loading from 'components/loading';

class Home extends Component {
  state = {
    loading: false,
    ids: null,
    news: null,
    size: 30,
    page: 0
  }

  componentDidUpdate = prev => {
    // On component update get page parameter from url
    // Check if its different then page value in state
    // If its different efetch stories based on new page and update state
    // This will render next batch of stories

    const page = this.props.match.params.page || 0;

    if(page !== this.state.page) {
      this.setState({ page, loading: true }, async () => {
        const news = await this.fetchStories()
        this.setState({ news, loading: false })
      })
    }
  }


  componentWillMount = async () => {
    // Check if page parameter exists and set it in state if it does
    // Fetch list of ids and after its finished set ids in state
    // Then call fetchStories method and set news in state

    this.base = 'https://hacker-news.firebaseio.com/v0'
    const url = `${this.base}/topstories.json`;
    const { match: { params: { page } } } = this.props;

    if(page) {
      this.setState({ page })
    }

    try {
      const ids = await axios.get(url);
      this.setState({ ids: ids.data, loading: true }, async () => {
        const news = await this.fetchStories()
        this.setState({ news, loading: false })
      })
    } catch (err) {
      this.setState({ news: false, loading: false })
      return false;
    }
  }


  fetchStories = async () => {
    // Get slice of ids to be fetched
    // Wait for all stories to be fetched
    // and then return the result

    try {
      const input = this.getSlice()
      const data = await Promise.all(input.map(link => axios.get(link)))
      return data.map(({ data }) => data)
    } catch (err) {
      return false;
    }
  }


  getSlice = () => {
    // Calculate slice of ids to be fetched
    // based on current page number and size from state

    const { page, size, ids } = this.state;
    const start = page * size;
    return ids.slice(start, start + size).map(id => {
      return `${this.base}/item/${id}.json`
    });
  }


  renderNews = () => {
    const { news, loading, page, size } = this.state;

    if(news === null || loading) {
      return <Loading text="Loading news..." />
    }

    if(!news || !news.length) {
      return <div className="loading">Nothing found.</div>
    }

    return news.map((item, index) =>
      <Story index={page * size + index + 1} key={item.id} data={item} />
    )
  }


  renderNavigation = () => {
    let { page, loading, news } = this.state;


    if(loading || !news || !news.length) {
      return null
    }

    return (
      <div className="page-nav">
        {+page ? <Link 
        className="page-nav-item"
        to={`/page/${+page - 1}`}>Back</Link> : null}

        <Link 
        className="page-nav-item"
        to={`/page/${+page + 1}`}>More</Link>
      </div>
    )
  }


  render() {
    return (
      <Layout>
        {this.renderNews()}
        {this.renderNavigation()}
      </Layout>
    );
  }
}

export default Home