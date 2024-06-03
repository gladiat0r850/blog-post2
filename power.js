const math = {
pow: function(num, multiplier){
let initialNum = num
    for(var i = 0; i < multiplier; i++){
        num = num * initialNum
    }
    console.log(num);
}
}

math.pow(3, 5)