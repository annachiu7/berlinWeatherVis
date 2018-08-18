var svg = d3.select('svg');

//Append a defs (for definition) element to your SVG
var defs = svg.append("defs");

//Append a linearGradient element to the defs and give it a unique id
var linearGradient = defs.append("linearGradient")
    .attr("id", "linear-gradient");

// //Append multiple color stops by using D3's data/enter step
// linearGradient.selectAll("stop")
//     .data([
//         {offset: "0%", color: "#2c7bb6"},
//         {offset: "12.5%", color: "#00a6ca"},
//         {offset: "25%", color: "#00ccbc"},
//         {offset: "37.5%", color: "#90eb9d"},
//         {offset: "50%", color: "#ffff8c"},
//         {offset: "62.5%", color: "#f9d057"},
//         {offset: "75%", color: "#f29e2e"},
//         {offset: "87.5%", color: "#e76818"},
//         {offset: "100%", color: "#d7191c"}
//       ])
//     .enter().append("stop")
//     .attr("offset", function(d) { return d.offset; })
//     .attr("stop-color", function(d) { return d.color; });

//A color scale
var color = d3.scaleLinear()
    .domain([-50, 40])
    .range(["#2c7bb6", "#00a6ca","#00ccbc","#90eb9d","#ffff8c",
            "#f9d057","#f29e2e","#e76818","#d7191c"]);

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
    .style("fill", "url(#linear-gradient)");

svg.append('rect')
    .attr('width', 50)
    .attr('height', 50)
    .attr("transform", "translate(0,50)")
    .attr('fill', function(){return color(20);});