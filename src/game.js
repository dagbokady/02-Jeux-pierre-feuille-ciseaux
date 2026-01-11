import data from './data.js'

const table = [...data.elements]

function gameCompare (first,second) {
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
export default gameCompare;

export function getElements() {
    return [...data.elements]
}