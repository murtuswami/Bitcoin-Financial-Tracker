import React from 'react';
class News extends React.Component {
    constructor(props){
        super(props);
        this.state = {news:""};
    }
componentDidMount(){
    fetch('https://newsapi.org/v2/everything?q=crypto-currency&from=2019-06-03&sortBy=publishedAt&apiKey=17f809bbe646411d95e0f84f4251dc83').then(response => response.json()).then(data => this.setState({ news:data }));
}
 render(){
    let titles= [];
    if(this.state.news["articles"] != undefined)
    {
    
    console.log(this.state.news["articles"][1]);
    console.log(typeof this.state.news["articles"] );
    console.log(this.state.news["articles"].length)
    for(let i = 0; i<this.state.news["articles"].length;i++){
        titles.push(this.state.news["articles"][i]);
        }
  
    }
    console.log();
    
     return(
     <div id = "newsWindow">
         {
     titles.map((item,i) => <div><img src={item.urlToImage}   key={i +"image"}></img><p  key ={i +"title"}>{item.title}</p></div> )
         }
     </div>);
 }
}
export default News;
    