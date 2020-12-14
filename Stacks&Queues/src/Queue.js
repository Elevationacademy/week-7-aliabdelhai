
class Queue{
    constructor(){
        this.queue = []
        this.length = 0;
    }

    enqueue(x){
        this.queue.unshift(x)
        this.length++

    }

    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        this.length--;
        return delete this.queue[this.length]

    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.queue[this.length-1]

    }

    isEmpty(){
        return this.length == 0;
    }

    print(){
        console.log(this.queue)
    }


}


/* Do not remove the exports below */
module.exports = Queue

