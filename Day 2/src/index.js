import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
import Loading from './components/loading';
import _ from 'lodash';
// import App from './App';
const API_KEY = 'AIzaSyApMflkROuwEwL96D5Og1VRzS6fLzR8mzs';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }
  componentDidMount() {
    this.videoSearch('surfboards');
  }
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        videos={this.state.videos}
      />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
