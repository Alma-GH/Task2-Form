export const isRealDate = function (day,month,year){
  //need valid day,month,year

  if(month === 2){
    return year%4===0 ? day<30 : day<29
  }

  if(month<=7){
    return month%2===1 ? day<32 : day<31
  }else{
    return month%2===0 ? day<32 : day<31
  }
}


export const isOnlyAlphaAndSpace  = val => /^[a-zA-Zа-яА-Я ]*$/.test(val)
export const withoutSpecSign      = val => /^[\wА-Яа-я .\\/-]*$/.test(val)