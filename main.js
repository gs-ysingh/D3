var data = [
  {
    "cx": 60,
    "cy": 60
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

var offset = 1;

var svg = d3.select('body')
				.append('svg')
				.attr('width', 400)
				.attr('height', 400);

var circles = svg.selectAll('circle') //temp circle object using selectAll
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

function animate() {
 	data.forEach(function(d) {
    	d.cx += getRandomOffset();
    	d.cy += getRandomOffset();
  	});
 
  	circles.data(data).attr('cx', function(prop) { return prop.cx; })
		.attr('cy', function(prop) { return prop.cy; });
	window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate)

function getRandomOffset() {
  return (Math.random() * 2 * offset) - offset;
}