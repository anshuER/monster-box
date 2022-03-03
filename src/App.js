
import React, { Component } from 'react'



import { CardList } from './components/card-list/card_list.component';
import { SearchBox } from './components/search-box/search-box.component';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    // this.handleChange=this.handleChange.bind(this);  if we do not use arrow function then we have to bind here to use 'this' and setstate method 
  }
// this is new change
  // apiCall = async() => {
  //   try {
  //     let res = await fetch('https://jsonplaceholder.typicode.com/users');
  //     let data = await res.json();
  //     this.setState({ monsters: data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  componentDidMount() {
    // this.apiCall();
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(x => this.setState({ monsters: x }))
      .catch(err => console.log('api call error', err))
  }
  handleChange=(e)=> {    
    //  arrow function directly bind this function to the app function so that we can use this to access methods
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    //const monsters=this.state.monsters;//same as above
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        {/* <input type='search' placeholder='text' onChange={e=>this.setState({searchField:e.target.value})}
        // e=>{this.setState({searchField:e.target.value},()=>console.log(this.state));}}
         /> */}
        <h1 style={{color:'#0ccac4',fontFamily:'Bigelow Rules',fontSize:'100px',textAlign:'center'}}>Monster Box</h1>
        <SearchBox 
          placeholder='Search Monster'
          handleChange={this.handleChange}
          
        //  handleChange={e=>this.setState({searchField:e.target.value})}
        />
        <CardList monsters={filterMonsters} />
      </div>
    )
  }
}

