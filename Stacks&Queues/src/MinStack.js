/* Write your class below */

const Stack = require("./Stack");

class MinStack{
    constructor(){
        this.minStack = []
        this.length = 0;
        this.minValues = new Stack()
    }

    push(x){
        if(x < this.getMin() || this.minValues.isEmpty())
        {
            this.minValues.push(x)
        }
        this.minStack[this.length] = x;
        this.length++;
    }

    isEmpty(){
        return this.length == 0;
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.minStack[this.length - 1];
    }

    pop(){
        if(this.isEmpty()){
            return null;
        }
        if(this.peek() == this.getMin())
        {
            this.minValues.pop()
        }
        this.length--;
        return delete this.minStack[this.length]
    }

    getMin(){
        if(this.isEmpty()){
            return null;
        }
        return this.minValues.peek()
    }

    print(){
        console.log(this.minStack)
    }
}



/* Do not remove the exports below */
module.exports = MinStack
