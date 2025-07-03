// function addNums(a,b){

//     c=a+b;
//     console.log(c);
// }

// addNums(34,76);
// console.log(c); // This will throw an error because c is not defined in this scope


// //2nd way of function
//  avgnums=function(a,b,c){

//     const avg=(a+b+c)/3;
//     // console.log(avg);
//      return avg; // Return the average value
// }
//   const result= avgnums(23,45,67);//when we perform any operation with undefined it return nan
//   console.log(result); // This will throw an error because avgnums does not return a value

//   //3rd way of function

//     const factorial =(n)=>{
//          let f=1;
//          for(let i=1;i<=n;i++){
//             f=f*i;
//          }

//          return f; // Return the factorial value

//     }
//     const fact=factorial(7);
//     console.log(fact); // This will throw an error because factorial does not return a value
  
//   // declration of function

   function sum(a,b){
      c=4
      
      return a+b+c;
   }

   console.log(sum(0,1,78));
   
   console.log(3+undefined+4);
   