import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  handleChange(e){
    this.setState({term : e.target.value});
    if(this.state.term.length > 3){
      this.props.handleChange(this.state.term);
    }
  }

  render() {
    return (
      <div className="form-group">
        <input className="form-control"
          value={this.state.term}
          onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default SearchBar;
