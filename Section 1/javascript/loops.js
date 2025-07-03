//for 
//  for(let i=0; i<10; i++){

//     console.log(i);

//  }


//  for(let i=23;i<=48;i++){

//     if(i%2!==0){

//         console.log(i);

//     }

//  }

//while loop

let a = 10;
while (a < 20)
{
  console.log(a);
  a++;

}

let b = 10;

do {
  console.log(b);
  b++;
} while (b > 20);


//wap to reverse a number

let m = 43562;
let rev = 0;
while (m > 0) {
  console.log(m, rev)

  let d = m % 10;
  rev = rev * 10 + d;
  m = parseInt(m / 10);
}
console.log(m, rev);