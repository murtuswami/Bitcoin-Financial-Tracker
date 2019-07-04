import * as d3 from 'd3'

const createChart = (start,end)=>{
   console.log(start +" "+ end);
d3.json('https://api.coindesk.com/v1/bpi/historical/close.json?start='+start+'&end='+end).then(
    (data)=>{
        let dataAsArray =[];
        for(let [key, value] of Object.entries(data.bpi)){
        let key1 = `${key}`;
        let value1 = `${value}`
        dataAsArray.push({date:new Date(key1),value:value1});
        }
        next(dataAsArray)
    })


const next =  (data) =>
{   d3.select("svg").remove();
    let justDates = data.map((o)=> o.date);
 let justVals = data.map((o) => parseInt(o.value));
 console.log(data);

const svgWidth = (2000/100) *75;        //width and height are adjusted to value of container div (75% and 90%)
const svgHeight =(700 /100) * 90;   
const margin = { top: 50, right: 30, bottom: 20, left: 40 };  
const width = svgWidth - margin.left - margin.right;
const height = svgHeight - margin.top - margin.bottom;

    

 let svg = d3.select("#chart").append("svg").attr("width", width + margin.left + margin.right +"px")
 .attr("height", height + margin.top + margin.bottom +"px").append("g")
 .attr("height",height+"px")
 .attr("width", width +"px")
 .attr("transform", "translate(" + margin.left + ",10)");

 var focus = svg.append("g")                               
 .style("display", "none");   
 


// appending axis and line 
var x = d3.scaleTime().domain([d3.min(justDates),d3.max(justDates)]).range([0, width]);

var y = d3.scaleLinear().domain([0,d3.max(justVals)]).range([height,0]);

var line = d3.line().x((d)=> x(d.date)).y((d)=> y(d.value));
const xAxis = d3.axisBottom(x);
const yAxis = d3.axisLeft(y);
svg.append("g").attr("transform","translate(0,"+height+")").call(xAxis);
svg.append("g").call(yAxis);
svg.append("path").datum(data).attr("fill", "none").attr("stroke", "blue").attr("stroke-linejoin", "round").attr("stroke-linecap", "round").attr("stroke-width", 1.5).attr("d", line);

//coding in tooltip
focus.append("circle")                          
.attr("class", "y")                               
.style("fill", "white")                            
.style("stroke", "blue")                          
.attr("r", 4);

svg.append("rect")                                     
        .attr("width", width +"px")                             
        .attr("height", height + "px")                         
        .style("pointer-events", "all")                   
        .on("mouseover", function() { focus.style("display", null); })
        .on("mouseout", function() { focus.style("display", "none"); })
        .on("mousemove", mousemove)
        .attr("opacity","0.0").attr("fill","red")         

var bisectDate = d3.bisector(function(d) { return d.date; }).left; // **
  function mousemove() { 
        
        var x0 = x.invert(d3.mouse(this)[0]);            
        var   i = bisectDate(data, x0, 1);
        if(data[i] != undefined && data[i-1] != undefined)     {   
        var   d0 = data[i - 1];                      
        var    d1 = data[i];                             
         var   d = x0 - d0.date > d1.date - x0 ? d1 : d0;   
        console.log(d.date.getFullYear());
        focus.select("circle.y")                        
            .attr("transform",                             
                  "translate(" + x(d.date) + "," +        
                                 y(d.value) + ")")
                                 ;     
    d3.select("#displaySelection").html("Date:" + d.date.getDate().toString() + "-" + (d.date.getMonth()+1).toString()+ "-" + d.date.getFullYear().toString() + "   Value:" + d.value +" USD")
    }   
                                 
                            
    }
}   

}
export default createChart

