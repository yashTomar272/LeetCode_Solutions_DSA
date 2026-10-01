/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let scores=[]
    for(let i=0;i<operations.length;i++){
        let op=operations[i]
        if(op==="+"){
let first=scores[scores.length - 1]
let second=scores[scores.length - 2]
scores.push(first+second)
        }else if(op==="C"){
scores.pop()
        }else if(op==="D"){
let dub=scores[scores.length - 1]
scores.push(dub*2)
        }else{
            scores.push(Number(op))
        }
    }
    return scores.reduce((sum,num)=>sum+num,0)
};