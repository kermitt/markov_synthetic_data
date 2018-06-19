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
      'id': 0,
      'x': 80,
      'y': 15,
      'group': 0,
      'name': 'A',
      'value': 93.89947529336527
    },
    {
      'id': 1,
      'x': 28,
      'y': 89,
      'group': 1,
      'name': 'B',
      'value': 97.50035201532108
    },
    {
      'id': 2,
      'x': 38,
      'y': 62,
      'group': 2,
      'name': 'C',
      'value': 2.030582730737973
    },
    {
      'id': 3,
      'x': 40,
      'y': 94,
      'group': 2,
      'name': 'D',
      'value': 44.89701963220516
    },
    {
      'id': 4,
      'x': 33,
      'y': 31,
      'group': 2,
      'name': 'E',
      'value': 54.67589351177607
    },
    {
      'id': 5,
      'x': 99,
      'y': 16,
      'group': 3,
      'name': 'F',
      'value': 43.298995698586836
    },
    {
      'id': 6,
      'x': 43,
      'y': 35,
      'group': 3,
      'name': 'G',
      'value': 14.830469082526765
    },
    {
      'id': 7,
      'x': 23,
      'y': 28,
      'group': 3,
      'name': 'H',
      'value': 89.52167580545725
    },
    {
      'id': 8,
      'x': 91,
      'y': 13,
      'group': 3,
      'name': 'I',
      'value': 69.23551036033335
    },
    {
      'id': 9,
      'x': 79,
      'y': 75,
      'group': 3,
      'name': 'J',
      'value': 6.343532427431864
    },
    {
      'id': 10,
      'x': 82,
      'y': 41,
      'group': 4,
      'name': 'K',
      'value': 27.096562829536897
    },
    {
      'id': 11,
      'x': 44,
      'y': 46,
      'group': 5,
      'name': 'L',
      'value': 36.51173116684738
    },
    {
      'id': 12,
      'x': 19,
      'y': 56,
      'group': 6,
      'name': 'M',
      'value': 3.8012936207606263
    },
    {
      'id': 13,
      'x': 94,
      'y': 26,
      'group': 7,
      'name': 'N',
      'value': 43.51152002142085
    },
    {
      'id': 14,
      'x': 49,
      'y': 82,
      'group': 7,
      'name': 'O',
      'value': 44.75267020397187
    },
    {
      'id': 15,
      'x': 61,
      'y': 32,
      'group': 7,
      'name': 'P',
      'value': 76.92744999980856
    },
    {
      'id': 16,
      'x': 37,
      'y': 55,
      'group': 7,
      'name': 'Q',
      'value': 42.47267697730883
    },
    {
      'id': 17,
      'x': 19,
      'y': 56,
      'group': 7,
      'name': 'R',
      'value': 34.13506653396021
    },
    {
      'id': 18,
      'x': 19,
      'y': 87,
      'group': 7,
      'name': 'S',
      'value': 95.57322072222819
    },
    {
      'id': 19,
      'x': 39,
      'y': 99,
      'group': 7,
      'name': 'T',
      'value': 81.4039834041621
    },
    {
      'id': 20,
      'x': 36,
      'y': 21,
      'group': 7,
      'name': 'U',
      'value': 43.00485626225661
    },
    {
      'id': 21,
      'x': 14,
      'y': 90,
      'group': 7,
      'name': 'V',
      'value': 13.78099083263351
    },
    {
      'id': 22,
      'x': 60,
      'y': 78,
      'group': 7,
      'name': 'W',
      'value': 49.318337384359914
    },
    {
      'id': 23,
      'x': 64,
      'y': 18,
      'group': 7,
      'name': 'X',
      'value': 37.27374666984975
    },
    {
      'id': 24,
      'x': 24,
      'y': 35,
      'group': 7,
      'name': 'Y',
      'value': 67.94297633573952
    },
    {
      'id': 25,
      'x': 18,
      'y': 52,
      'group': 7,
      'name': 'Z',
      'value': 10.674838105048634
    },
    {
      'id': 26,
      'x': 44,
      'y': 39,
      'group': 7,
      'name': 'AA',
      'value': 37.446835846364394
    },
    {
      'id': 27,
      'x': 0,
      'y': 89,
      'group': 8,
      'name': 'AB',
      'value': 71.53452107638574
    },
    {
      'id': 28,
      'x': 76,
      'y': 1,
      'group': 8,
      'name': 'AC',
      'value': 41.61530838976333
    },
    {
      'id': 29,
      'x': 79,
      'y': 76,
      'group': 8,
      'name': 'AD',
      'value': 24.042917738025626
    }
  ],
  'links': [
    {
      'source': 0,
      'target': 28,
      'probability': 0.4985558125061553
    },
    {
      'source': 0,
      'target': 5,
      'probability': 0.5014441874938447
    },
    {
      'source': 1,
      'target': 11,
      'probability': 0.05519376272333498
    },
    {
      'source': 1,
      'target': 3,
      'probability': 0.8585411557035172
    },
    {
      'source': 1,
      'target': 13,
      'probability': 0.08626508157314783
    },
    {
      'source': 2,
      'target': 18,
      'probability': 0.17092198644658407
    },
    {
      'source': 2,
      'target': 21,
      'probability': 0.5011460982330671
    },
    {
      'source': 2,
      'target': 19,
      'probability': 0.3279319153203488
    },
    {
      'source': 3,
      'target': 8,
      'probability': 0.9624932375520237
    },
    {
      'source': 3,
      'target': 2,
      'probability': 0.03750676244797635
    },
    {
      'source': 4,
      'target': 25,
      'probability': 0.5884149263652263
    },
    {
      'source': 4,
      'target': 12,
      'probability': 0.4115850736347737
    },
    {
      'source': 5,
      'target': 27,
      'probability': 0.9762089408257046
    },
    {
      'source': 5,
      'target': 10,
      'probability': 0.02379105917429536
    },
    {
      'source': 6,
      'target': 21,
      'probability': 0.14573118571576993
    },
    {
      'source': 6,
      'target': 25,
      'probability': 0.7053097488027529
    },
    {
      'source': 6,
      'target': 7,
      'probability': 0.1489590654814772
    },
    {
      'source': 7,
      'target': 9,
      'probability': 0.7517096057671311
    },
    {
      'source': 7,
      'target': 13,
      'probability': 0.24829039423286892
    },
    {
      'source': 8,
      'target': 17,
      'probability': 0.0400393728309838
    },
    {
      'source': 8,
      'target': 10,
      'probability': 0.8237389916114886
    },
    {
      'source': 8,
      'target': 6,
      'probability': 0.016872690068886698
    },
    {
      'source': 9,
      'target': 6,
      'probability': 0.27362089551242796
    },
    {
      'source': 9,
      'target': 2,
      'probability': 0.726379104487572
    },
    {
      'source': 10,
      'target': 14,
      'probability': 0.3788019723975282
    },
    {
      'source': 10,
      'target': 27,
      'probability': 0.6211980276024718
    },
    {
      'source': 11,
      'target': 23,
      'probability': 0.9684323076399934
    },
    {
      'source': 11,
      'target': 7,
      'probability': 0.03156769236000656
    },
    {
      'source': 12,
      'target': 0,
      'probability': 0.41101740076825455
    },
    {
      'source': 12,
      'target': 27,
      'probability': 0.24345847737835635
    },
    {
      'source': 12,
      'target': 20,
      'probability': 0.3455241218533891
    },
    {
      'source': 13,
      'target': 7,
      'probability': 0.5615375941645293
    },
    {
      'source': 13,
      'target': 28,
      'probability': 0.19410038692578757
    },
    {
      'source': 13,
      'target': 21,
      'probability': 0.24436201890968312
    },
    {
      'source': 14,
      'target': 27,
      'probability': 0.3184775921734875
    },
    {
      'source': 14,
      'target': 12,
      'probability': 0.6466900317108162
    },
    {
      'source': 14,
      'target': 6,
      'probability': 0.011954153851910121
    },
    {
      'source': 15,
      'target': 17,
      'probability': 0.6636932835659717
    },
    {
      'source': 15,
      'target': 14,
      'probability': 0.3363067164340283
    },
    {
      'source': 16,
      'target': 26,
      'probability': 0.7013888005402082
    },
    {
      'source': 16,
      'target': 3,
      'probability': 0.29861119945979175
    },
    {
      'source': 17,
      'target': 17,
      'probability': 0.6412884376165646
    },
    {
      'source': 17,
      'target': 2,
      'probability': 0.3587115623834354
    },
    {
      'source': 18,
      'target': 7,
      'probability': 0.06924275001120961
    },
    {
      'source': 18,
      'target': 27,
      'probability': 0.5645416020316725
    },
    {
      'source': 18,
      'target': 0,
      'probability': 0.3662156479571179
    },
    {
      'source': 19,
      'target': 27,
      'probability': 0.547909995634565
    },
    {
      'source': 19,
      'target': 20,
      'probability': 0.452090004365435
    },
    {
      'source': 20,
      'target': 6,
      'probability': 0.7770757760172775
    },
    {
      'source': 20,
      'target': 26,
      'probability': 0.2229242239827225
    },
    {
      'source': 21,
      'target': 0,
      'probability': 0.5007767766462463
    },
    {
      'source': 21,
      'target': 10,
      'probability': 0.4992232233537537
    },
    {
      'source': 22,
      'target': 29,
      'probability': 0.4809794084474899
    },
    {
      'source': 22,
      'target': 26,
      'probability': 0.5190205915525101
    },
    {
      'source': 23,
      'target': 23,
      'probability': 0.37096767484128246
    },
    {
      'source': 23,
      'target': 8,
      'probability': 0.6290323251587175
    },
    {
      'source': 24,
      'target': 4,
      'probability': 0.0078348703899207
    },
    {
      'source': 24,
      'target': 2,
      'probability': 0.5459122056689427
    },
    {
      'source': 24,
      'target': 23,
      'probability': 0.4462529239411366
    },
    {
      'source': 25,
      'target': 12,
      'probability': 0.6603583078768722
    },
    {
      'source': 25,
      'target': 12,
      'probability': 0.3396416921231278
    },
    {
      'source': 26,
      'target': 15,
      'probability': 0.9259830953440473
    },
    {
      'source': 26,
      'target': 17,
      'probability': 0.07401690465595268
    },
    {
      'source': 27,
      'target': 6,
      'probability': 0.6823921098082137
    },
    {
      'source': 27,
      'target': 22,
      'probability': 0.31760789019178626
    },
    {
      'source': 28,
      'target': 27,
      'probability': 0.6804198741860836
    },
    {
      'source': 28,
      'target': 12,
      'probability': 0.10014967693701471
    },
    {
      'source': 28,
      'target': 2,
      'probability': 0.21943044887690166
    },
    {
      'source': 29,
      'target': 5,
      'probability': 0.5909667408422439
    },
    {
      'source': 29,
      'target': 13,
      'probability': 0.4090332591577561
    }
  ]
}
/*
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
*/
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
            .data(data.links)
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
