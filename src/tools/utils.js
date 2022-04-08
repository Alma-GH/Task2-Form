export const correctEndForNumber = function (num){

  if(10<num%100 && num%100<20) return "ов"
  if([2,3,4].includes(num%10)) return "а"
  if([1].includes(num%10))     return ""
  else                         return "ов"
}