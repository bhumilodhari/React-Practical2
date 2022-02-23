import React, { Component } from 'react';
import './App.css';
import img from '../assets/webpack.png';

class App extends Component{
   render(){
      return(
         <div className='main'>
            <h1 className='design'>Created React app using Webpack</h1>
            <img src={img}/>
         </div>
      );
   }
}
export default App;