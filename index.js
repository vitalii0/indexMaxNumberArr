var numbers=[1,2,12,4,2,5,1,4,5,8,9,10];

//Вариант 1

function MaxValue(input){ 
    var x=0;

    for (i=0; i<input.length; i++) {
        if(input[i] > x){
            x = input[i];
        }
    }
    for (i=0;i<input.length;i++) {
        if(input[i] === x) {
            return(i);
        }
    } 
}

//Вариант 2

function MaxOfArray(input) {
    x = Math.max.apply(null, input);

    for (i=0;i<input.length;i++) {
        if(input[i] === x) {
            return(i);
        }
    } 
  }

  //Вариант 3

  function indexOfMax(input) {
    var max = input[0];
    var maxIndex = 0;

    for (var i = 1; i < input.length; i++) {
        if (input[i] > max) {
            maxIndex = i;
            max = input[i];
        }
    }

    return maxIndex;
}

//(input[i] ^ 0) === input[i] - проверка