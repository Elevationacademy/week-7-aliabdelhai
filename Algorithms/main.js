/////////////// Exercise 1 ///////////////////

const printStars = function(num){
    let stars = ''
    for(let i=0; i< num; i++)
    {
        for(let j=0; j<=i; j++)
        {
            stars += "*";
        }
        stars += "\n"
    }
    console.log(stars)
}

printStars(5)



/////////////// Exercise 2 ///////////////////

const printBackwardsStars = function(num){
    let stars = ''
    for(let i=0; i< num; i++)
    {
        for(let j=num; j>i; j--)
        {
            stars += "*";
        }
        stars += "\n"
        
    }
    console.log(stars)
}

printBackwardsStars(5)



/////////////// Exercise 3 ///////////////////


const printStarSeries = function(num, count){
    let stars = ''
    for(let c = 0; c < count; c++)
    {
        for(let i=0; i< num-1; i++)
        {
            for(let j=0; j<=i; j++)
            {
                stars += "*";
            }
            stars += "\n"
        }
        for(let i=0; i< num; i++)
        {
            for(let j=num; j>i; j--)
            {
                stars += "*";
            }
            stars += "\n"
            
        }
        stars += "\n"
    }
    console.log(stars)
}

printStarSeries(5, 3)



/////////////// Exercise 4 ///////////////////

const reverse = function(str){
    
    let reversed = '';
    for(let i =str.length-1; i >=0; i--)
    {
        reversed = reversed + str[i];
    }
    return reversed  
}



/////////////// Exercise 5 ///////////////////

const isPalindrom = str => reverse(str) == str ? true : false;


/////////////// Exercise 6 ///////////////////

const encrypt = function(str){
    let enc = '';
    for (let i = 0; i < str.length; i++) {
        enc += String.fromCharCode((str[i].charCodeAt()) + 1);    
    }
    return enc;

}



/////////////// Exercise 7 ///////////////////

const decrypt = function(str){
    let dec = '';
    for (let i = 0; i < str.length; i++) {
        dec += String.fromCharCode((str[i].charCodeAt()) - 1);    
    }
    return dec;
}


/////////////// Exercise 8 ///////////////////


const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];

const jumble = function (arr1, arr2) {
    let jumbledArr = [...arr1]
    let temp = {}    
    for(let i=0; i< jumbledArr.length; i++){
        temp[jumbledArr[i]] = jumbledArr[i]
    }
    for(let j=0; j< arr2.length; j++){
        if(!temp[arr2[j]]){
            jumbledArr.push(arr2[j])
        }
    }
    return jumbledArr
}



/////////////// Exercise 9 ///////////////////

const rawDist = {
    A: 60,
    B: 10,
    C: 10,
    D: 20
}

const getLetter = function(){
    const num =  Math.random();
    if(num <= 0.6) {
        return 'A'
    }
    else{
        if(num <= 0.8) {
            return 'D'
        }
        else{
            if(num <= 0.9) {
                return 'B'
            }
            else{
                return 'C'
            }
        }
    }
}


console.log(getLetter())



/////////////// Extension 1 ///////////////////

const printInLoop = function(words){
    while(true)
    {
        let res = ''
        for(let word of words)
        {
            res += word + ", "
        }
        console.log(res)
    }
}




/////////////// Extension 2 ///////////////////


let pizzaLocations = [
    { x: 6, y: 12 },
    { x: 3, y: 1 },
    { x: 9, y: 0 },
    { x: 4, y: 10 }
]

let homeLocation = { x: 4, y: 2 }



const findClosest = function(points, point){
    let res;
    let a = Math.abs(points[0].x - point.x);
    let b =  Math.abs(points[0].y - point.y);
    let c = Math.sqrt( a*a + b*b ); 
    let closest = c ;
    for(let i=1; i< points.length; i++)
    {
        let d = Math.abs(points[i].x - point.x);
        let e =  Math.abs(points[i].y - point.y);
        let f = Math.sqrt( d*d + e*e ); 
        if(f < closest)
        {
            closest = f;
            res = points[i]
        }
    }
    return res
}

