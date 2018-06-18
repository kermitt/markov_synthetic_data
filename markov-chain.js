/*
const data = {
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
*/

const data = {
  'nodes': [
    {
      'id': 'A',
      'x': 34,
      'y': 90
    },
    {
      'id': 'B',
      'x': 49,
      'y': 59
    },
    {
      'id': 'C',
      'x': 52,
      'y': 92
    },
    {
      'id': 'D',
      'x': 51,
      'y': 65
    },
    {
      'id': 'E',
      'x': 15,
      'y': 2
    },
    {
      'id': 'F',
      'x': 11,
      'y': 75
    },
    {
      'id': 'G',
      'x': 37,
      'y': 68
    },
    {
      'id': 'H',
      'x': 56,
      'y': 92
    },
    {
      'id': 'I',
      'x': 61,
      'y': 52
    },
    {
      'id': 'J',
      'x': 58,
      'y': 72
    },
    {
      'id': 'K',
      'x': 79,
      'y': 94
    },
    {
      'id': 'L',
      'x': 50,
      'y': 86
    },
    {
      'id': 'M',
      'x': 63,
      'y': 96
    },
    {
      'id': 'N',
      'x': 26,
      'y': 49
    },
    {
      'id': 'O',
      'x': 48,
      'y': 45
    },
    {
      'id': 'P',
      'x': 35,
      'y': 2
    },
    {
      'id': 'Q',
      'x': 71,
      'y': 80
    },
    {
      'id': 'R',
      'x': 96,
      'y': 44
    },
    {
      'id': 'S',
      'x': 70,
      'y': 82
    },
    {
      'id': 'T',
      'x': 16,
      'y': 59
    }
  ],
  'edges': [
    {
      'source': 0,
      'target': 12,
      'probability': 0.10654331168028164
    },
    {
      'source': 0,
      'target': 8,
      'probability': 0.6701157863736753
    },
    {
      'source': 0,
      'target': 6,
      'probability': 0.22334090194604306
    },
    {
      'source': 1,
      'target': 8,
      'probability': 0.8738164053213773
    },
    {
      'source': 1,
      'target': 16,
      'probability': 0.12618359467862272
    },
    {
      'source': 2,
      'target': 12,
      'probability': 0.4623568164827423
    },
    {
      'source': 2,
      'target': 17,
      'probability': 0.36188458648926103
    },
    {
      'source': 2,
      'target': 6,
      'probability': 0.17575859702799668
    },
    {
      'source': 3,
      'target': 15,
      'probability': 0.5518278370272574
    },
    {
      'source': 3,
      'target': 8,
      'probability': 0.09592314504129429
    },
    {
      'source': 3,
      'target': 9,
      'probability': 0.35224901793144836
    },
    {
      'source': 4,
      'target': 12,
      'probability': 0.8057887633438119
    },
    {
      'source': 4,
      'target': 2,
      'probability': 0.1942112366561881
    },
    {
      'source': 5,
      'target': 6,
      'probability': 0.6761626278583217
    },
    {
      'source': 5,
      'target': 6,
      'probability': 0.26189930756089863
    },
    {
      'source': 5,
      'target': 15,
      'probability': 0.06193806458077966
    },
    {
      'source': 6,
      'target': 10,
      'probability': 0.17369414589831522
    },
    {
      'source': 6,
      'target': 3,
      'probability': 0.12210799803016159
    },
    {
      'source': 6,
      'target': 12,
      'probability': 0.5360206318445364
    },
    {
      'source': 6,
      'target': 2,
      'probability': 0.16817722422698678
    },
    {
      'source': 7,
      'target': 13,
      'probability': 0.6219498276116899
    },
    {
      'source': 7,
      'target': 6,
      'probability': 0.22457855497539891
    },
    {
      'source': 7,
      'target': 15,
      'probability': 0.15347161741291115
    },
    {
      'source': 8,
      'target': 17,
      'probability': 0.641081096516388
    },
    {
      'source': 8,
      'target': 12,
      'probability': 0.358918903483612
    },
    {
      'source': 9,
      'target': 16,
      'probability': 0.8486026520196188
    },
    {
      'source': 9,
      'target': 7,
      'probability': 0.15139734798038118
    },
    {
      'source': 10,
      'target': 9,
      'probability': 0.9765579270299405
    },
    {
      'source': 10,
      'target': 19,
      'probability': 0.023442072970059513
    },
    {
      'source': 11,
      'target': 10,
      'probability': 0.1935566177089163
    },
    {
      'source': 11,
      'target': 12,
      'probability': 0.8064433822910837
    },
    {
      'source': 12,
      'target': 18,
      'probability': 0.16408158056589195
    },
    {
      'source': 12,
      'target': 11,
      'probability': 0.40090059853107185
    },
    {
      'source': 12,
      'target': 0,
      'probability': 0.4350178209030362
    },
    {
      'source': 13,
      'target': 8,
      'probability': 0.5317471317879496
    },
    {
      'source': 13,
      'target': 16,
      'probability': 0.04937706569161615
    },
    {
      'source': 13,
      'target': 8,
      'probability': 0.007077495303050796
    },
    {
      'source': 13,
      'target': 16,
      'probability': 0.4117983072173834
    },
    {
      'source': 14,
      'target': 12,
      'probability': 0.29630310439134355
    },
    {
      'source': 14,
      'target': 15,
      'probability': 0.7036968956086564
    },
    {
      'source': 15,
      'target': 10,
      'probability': 0.5641557220860363
    },
    {
      'source': 15,
      'target': 11,
      'probability': 0.39585490878264795
    },
    {
      'source': 15,
      'target': 14,
      'probability': 0.03998936913131579
    },
    {
      'source': 16,
      'target': 1,
      'probability': 0.2874929573239262
    },
    {
      'source': 16,
      'target': 16,
      'probability': 0.7125070426760738
    },
    {
      'source': 17,
      'target': 14,
      'probability': 0.9911537078427561
    },
    {
      'source': 17,
      'target': 17,
      'probability': 0.008846292157243862
    },
    {
      'source': 18,
      'target': 13,
      'probability': 0.9287820674799319
    },
    {
      'source': 18,
      'target': 2,
      'probability': 0.07121793252006814
    },
    {
      'source': 19,
      'target': 7,
      'probability': 0.44347343951364304
    },
    {
      'source': 19,
      'target': 17,
      'probability': 0.3368297681621433
    },
    {
      'source': 19,
      'target': 17,
      'probability': 0.21969679232421369
    }
  ]
}

var svg = d3.select('.chart')
var w = window.innerWidth
const h = window.innerHeight * 0.66

// ratio them to whatever the current screen is
data.nodes.forEach((x, i) => {
  x.x = 10 + (w * x.x / 110)
  x.y = 10 + (h * x.y / 110)
})

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
    const x1 = data.nodes[d.source].x,
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

  return ('M' + x1 + ' ' + y1 + ' Q ' + xf + ' ' + yf + ', ' + x2 + ' ' + y2)
}

function drawBezierCurve (x, y) {
        // Creating Bézier curve with fixed size and orientation
  var d = 50
  return ('M' + x + ' ' + y +
                ' C ' + (x + d) + ' ' + (y + d) + ', ' + (x - d) + ' ' + (y + d) + ', ' + x + ' ' + y)
}

// + ------------------------------------------------------------------------- +

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
