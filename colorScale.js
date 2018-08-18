var svg = d3.select('svg');

//Append a defs (for definition) element to your SVG
var defs = svg.append("defs");

//Append a linearGradient element to the defs and give it a unique id
var linearGradient = defs.append("linearGradient")
    .attr("id", "linear-gradient");

//A color scale
var color = d3.scaleLinear()
    .domain(d3.ticks(0,100,9))
    .range(["#2c7bb6", "#00a6ca","#00ccbc","#90eb9d","#90eb9d","#ffff8c",
            "#f9d057","#e76818","#d7191c"]);

//Append multiple color stops by using D3's data/enter step
linearGradient.selectAll("stop")
    .data(color.range())
    .enter().append("stop")
    .attr("offset", function(d,i) { return i/(color.range().length-1); })
    .attr("stop-color", function(d) { return d; });

//Draw the rectangle and fill with gradient
svg.append("rect")
    .attr("width", 300)
    .attr("height", 20)
    .attr('x', 50)
    .attr('y', 30)
    .style("fill", "url(#linear-gradient)");