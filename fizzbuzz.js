let output = []
let count=1
function fizzBuzz(){
    if (count%3===0 && count %5 ===0){
        output.push("Fizzbuzz")
    }
    else if (count %3===0){
        output.push("Fizz")
    }
    else if (count %5 ===0){
        output.push("Buzz")
    }
    else{
      output.push(count)  
    }


    
    count++;
    
    console.log(output)
}
for(let i=0; i< 10; i++){
fizzBuzz();
}
