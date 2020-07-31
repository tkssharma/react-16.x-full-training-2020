import React, { Component } from 'react';
import Comment from 'components/comment';
import Loading from 'components/loading';

class Comments extends Component {
  render() {
    let { data } = this.props;

    if(data === null) {
      return <Loading text="Loading comments..." />
    }

    if(data === false) {
      return null;
    }

    if(!data.length) {
      return <div 
      className="text-light">
      No comments found.</div>
    }

    return (
      <div>
        {data.map(comment =>
          <Comment 
          key={comment.id} 
          data={comment} />)}
      </div>
    )
  }
}

export default Comments