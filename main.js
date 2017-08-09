d3.select('body')
	.append('p')
	.text('Hello World!');

var canvas = d3.select('body')
				.append('svg')
				.attr('width', 500)
				.attr('height', 500);

var circle = canvas.append('circle')
				.attr('cx', 250) //origin
				.attr('cy', 250)
				.attr('r', 50)
				.attr('fill', 'red');

var rect = canvas.append('rect')
				.attr('x', 50) //starting point
				.attr('y', 50)
				.attr('width', 150)
				.attr('height', 50)
				.attr('fill', 'red');

var line = canvas.append('line')
				.attr('x1', 100)
				.attr('y1', 150)
				.attr('x2', 200)
				.attr('y2', 300)
				.attr('stroke', 'green')
				.attr('stroke-width', 2);
