/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(num) {
  if(num == 0){
    return 1;
  }
  return num * findFactorial(num-1)
}


//Exercise 2
const reverseString = function(str) {
  if(!str){
    return ''
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}


//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1, arr2) {
  if(arr1.length == 0)
  {
    return
  }
  arr2.push(arr1[0])
  arr1.splice(0, 1)
  swap(arr1, arr2)
}



class Stack{
  constructor(){
      this.stack = []
      this.length = 0;
  }

  push(x){
      this.stack[this.length] = x;
      this.length++;

  }

  isEmpty(){
      return this.length == 0;

  }

  peek(){
      if(this.isEmpty()){
          return null;
      }
      return this.stack[this.length - 1];
  }

  pop(){
      if(this.isEmpty()){
          return null;
      }
      this.length--;
      return delete this.stack[this.length]
  }

  print(){
      console.log(this.stack)
  }
}


const stack1 = new Stack()
const stack2 = new Stack()

stack1.push(1)
stack1.push(2)
stack1.push(3)
stack1.print()
stack2.print()

const stackSwap = function(stack1, stack2, stack3 = new Stack()){
  if(stack1.length == 0)
  {
    return
  }
  stack3.push(stack1.peek())
  stack1.pop()
  stackSwap(stack1, stack2, stack3)

  if(stack3.length == 0)
  {
    return
  }
  stack2.push(stack3.peek())
  stack3.pop()
  stackSwap(stack1, stack2, stack3)
  

}

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }
