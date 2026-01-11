import data from './data.js'

const table = [...data.elements]

export function gameCompare (first,second) {
    let firstbeat = table.find((elt) => elt.name === first)
    firstbeat =firstbeat.beat
    if (first === second) {
        return null
    }else if (second === firstbeat) {
        return first

    }else{
        return second
    }
}

export function getElements() {
    return [...data.elements]
}

export function robotPlay(){
    let choice = Math.floor(Math.random()*3)
    return {choice, name :table[choice].name}
}
