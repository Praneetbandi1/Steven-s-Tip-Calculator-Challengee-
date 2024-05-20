//U46368100
function calTip(billAmount) {
    tipAmount = (billAmount > 50 && billAmount <300) ? billAmount * 0.15 : billAmount * 0.20;
    console.log("Bill: "+billAmount);
    console.log("Tip: " + tipAmount);

    totalCost=(tipAmount +billAmount);
    console.log("Total: "+ totalCost);
    return tipAmount;

}
//calTip(450);

// bulk tip calculator
function calTips(bills)
{
 //declaring  tips array   
    tips= [];
    for(i=0;i<bills.length;i++) {
        tip=calTip(bills[i]);
        console.log("Tipamount: "+i+" : "+ tip);

        tips.push(tip);
        
    }



}

//calTips function calling
calTips([275,40,430]);
calTips([125,555,44]);