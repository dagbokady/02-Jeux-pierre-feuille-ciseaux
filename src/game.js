import data from './data.js'

const table = [...data.elements]

function gameCompare (first,second) {
    let firstbeat = table.find((elt) => elt.name === first).beat
    let secondbeat = table.find((elt) => elt.name === second).beat
    if (first === second) {
        return null
    }else if (second === firstbeat) {
        return first

    }else if (first === secondbeat) {
        return second
    }
}
export default gameCompare;

export function getElements() {
    return [...data.elements]
}

export function robotPlay(){
    let choice = Math.floor(Math.random()*3)
    return table[choice].name
}
