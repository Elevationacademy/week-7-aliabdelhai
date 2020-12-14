
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



/* Do not remove the exports below */
module.exports = Stack

