import React from 'react';
import logo from './logo.svg';
import Chart from './chart'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
class PricesTab extends React.Component {
constructor(props){
    super(props);
    this.state={startDate:new Date("2019-03-5"),endDate:new Date()}
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
}

handleStartChange(date){
    console.log(date);
    this.setState({startDate:date})
}

handleEndChange(date){
    console.log(date);
    this.setState({endDate:date})
}
render(){
    return (
   
        <div id="prices-container">
        
        <div id = "displaySelection">
      
        </div>
        <Chart 
            start = {this.state.startDate}
            end = {this.state.endDate}
        />
        <div id="dropDownContainer">
   
           <DatePicker 
             selected={this.state.startDate}
             onChange={this.handleStartChange}
           />
        
            <DatePicker 
             selected={this.state.endDate}
             onChange={this.handleEndChange}
           />
        </div>
        </div>
        

    );
}


}

export default PricesTab