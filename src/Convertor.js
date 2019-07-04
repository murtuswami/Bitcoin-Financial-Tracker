import React from 'react';

class Convertor extends React.Component {
constructor(props){
    super(props);
    this.state = {currentInput:"",currentOutput:"",inputCurrency:"BTC",outputCurrency:"USD",dataInp:"",dataOutpt:""}
    this.handleInput = this.handleInput.bind(this);
    this.handleInputType = this.handleInputType.bind(this);
    this.handleOutputType = this.handleOutputType.bind(this);
    this.apis = {"BTC":"https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD",
                "LTC":"https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD",
                "ETH":"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"
                }
}

handleInput(event){

 let input = event.target.value;
 if(input.charAt(0) == "0" && input.charAt(1) =="0")
    {input = input.slice(0,1) + input.slice(2);}
 if(input.charAt(0) == "0" && input.length == 2 && input.charAt(1) !=".")
    {input =  input.slice(1);}
this.setState({currentInput:input});
 // handle the data variables
 console.log(parseFloat(input));
 console.log(this.state.dataInp);
 console.log(this.state.dataOutpt);
 let output;
 if(event.target.value!= "") {output = (parseFloat(input)*this.state.dataInp.USD)/this.state.dataOutpt.USD;}
else{output = "";}
        console.log(output);
 this.setState({currentOutput:output})
}
componentDidMount(){
    fetch(this.apis["BTC"]).then(response => response.json()).then(data => this.setState({ dataInp:data,dataOutpt:{USD:1} }));
    
}

handleInputType(event){
 let inputType = event.target.value
this.setState({currentInputType:inputType,currentOutput:"",currentInput:""});  

if(inputType=="USD"){
    this.setState({dataInp :{USD:1}})
}
else   
{
   fetch(this.apis[inputType]).then(response => response.json()).then(data => this.setState({ dataInp:data }));
}

}

handleOutputType(event){
    let outputType = event.target.value;
    this.setState({outputCurrency:outputType,currentOutput:"",currentInput:""});
    if(outputType=="USD"){
        this.setState({dataOutpt :{USD:1}})
    }
    else   
    {
       fetch(this.apis[outputType]).then(response => response.json()).then(data => this.setState({ dataOutpt:data }));
    }
  
}


render(){
    return (
    <div id ="ConvContainer">
       
       <div id ="Conv">
        <input id = "currencyInput" type="number" onChange={this.handleInput} value={this.state.currentInput}></input>
        <select onChange = {this.handleInputType} value ={this.state.inputType} id = "inputList">
               <option value = "BTC">Bitcoin</option>
               <option value = "USD">USD</option>
               <option value = "ETH">ETH</option>
               <option value = "LTC">LTH</option>
               
        </select>
        <select onChange = {this.handleOutputType} value ={this.state.outputCurrency} id = "outputList">
               <option value = "USD">USD</option>
               <option value = "BTC">Bitcoin</option>
               <option value = "ETH">ETH</option>
               <option value = "LTC">LTH</option>
              
        </select>
                <div id="currencyOutput">{this.state.currentOutput} {this.state.outputCurrency}</div>
       </div>
      

    </div>

    );
}

}
export default Convertor;