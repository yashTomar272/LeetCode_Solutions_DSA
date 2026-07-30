/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let result=""
   for(let ch of address){
      if(ch=="."){
         result+="[.]"
      }else{
         result+=ch
      }
   }
   return result
};