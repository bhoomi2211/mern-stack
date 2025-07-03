const arr=[4,7,5,9,5];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
// for of loop...
for(let i of arr){
    console.log(i);
}
 console.log("Using forEach method:");
arr.forEach((a,b,c,d) => {
    console.log(a,b,c,d);
});


//square of the each element of the array

arr.forEach((a) => {
    console.log(a*a);
});

//print odd number of the array 
 
arr.forEach((a) => {
    if(a%2!==0){
        console.log(a);
    }

})

//wap to create a new array containig only even number

 let arr1=[]
 arr.forEach((a) => {
    if(a%2===0){
        console.log(a);
        arr1.push(a);
    }
 
})
 console.log(arr1);

 //wap to create a new array containing  cube of the array


 let arr2=[]
  arr.forEach((i) =>{
     console.log(i**3);
     arr2.push(i**3);

  });
   console.log(arr2);
 

