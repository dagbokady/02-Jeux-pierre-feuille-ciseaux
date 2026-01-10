import data from './data.js'

const table = [...data.elements]

function game (first,second) {
    let firstbeat = table.find((elt) => elt.name === first).beat
    let secondbeat = table.find((elt) => elt.name === second).beat
    if (first === second) {
        console.log("draw")

    }else if (second === firstbeat) {
        console.log(first,"beat", second)
    }else if (first === secondbeat) {
        console.log(second,"beat",first)
    }
}
game("paper","cisors")