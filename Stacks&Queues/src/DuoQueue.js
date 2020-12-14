/* Write your class below */

const Queue = require("./Queue")

class DuoQueue{
    constructor(){
        this.queue1 = new Queue()
        this.queue2 = new Queue()
    }

    enqueue(person, qNum){
        if(qNum == 1){  
           this.queue1.enqueue(person)
        }
        else{
            if(qNum == 2){
                this.queue2.enqueue(person)
            }
        }
    }

    dequeue(qNum){
        if(qNum == 1){  
            this.queue1.dequeue()
         }
         else{
             if(qNum == 2){
                 this.queue2.dequeue()
             }
         }
    }

    getLongestQueue(){
        return this.queue1.length > this.queue2.length ? this.queue1 : this.queue2

    }

    getShortestQueue(){
        return this.queue1.length < this.queue2.length ? this.queue1 : this.queue2

    }

    balanceQueues(){
        const qLong = this.getLongestQueue();
        const qShort = this.getShortestQueue();
        while(qLong.length - qShort.length > 2)
        {
            const deletedItem = qLong.peek()
            qShort.enqueue(deletedItem)
            qLong.dequeue()
        }
    }
}





//You can paste the test code from the lesson below to test your solution




/* Do not remove the exports below */
module.exports = DuoQueue
