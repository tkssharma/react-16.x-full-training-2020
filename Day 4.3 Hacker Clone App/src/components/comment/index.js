import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Comments from 'components/comments';

class Comment extends Component {
  state = {
    show: true
  }

  toggle = (e) => {
    e.preventDefault();
    this.setState(({ show }) => ({ show: !show }))
  }


  renderNestedComments = () => {
    let { data } = this.props;
    let { show } = this.state;

    if(!data.comments || !show) {
      return null;
    }

    if(!data.comments.length) {
      return null;
    }

    return <div className="nested-comments">
      <Comments data={data.comments} />
    </div>
  }


  renderInfo = () => {
    let { show } = this.state;
    let { data } = this.props;

    const dateParsed = moment.unix(data.time)
    const date = moment(dateParsed, "YYYYMMDD").fromNow()
    const toggle = show ? '-' : '+'

    return (
      <div className="comment-info">
        <Link to={`/user/${data.by}`}>
          <span>{data.by}</span>
        </Link>

        <span className="comment-date">{date}</span>

        <button
        onClick={this.toggle}
        className="comments-toggle link-button"
        href="#">[ {toggle} ]</button>
      </div>
    )
  }


  renderBody = () => {
    let { data } = this.props;
    let { show } = this.state;

    if(!show) {
      return null;
    }

    return <div 
    className={`comment-body`}
    dangerouslySetInnerHTML={{__html: data.text}}></div>
  }


  render() {
    let { data } = this.props;

    if(!data || data.deleted) {
      return null;
    }

    return (
      <div className="comment">
        {this.renderInfo()}
        {this.renderBody()}
        {this.renderNestedComments()}
      </div>
    );
  }
}

export default Comment