// 1
function a() {
    return 35;
  }
  console.log(a());
  // Prediction: 35
  // Actual: 35
  
  // 2
  function b() {
    return 4;
  }
  console.log(b() + b());
  // Prediction: 8
  // Actual: 8
  
  // 3
  function c(b) {
    return b;
  }
  console.log(c(2) + c(4));
  // Prediction: 6
  // Actual: 6
  
  // 4
  function d(b) {
    console.log(b);
    return b * 3;
  }
  console.log(d(3));
  // Prediction: 3, 9
  // Actual: 3, 9
  
  // 5
  function e(b) {
    return b * 4;
    console.log(b);
  }
  console.log(e(10));
  // Prediction: 40
  // Actual: 40
  
  // 6
  function f(b) {
    if (b < 10) {
      return 2;
    } else {
      return 4;
    }
    console.log(b);
  }
  console.log(f(15));
  // Prediction: 4
  // Actual: 4
  
  // 7
  function g(b, c) {
    return b * c;
  }
  console.log(10, 3);
  console.log(g(3, 10));
  // Prediction: 10, 3, 30
  // Actual: 10, 3, 30
  
  // 8
  function h(b) {
    for (var i = 0; i < 10; i++) {
      console.log(i);
    }
    return i;
  }
  console.log(3);
  console.log(4);
  // Prediction: 3, 4
  // Actual: 3, 4
  
  // 9
  function i() {
    for (var i = 0; i < 10; i++) {
      i = i + 2;
      console.log(i);
    }
  }
  i();
  // Prediction: 2, 5, 8, 11
  // Actual: 2, 5, 8, 11
  
  // 10
  function j(b, c) {
    for (var i = b; i < c; i++) {
      console.log(i);
    }
    return b * c;
  }
  j(0, 10);
  console.log(j(0, 10));
  // Prediction: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
  // Actual: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
  
  // 11
  function k() {
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        console.log(j);
      }
      console.log(i);
    }
  }
  // Prediction: undefined ... or whatever is returned when a function is defined
  //             nothing is actually output to the console
  // Actual: undefined
  
  // 12
  // function l(){
  //     for(var i=0; i<10; i++){
  //         for(var j=0; j<10; j++){
  //             console.log(i,j);
  //         }
  //     console.log(j,i);
  //     }
  // Prediction: This will not return anything becuase there is not a closing
  // curly bracket for the function. (and the function is never called)
  // Actual: ...nothing. Node was waiting for me to finish the function with the
  // closing curly bracket.
  
  // 13
  z = 10;
  function m() {
    z = 15;
    console.log(z);
  }
  console.log(z);
  // Prediction: 10
  // Actual: 10
  
  // 14
  y = 10;
  function n() {
    y = 15;
    console.log(y);
  }
  n();
  console.log(y);
  // Prediction: 15, 15
  // Actual: 15, 15
  
  // 15
  x = 10;
  function o() {
    x = 15;
    console.log(x);
    return x;
  }
  x = o();
  console.log(x);
  // Prediction: 15, 15
  // Actual: 15, 15