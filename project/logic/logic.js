window.onload = function () {
  console.log('js sourced');

  var randomNumber = function() {
    return Math.random() * 200;
  }

  var data = [randomNumber()];

  var body = d3.select("body");

  var svg = body.append("svg")
    .attr("width", 1000)
    .attr("height", 1000);

  var circle = svg.selectAll("circle");

  circle.data(data).enter().append("circle")
    .attr("cx", 250)
    .attr("cy", 250)
    .attr("r", function(d) {return d})
    .style("fill", "steelblue");

  var update = function (data) {

    var circle = svg.selectAll("circle")
      .data(data);

    circle.transition().duration(1000).attr("r", function(d) {return d});

    circle.enter().append("circle")
      .attr("cx", 250)
      .attr("cy", 250)
      .attr("r", function(d) {return d})
      .style("fill", "steelblue");
  };

  d3.interval(function() {
    data = [randomNumber(), randomNumber()];
    update(data);
  }, 1500);
};
