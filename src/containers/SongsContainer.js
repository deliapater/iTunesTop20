import React from 'react';
import HeaderContainer from '../components/HeaderContainer';
import ChartContainer from '../components/ChartContainer';

class SongsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
    };

  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
  }

  render(){
    return(
      <React.Fragment>
      <HeaderContainer/>
      <ChartContainer songs={this.state.songs} />
      </React.Fragment>
    );
  }
}

export default SongsContainer
