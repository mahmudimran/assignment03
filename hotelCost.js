
function hotelCost(days){
    var totalCost = 0;
    if(days <= 10){
        totalCost = days * 100;
    }
    else if(days <= 20){
        var first= 10* 100;
        var remaining = days - 10;
        var second = remaining * 80;
        totalCost = first+ second;
    }
    else{
        var first = 10 * 100;
        var second = 10 * 80;
        var remaining = days - 20;
        var third = remaining * 50;
        totalCost = first + second + third;
    }
    return  totalCost;
}
var result = hotelCost(-22);
console.log(result);