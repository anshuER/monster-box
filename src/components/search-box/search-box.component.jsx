import React from 'react'
import './search-box.styles.css'

export const SearchBox=({placeholder,handleChange})=>(
   // <input className='search' type='search' placeholder='text' onChange={e=>this.setState({searchField:e.target.value})}
        // e=>{this.setState({searchField:e.target.value},()=>console.log(this.state));}}
        <input className='search' type='search' placeholder={placeholder} onChange={handleChange}
         />
);