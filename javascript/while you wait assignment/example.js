for(var d = 60;  d >= 0; d--){
    if(d > 30){
        console.log(d,'sad message')
    }
    else if(d <= 30 && d>5 ){
        console.log(d,"happy message")
    }
    else if(d<=5 && d>=1){
        console.log(d,"party time")
    }
    else if(d==0){
        console.log("HAPPY BIRTHDAY")
    }
}
