/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absentCount = 0
let lateStreak = 0
for(let ch of s){
    
    if(ch=="A"){
        absentCount++
        lateStreak=0
    }
    else if(ch=="L"){
        lateStreak++
    }else{
          lateStreak=0
    }
    if(absentCount>=2 || lateStreak>=3) return false
}
return true
};