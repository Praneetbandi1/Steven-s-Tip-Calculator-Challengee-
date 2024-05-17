function calTip(billAmount) {
    tipAmount = (billAmount > 50 && billAmount <300) ? billAmount * 0.15 : billAmount * 0.20;
    console.log("Bill: "+ billAmount);
    console.log("Tip: " + tipAmount);
    
    totalCost=(tipAmount +billAmount);
    console.log("Total: "+ totalCost); 

 
}
calTip(200);

  
