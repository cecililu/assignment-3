const gameEvents= new Map ( [
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76,'GOAL'],
    [80, 'GOAL'],
    [92,'Yellow card'],
    ]);
let event=[...gameEvents.values()]

event=[...new Set(event)]

// console.log(event)
gameEvents.delete(64)
// console.log(gameEvents)

function getStat(gameEvents){
    const keys=[...gameEvents.keys()]
    let arr=[]
    let difference=0
    for (let i=0;i<keys.length-1;i++){
         difference=Math.abs(keys[i]-keys[i+1])
         arr.push(difference) 
        }
    const freqencies=arr.reduce((accumulator,current) => accumulator + current, 0) / arr.length
    console.log(`Event occurs every ${Math.ceil(freqencies)} minutes`,)
}
//
getStat(gameEvents)
//
gameEvents.forEach((value,key)=>{
    key<=45 ?console.log(`[First half] ${key} :${value}`):
    console.log(`[Second half] ${key} :${value}`)

})