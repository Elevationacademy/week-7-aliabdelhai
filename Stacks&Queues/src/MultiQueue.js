const Queue = require("./Queue")

class MultiQueue {
    constructor(numOfQueue){
        this.queues = []
        for(let i=0; i < numOfQueue; i++)
        {
            this.queues.push( new Queue())
        }
    }

    enqueue(person, qNum){
        this.queues[qNum-1].enqueue(person)
    }

    dequeue(qNum){
        this.queues[qNum-1].dequeue()
    }

    getLongestQueue(){
        let longestQ = this.queues[0]
        for(let q of this.queues)
        {   
            if(q.length > longestQ.length)
            {
                longestQ = q;
            }
        }
        return longestQ
    }

    getShortestQueue(){
        let shortestQ = this.queues[0]
        for(let q of this.queues)
        {   
            if(q.length < shortestQ.length)
            {
                shortestQ = q;
            }
        }
        return shortestQ
    }

    balanceQueues(){
        for(let i=0; i< this.queues.length; i++)
        {
            const qLong = this.getLongestQueue();
            const qShort = this.getShortestQueue();
            while(qLong.length - qShort.length > 1)
            {
                const deletedItem = qLong.peek()
                qShort.enqueue(deletedItem)
                qLong.dequeue()
            
            }
        }
        
    }
}



module.exports = MultiQueue


