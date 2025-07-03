const myarr=[34,56,78,90,12,34,56,78,90];

const sqrNums=myarr.map((a)=> 
    {
        return a*a;
    });
console.log(sqrNums); 

//wap to find the 18%gst  on each elemrnt 

const prices=[2300,3200,500,1250,800,5500];
 const tax=prices.map((a) => {
     return a*1.18;
 });
 console.log(tax);

//wap to find the budget items from the array
//budget items are those which are less than 2000
 const budgets= prices.filter((a) => {
    return a<2000;
 });
 console.log(budgets);
 
 //wap to find even numbers from an array
 const Evennum=myarr.filter((a) => {
    return a%2===0;
 });
 console.log(Evennum);

//convert string to mumber
 const prices2=['₹2300.32', '₹3200.50', '₹500.00', '₹1250.75', '₹800.00', '₹5500.99'];

 

   const prices3=prices2.map((a) => {
    return parseInt(a.slice(1));
   });
    console.log(prices3);

