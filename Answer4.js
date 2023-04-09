//program to check whether the number is prime or not

let n = prompt("Enter Number"); //taking input from user


let prime=true;

//iterating from 2 to n/2+1
for (let i=2;i<=Math.ceil(n/2);i++){
    if(n%i===0){
        prime=false;
        break;
    }
    
} 

//checking conditions 
if(prime){
    console.log("Prime Number")
}
else{
    console.log("Not a Prime Number")
}