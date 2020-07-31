import React, { Component } from 'react';
import axios from 'axios';
import Layout from 'components/layout';
import Story from 'components/story';
import Comments from 'components/comments';


class Item extends Component {
  state = {
    post: null,
    comments: null
  }

  fetchComments = async ids => {
    // If there is no ids on the post return empty array
    // Comments component will render no comments found

    if(!ids || !ids.length) {
      return []
    }

    // Wait for recursive async comments call to fetch all comments
    // Return all comments at once or return false on error

    try {
      const res = await Promise.all(ids.map(async id => {
        const url = `${this.baseURL}/${id}.json`
        const { data } = await axios.get(url)

        if(data.kids) {
          const comments = await this.fetchComments(data.kids);
          data.comments = comments;
        }

        return data;
      }));

      return res;
    } catch (err) {
      return false;
    }
  }


  fetchPost = async id => {
    try {
      const url = `${this.baseURL}/${id}.json`;
      const { data } = await axios.get(url);

      if(!data || data.type !== 'story') {
        throw new Error('Post not found.')
      }

      return data;
    } catch (err) {
      // If there is an error, set both post and comments values to false
      // Appropriate UI will be rendered for these values
      // Also return false

      this.setState({ post: false, comments: false })
      return false;
    }
  }


  componentWillMount = async () => {
    // Get id from url params
    // Wait for post fetch call to finish

    this.baseURL = 'https://hacker-news.firebaseio.com/v0/item';
    const { match: { params: { id } } } = this.props;
    const post = await this.fetchPost(id)

    // If call returned post, set state for post so Post Component is rendered
    // Then wait for fetch comments call to finish and set state for comments
    // Then Comments UI is rendered

    if(post) {
      this.setState({ post })
      const comments = await this.fetchComments(post.kids)
      this.setState({ comments })
    }
  }


  render() {
    let {
      post,
      comments
    } = this.state;

    return (
      <Layout>
        <Story single={true} data={post} />
        
        <div className="post-comments">
          <Comments data={comments} />
        </div>
      </Layout>
    );
  }
}

export default Item