var hour = 8;
var min = 60;
var period1 = "AM";
var period2 = "pm";


if(period1 == "AM" && min > 30){
    console.log("Its almost", hour++, "in the morning.");

}
else if(period2 == "pm" && min< 30){
    console.log("It's just after", hour, "in the evening.");
} 
   
