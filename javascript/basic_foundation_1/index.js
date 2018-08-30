//Basic Foundation I


//Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function returner() {
    var arr=[];
    for (var i=1; i<256; i++) {
        arr.push(i);
    }   
    return arr;
}
console.log(returner());


//Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function evenSum() {
    var sum=0;
    for (var i=1; i<=1000; i++) {
        if (i%2 ===0) {
            sum=sum+i;
        }
    }   
    return sum;
}
console.log(evenSum());

//Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function oddSum() {
    var sum=0;
    for (var i=1; i<=1000; i++) {
        if (i%2 ===1) {
            sum=sum+i;
        }
    }   
    return sum;
}
console.log(oddSum());

//Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function sum(arr) {
    var sum=0;
    for (var i=1; i<arr.length; i++) {
        sum=sum+arr[i];
    }
    return sum;
}
console.log(sum([1,2,5]));

//Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function maxVal(arr) {
    var max=arr[0];
    for(var i=1; i<arr.length; i++) {
        if (arr[i]>max) {
            max=arr[i];
        }
    }
    return max;
}
console.log(maxVal([-3,3,5,7]));

//Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function avgVal(arr) {
    var sum=arr[0];
    for(var i=1; i<arr.length; i++) {
        sum=sum + arr[i];
    }
    var avg=sum/arr.length;
    return avg;
}

console.log(avgVal([1,3,5,7,20]));

//Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddNum() {
    var arr=[];
    for (var i=1; i<=50; i++) {
        if (i % 2 ==1) {
            arr.push(i);
        }
    }   
    return arr;
}
console.log(oddNum());

//Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterY(arr, Y) {
    var count=0;
    for (var i=0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count++;
        }
    }
    return count;
}
console.log(greaterY([1,3,5,7],3)) ;

//Squares - Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function squares(arr) {
    for (var i=0; i < arr.length; i++) {
        arr[i]=arr[i]*arr[i];
    }
    return arr;
}
console.log(squares([1,5,10,-2])) ;

//Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function resetNegatives(arr) {
    for(var i=0; i<arr.length; i++) {
        if (arr[i] < 0) {
            arr[i]=0;
        }
    }
    return arr;
}
console.log(resetNegatives([1,5,10,-2]));


//Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function stats(arr) {
    var max=arr[0];
    var min=arr[0];
    var sum=arr[0];
    for(var i=1; i<arr.length; i++) {
        if (arr[i]>max) {
            max=arr[i];
        }
        if (arr[i<min]) {
            min=arr[i];
        }
        sum=sum + arr[i];
    }
    var avg=sum/arr.length;
    var arrnew=[max,min,avg];
    return arrnew;
}

console.log(stats([1,5,10,-2]));


//Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swapfirstlast(arr) {
    var previous=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=previous;
    return arr;
}
console.log(swapfirstlast([1,5,10,-2]));

//Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function replaceNegatives(arr) {
    for(var i = 0; i < arr.length; i++) {
        if (arr[i]<0) {
            arr[i]="Dojo";
        }
    }
    return arr;
}
console.log(replaceNegatives([-1,-3,2]));