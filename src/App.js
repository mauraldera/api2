import React, { Component } from 'react';
import axios from 'axios'

import './App.css';

const api = 'https://newsapi.org/v2/top-headlines?sources=die-zeit&apiKey=b23bcb8a7d654da0b55bfd08b6468dbc'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      news: []
    }
  }

  componentDidMount() {
    axios.get(api)
    .then(news => {
      console.log(news);
      this.setState({
        news: news.data.articles
      })
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.news.map((n, i)=>
          <div>
            <h6>{n.title}</h6>
            <a href={n.url}>{n.url}</a>
            <img src={n.urlToImage} />
          </div>
        )}
      </div>
    );
  }
}

export default App;