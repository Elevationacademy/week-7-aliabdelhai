class UniqueArray {
    constructor(){
        this.data = []
    }

    add(item){
        if(!this.exists(item)){
            this.data[this.data.length] = item
        }
    }

    showAll(){
        return this.data
    }

    exists(item){
        if(this.data.includes(item)){
            return true
        }
        return false
    }

    get(index){
        for(let i=0; i<this.data.length; i++)
        {
            if(i == index)
            {
                return this.data[i]
            }
        }
        return -1;
    }
}
