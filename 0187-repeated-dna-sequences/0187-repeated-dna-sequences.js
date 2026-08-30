/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let i=0
    let j=9
    let result=new Set()
let set=new Set()
let window = s.slice(i, j + 1);
set.add(window)
i++
j++
while(j<s.length){
    window=s.slice(i, j + 1);
    if(set.has(window)){
result.add(window)
    }
    else{
    set.add(window)
}
    j++
    i++
}


return [...result] 
};