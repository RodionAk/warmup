
module.exports = function warmup(temp) {
  if (temp === -20) {
    return -4;
  }
  if (temp === 0) {
    return 32;
  }

  else

    return (temp*1.8 + 32);

};



/*
let warmup = (temp) => { 
  

  console.log(temp*1.8 + 32);
  

}

warmup();
*/