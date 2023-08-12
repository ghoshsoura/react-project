import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hemispheredis from './Hemispheredis';


class App extends React.Component{

  state = {latitude : null, errormessage: ''}
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState( {latitude:position.coords.latitude})
      },
      (error) => {
        this.setState( {errormessage:error.message})
      }
    );
  }

  render(){
    if(!this.state.latitude && this.state.errormessage){
        return <div>{this.state.errormessage}</div>
      }
    if(this.state.latitude && !this.state.errormessage){
      return <div><Hemispheredis latitude = {this.state.latitude} /></div>
    }
    else{
      return <div>Loading....</div>
    }
    
  }
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
