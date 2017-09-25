var data = [
  {
    "cx": 30,
    "cy": 30
  },
  {
    "cx": 100,
    "cy": 100
  },
  {
    "cx": 150,
    "cy": 150
  }
];

var svg = d3.select('body')
				.append('svg')
				.attr('width', 400)
				.attr('height', 400);

svg.selectAll('circle') //temp circle object using selectAll
	.data(data) //give data to temp obj
	.enter() //enter to start draw
	.append('circle') //append circle
	.attr('cx', function(prop) { //use data to provide cx and cy
		return prop.cx;
	})
	.attr('cy', function(prop) {
		return prop.cy;
	})
	.attr('r', 30)
	.attr('fill', 'red');