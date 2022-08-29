function ctok(temp_c,coversionunit){

    let c = 273 +temp_c
    let cunit =coversionunit=='c'?'c':'k';
    
   return c+cunit;
}

console.log(ctok(27,'c'));




