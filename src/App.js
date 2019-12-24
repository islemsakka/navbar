
import './App.css';
import React, { Component } from 'react';
const  thenav=[{val:'home',href:'#'},{ href:'#' ,val:'service',sublist:['for employee','for students','for hobbyste']},{href:'#',val:'contact'}];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      service: false
     }
  }
  dropdown=()=>{ 
    this.setState({
      service:!this.state.service
    })
  }
  render() {
    console.log(this.state.service)
    return ( <ul className="App">
    {thenav.map((el,i)=> <li key={i} ><a onMouseLeave={el.val==='service'?()=>{this.setState({service:!this.state.service})}:console.log()} onMouseOver={el.val==='service'?this.dropdown:console.log()} href={el.href}>{el.val}</a>
    <ul className={this.state.service?'display':'hidd'} >{ el.sublist && el.sublist.map((e,j)=><li key={j}>{e}</li>)}</ul>
    </li>) }
   </ul> );
  }
}

 
export default App;