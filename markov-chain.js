
// var margin = {top: 10, right: 10, bottom: 30, left: 10},
//  width = 960 - margin.left - margin.right,
//  height = 500 - margin.top - margin.bottom

var data = {
  nodes: [
            {id: 'A', x: 100, y: 100},
            {id: 'B', x: 200, y: 100}
  ],
  edges: [
            {source: 0, target: 0, probability: 0.5},
            {source: 0, target: 1, probability: 0.5},
            {source: 1, target: 0, probability: 0.9},
            {source: 1, target: 1, probability: 0.1}
  ]
}

// var color = d3.scaleOrdinal(d3.schemeCategory20)

var svg = d3.select('.chart')
var w = window.innerWidth
const h = window.innerHeight * 0.66
document.getElementById('chart').style.width = w
document.getElementById('chart').style.height = h
var width = svg.attr('width')
var height = svg.attr('height')

var edges = svg.selectAll('path')
            .data(data.edges)
        .enter().append('path')
            .attr('class', 'edge')

        // Draw edges before nodes
drawEdges()

function drawEdges () {
  edges.attr('d', function (d) {
            // Initial and final coordinates
    var x1 = data.nodes[d.source].x,
      y1 = data.nodes[d.source].y,
      x2 = data.nodes[d.target].x,
      y2 = data.nodes[d.target].y

    if (x1 == x2 && y1 == y2) { return drawBezierCurve(x1, y1) }
    return drawQuadraticCurve(x1, y1, x2, y2)
  })
}

function drawQuadraticCurve (x1, y1, x2, y2) {
        // Angle between initial and final coordinates
  var theta = Math.atan2(y2 - y1, x2 - x1)

        // How far the curve will be from the line connecting the two nodes
  var h = 50

        // Curve control point
  var xf = (x1 + x2) / 2 + h * Math.cos(theta + Math.PI / 2),
    yf = (y1 + y2) / 2 + h * Math.sin(theta + Math.PI / 2)

  return ('M' + x1 + ' ' + y1 +
               ' Q ' + xf + ' ' + yf +
               ', ' + x2 + ' ' + y2)
}

function drawBezierCurve (x, y) {
        // Creating Bézier curve with fixed size and orientation
  var d = 50
  return ('M' + x + ' ' + y +
                ' C ' + (x + d) + ' ' + (y + d) +
                ', ' + (x - d) + ' ' + (y + d) +
                ', ' + x + ' ' + y)
}

// + ------------------------------------------------------------------------- +
/*
var group = svg.selectAll('g')
  .data(data.nodes)
  .enter().append('g')
  .attr('transform',
        'translate(' + margin.left + ',' + margin.top + ')')
  .call(d3.drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended))
*/
var group = svg.selectAll('g')
  .data(data.nodes)
  .enter().append('g')
  .call(d3.drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended))

group.append('circle')
      .attr('r', 20)
     .attr('cx', function (d) { return d.x })
     .attr('cy', function (d) { return d.y })
     .attr('height', 60)
     .attr('width', 30)
      .style('fill', function (d, i) { return '#ff6633' })
     // .style('fill', function (d, i) { return color(i) })

group.append('text')
     .attr('x', function (d) { return d.x - 5 })
     .attr('y', function (d) { return d.y + 4 })
       .attr('text-anchor', 'start')
       .style('fill', 'black')
      .text(function (d) {
        return d.id
      })

      // .text("Close");

function dragstarted (d) {
  d3.select(this).raise().classed('active', true)
}

function dragged (d) {
  d3.select(this).select('text')
    .attr('x', d.x = d3.event.x)
    .attr('y', d.y = d3.event.y)
  d3.select(this).select('circle')
    .attr('cx', d.x = d3.event.x)
    .attr('cy', d.y = d3.event.y)

  drawEdges()
}

function dragended (d) {
  d3.select(this).classed('active', false)
}
