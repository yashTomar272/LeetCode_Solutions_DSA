/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let k=needle.length
    let i=0
    let win=""
    if(haystack.length<needle.length) return -1
    for(i=0;i<k;i++){
        win+=haystack[i]
    }

while(i<haystack.length){
     if(win==needle) return i-needle.length
     win+=haystack[i]
     win=win.slice(1)
     i++
}
if(win == needle) return i - needle.length

return -1
};