var policeDistricts = {
  "type": "FeatureCollection",
  "features": [
}; 

for (var i = 0; i < policeDistricts.features.length; i++) {
  var districtNum = policeDistricts.features[i].dist_num; 

  // Join GeoJSON on police district to other datasets here 
  
}

// Width and height
var w = 500;
var h = 600;

var chicagoLat = 41.881832;
var chicagoLong = 87.623177;

// Define map projection
var projection = d3.geoAlbers()
           .translate([w/2, h/2 ])
           .scale([60000])
           .center([0,chicagoLat])
           .rotate([chicagoLong,0]);

// Define path generator
var path = d3.geoPath()
         .projection(projection);

// Create SVG element
var svg = d3.select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

// Bind data and create one path per GeoJSON feature
svg.selectAll("path")
   .data(policeDistricts.features)
   .enter()
   .append("path")
   .attr("d", path)
   .attr("class", "district")
   .attr("id", function(d) {
    return d.properties.dist_num;
   })
   .on("mouseover", handleMouseOver)
   .on("mouseout", handleMouseOut)
   .on("click", handleClick);

function handleMouseOver(d, i) { 
  // Use D3 to select element, change color and size
  d3.select("p").text('District ' + this.id);
  d3.select(this).style("fill", "blue");
}

function handleMouseOut(d, i) { 
  // Use D3 to select element, change color and size
  //console.log("mouse", this);
  d3.select(this).style("fill", "#d3d3d3");
}

function handleClick(d, i) { 
  // Use D3 to perform action on click event
  var url;
  if(this.id < 10) {
    url = 'https://data.cityofchicago.org/resource/ijzp-q8t2.json?district=00' + this.id;
  } else {
    url = 'https://data.cityofchicago.org/resource/ijzp-q8t2.json?district=0' + this.id;
  }
  d3.json(url, function(data) {
    console.log(data);
  });
}