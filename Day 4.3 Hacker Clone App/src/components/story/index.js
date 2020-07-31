import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';
import Loading from 'components/loading';

class Story extends Component {
  render() {
    let { data, index, single } = this.props;

    if(data === null) {
      return <Loading text="Loading post..." />
    }

    if(!data) {
      return <div 
      className="loading">
      Post not found.</div>
    }

    const dateParsed = moment.unix(data.time)
    const date = moment(dateParsed, "YYYYMMDD").fromNow()

    return (
      <div className="story">
        {index && <div className="story-index">{index}. </div>}
        
        <div className="story-body">
          <a 
          href={data.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="story-title no-decoration">{data.title}</a>

          <div className="story-info">
            <div className="story-points">
              <span>{data.score}</span>
              <span>points</span>
            </div>

            <div className="story-author">
              <span>by</span>
              <Link to={`/user/${data.by}`}>
                <span>{data.by}</span>
              </Link>
            </div>

            <div className="story-time no-margin">
              <span className="no-margin">{date}</span>
            </div>

            <span className="separator">|</span>

            <div className="story-comments">
              <Link to={`/item/${data.id}`}>
                <span>{data.descendants}</span>
                <span>comments</span>
              </Link>
            </div>
          </div>

          {single ? <button
          onClick={() => this.props.history.goBack()}
          className="link-button text-light back-button">&larr; Back</button> : null}
        </div>
      </div>
    );
  }
}

export default withRouter(Story)