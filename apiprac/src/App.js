import { Component } from 'react';
import './App.css';
import "./index.css"
import axios from "axios";
import ArticleLis from './ArticlesList';


export class App extends Component{
state = {
  articles:[],
  
}

async componentDidMount(){
  const response = await axios.get("https://hn.algolia.com/api/v1/search?query=react");
  this.setState({ articles: response.data.hits });
}

  render(){
    return (
      <div>
        <ArticleLis articles={this.state.articles}/>
      </div>
    )
  }
}


  

export default App;
