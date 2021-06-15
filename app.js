// function 1 Array Slice - slice()
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedFood = foods.slice(1,4);
// function 2 - Array Splice - splice()
foods.splice(1, 0, "noodles", "icecream");
// function 3 - filter
const numberArray = [12,324,213,4,2,3,45,4234];
console.log("all numbers: "+numberArray);
let isEven = (value) =>
{
    let evenNums = value.filter(element => element%2==0);
    console.log("even numbers: "+evenNums);
}
isEven(numberArray);
// extra
let isPrime = (value) => 
{
     let primeNums = value.filter(element => {
        for(let i=2; i<element; i++)
        {
            if(element % i ==0)
            {
                return false;
            }
        }
        return true;
    });
    console.log("prime numbers: "+primeNums);
}
isPrime(numberArray);
//function 4 - reject
let nonPrime = (value) => 
{
     let nonprimeNums = value.filter(element => {
        for(let i=2; i<element; i++)
        {
            if(element % i ==0)
            {
                return true;
            }
        }
        return false;
    });
    console.log("non prime numbers: "+nonprimeNums);
}
nonPrime(numberArray);
//5 lambda
//arrow func
//function -6 map
// const myArray = [11, 34, 20, 5, 53, 16];
const myArray = [2, 3, 5, 10];
let findSquareOfNumbers = (myArray) => 
{
    let squaredNums = myArray.map(element => element*element); 
    console.log("squared numbers: "+squaredNums);
    return squaredNums;
}
findSquareOfNumbers(myArray);
//function -7 reduce
let multiply = (value) => {
    console.log(value.reduce((acc, init) => acc * init));
}
multiply(myArray);
// multiply(findSquareOfNumbers(myArray));