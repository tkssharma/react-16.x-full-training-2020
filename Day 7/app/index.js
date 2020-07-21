import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyApMflkROuwEwL96D5Og1VRzS6fLzR8mzs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    //this.youTubeSearch();
  }
  componentWillMount(){
    this.youTubeSearch();
  }
  handleChange(term){
     this.youTubeSearch(term);
  }
  youTubeSearch(term = 'surfboards'){
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
       <div className="app-container">
        <SearchBar handleChange={this.handleChange.bind(this)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
     </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
