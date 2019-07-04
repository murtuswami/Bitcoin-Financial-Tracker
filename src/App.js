import React from 'react';
import logo from './logo.svg';
import './App.css';
import Prices from './Prices'
import Convertor from './Convertor'
import News from './news'

class App extends React.Component {
  constructor(props){
    super(props);
   this.state ={currentTab:"Prices"}
   this.changeTab = this.changeTab.bind(this);
  }
  changeTab(event){
    console.log(event.target.value);
    this.setState({currentTab:event.target.value})
  }
  render(){
    let innerCode;
    switch(this.state.currentTab){
      case "Prices":
      innerCode =<Prices />
      break;
      case "Convertor":
      innerCode = <Convertor />
      break;
      case "News":
      innerCode = <News />
      break;
    }
    return (
      <div className="CryptoPriceApp">
        <header className="App-header">
        <button id = "tab1" value ="Prices" onClick = {this.changeTab}>Prices</button>
        <button id = "tab2" value = "Convertor" onClick = {this.changeTab}>Convertor</button>
        <button id = "tab3" value = "News" onClick = {this.changeTab}>News</button>
        <div id ="displayWindow">
        {innerCode}
        </div>
      
        </header>
    
      </div>
);

}
}

export default App;
