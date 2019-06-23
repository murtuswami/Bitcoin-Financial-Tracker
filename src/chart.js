import React from 'react';
import logo from './logo.svg';
import drawChart from './drawChart'
class Chart extends React.Component {
    constructor(props){
        super(props);
    this.props = props;
    }
    componentDidMount(){
       
        
        console.log("mount");
    }
 
    render(){
       if(typeof this.props.start != "string"&& typeof this.props.end != "string"){
        let sMonth = this.props.start.getMonth().toString();
        if(sMonth.length ==1){sMonth = "0"+ sMonth}
        let sDay = this.props.start.getDate().toString();
        if(sDay.length ==1){sDay = "0"+ sDay}
        let eMonth = this.props.end.getMonth().toString();
        if(eMonth.length ==1){eMonth = "0"+ eMonth}
        let eDay = this.props.end.getDate().toString();
        if(eDay.length ==1){eDay = "0"+ eDay}
        console.log(typeof this.props.start);
        let inputStart = this.props.start.getFullYear().toString() + "-" + sMonth + "-" + sDay;
        let inputEnd = this.props.end.getFullYear().toString() + "-" + eMonth + "-" + eDay;

        drawChart(inputStart,inputEnd);
        
    
        }


       
        return (
          <div id="chart"></div>
    
        );
    }
    
    
    }
    
    export default Chart