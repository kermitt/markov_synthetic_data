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
const count = 20
let LoH = []
for (let i = 0; i < count; i++) {
  const x = parseInt(Math.random() * 100)
  const y = parseInt(Math.random() * 100)
  const letter = convertToNumberingScheme((i + 1))
  LoH.push({id: letter, x: x, y: y})
}
const too_much = 20
const edges = []

LoH.forEach((x, i) => {
  let total = 0
  let loop = 0

  while (total < 1.0 && loop < too_much) {
    loop++
    let source = i
    // let target = LoH[Math.floor(Math.random() * LoH.length)]
    let target = Math.floor(Math.random() * LoH.length)
    let v = Math.random()
    // console.log('loop: ' + loop + ' p: ' + p + ' total ' + total)
    if (total + v > 1.0) {
      v = 1 - total
    }
    total += v

    let edge = {
      source: i,
      target: target,
      probability: v
    }
    edges.push(edge)
  }
})

// console.log(JSON.stringify(LoH, null, 2))
// console.log(JSON.stringify(edges, null, 2))

const data = {
  nodes: LoH,
  edges: edges
}
console.log(JSON.stringify(data, null, 2))

function convertToNumberingScheme (number) {
  var baseChar = ('A').charCodeAt(0),
    letters = ''

  do {
    number -= 1
    letters = String.fromCharCode(baseChar + (number % 26)) + letters
    number = (number / 26) >> 0 // quick `floor`
  } while (number > 0)

  return letters
}
