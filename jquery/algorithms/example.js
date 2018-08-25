function printintsandsum0to255(){
var arr = [];
var sum = 0;
    for(var i = 1; i < 256; i++){
        console.log(i);
        sum = sum+i;
        console.log(sum);
    }
}    


function oddsarray(){
    var arr = [];
    for(i=0; i<256; i++){
        if(i % 2 == 1){
           console.log(i);
        }
    }
    return oddsarray;
}

function printavfofarray(){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        console.log(sum/arr.length);
         

    }
}

function squarearrvals(arr){
    for(i = 0; i < arr.length; i++){
        arr[i] = arr[i]*arr[i];

    }
    return arr;
}

function sll_node(v){
    this.val = val;
    this.next = null;
}

function add_front(){
    this.head = null
    this.AF = function(val){
        var nn = new sll_node(v)    //nn = new node
        nn.next = this.head
        this.head = nn
    }
}

function length(sll){             //find the length of sll


}







