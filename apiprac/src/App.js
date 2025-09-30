import { Component } from 'react';
import './App.css';
import axios from "axios";
import ArticleLis from './ArticlesList';

axios.defaults.baseURL = "https://hn.algolia.com/api/v1"

export class App extends Component{
state = {
  articles:[],
  
}

async componentDidMount(){
  const response = await axios.get("https://hn.algolia.com/api/v1/search?query=react");
  this.setState({articles:response.data.hits});
  console.log(this.setState({articles:response.data.hits}))
}

  render(){
    // const {articles} = this.state
    console.log(this.state.articles)
    return (
      <div>
        <ArticleLis articles={this.state.articles}/>
      </div>
    )
  }
}


  

export default App;
