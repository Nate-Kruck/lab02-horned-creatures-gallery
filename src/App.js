import React, { Component } from 'react'
import './App.css'
//import ImageItem from './ImageItem.js'
import Header from './Header.js'
import ImageList from './ImageList.js'
import images from './data.js'



export default class App extends Component {

  state = {
      filter: images,
      filterResult: ''
  }

  handleFilterChange = (e) => {
    const filterResult = e.target.value
    this.setState({filter: images.filter(image => image.keyword === filterResult)});
    this.setState({filterResult: e.target.value})
  }



  render() {
  return (
    
    <div className="App">
      <header className="App-header">
        
        <Header />
        </header>
        <div className="Filter">
          <p>Filter</p>
          <select onChange={ this.handleFilterChange }>
          </select>

        </div>
        
        <ImageList images={ this.state.filter }/>
        
    </div>
    
  );
}
}


