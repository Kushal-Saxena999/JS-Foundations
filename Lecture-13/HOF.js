/*
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter 
  and calls it with the argument `"earl grey"`.
  Return the result of calling `makeTea`.
  */

  //First Order function.

  function makeTea(typeOfTea){
    return `makeTea: ${typeOfTea}`;
  }

  function processTeaOrder(teaFunction){
    return teaFunction("earl grey");
  }

  let order = processTeaOrder(makeTea);
  // console.log(order);

  /*
  5. Write a function named `createTeaMaker` that returns another function. The returned function
    should take one parameter, `teaType`, and return a message like `"Making green tea"`
        Store the return function in a variable named `teaMaker` and call it with `"green tea"`.
        */
    
    function createTeaMaker(name){
      let score = 100;
      return function(teaType){
        return `Making ${teaType} ${name} ${score}`;
      };
    }

    let teaMaker = createTeaMaker("kushal");
    // console.log(teaMaker("green Tea"));
    let result = teaMaker("green tea");
    console.log(result);