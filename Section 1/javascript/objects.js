const user = {
    username: 'Bhoomi',
    age: '19',
    email: 'Bhoomi2211@gmail.com',
    password: '122'

};

console.log(user.name);
console.log(user['name']);
console.log(user.password); // undefined, as 'password' does not exist in the object
// console.log(user['username']);
user.name = "Bhoomi Agarwal";
console.log(user.name); // 'Bhoomi Agarwal', as the value of 'name' has been updated

user.course = "Mern Stack";
console.log(user.course); // 'Mern Stack', as a new property 'course' has been added

delete user.password;
console.log(user.password);
// undefined, as 'password' has been deleted
console.log(Object.keys(user)); // ['username', 'age', 'email', 'name', 'course'], returns an array of keys in the object
console.log(Object.values(user)); // ['Bhoomi Agarwal', '19', '
console.log(Object.entries(user)); // [['username', 'Bhoomi Agarwal'], ['age', '19'], ['email', '

let Smartphone = {
    brand: "Samsung",
    model: "galaxym13",
    price: 10000,
    colors: ['violet', 'Black', 'White', [1, 2, 3, 4]]
}

console.log(Smartphone);
console.log(Smartphone.colors[3][2]);
console.log(Smartphone.colors.push("Blue"))
console.log(Smartphone.colors);
console.log(Smartphone.colors.pop())
console.log(Smartphone.colors);
// ['violet', 'Black', 'White', [1, 2, 3, 4], 'Blue'], as 'Blue' has been added to the end of the array
console.log(Smartphone.colors.unshift("Blue"));
console.log(Smartphone.colors); // ['Blue', 'violet', 'Black', 'White', [1, 2, 3, 4]], as 'Blue' has been added to the beginning of the array

const SmartphoneArray = [
    {
        brand: "Samsung",
        model: "galaxym13",
        price: 10000,
        colors: ['violet', 'Black', 'White']
    },

    {
        brand: "Apple",
        model: "iPhone 14",
        price: 80000,
        colors: ['Black', 'White', 'Red']
    },

    {
        brand: "OnePlus",
        model: "Nord 2T",
        price: 30000,
        colors: ['Green', 'Blue', 'Black']

    },

    {
        brand: "Xiaomi",
        model: "Redmi Note 11",
        price: 15000,
        colors: ['Blue', 'Black', 'White']
    },
    {
        brand: "Oppo",
        model: "F19 Pro",
        price: 20000,
        colors: ['Gold', 'Black', 'White']
    }


]

//acessing the third smartphone's brand
console.log(SmartphoneArray[2].colors[1]); // 'OnePlus'

//add new color to appleiphone
 console.log(SmartphoneArray[1].colors.push('green'));
 console.log(SmartphoneArray[1]);
 

//replace last color of last smartphone 
console.log(SmartphoneArray[4]);

SmartphoneArray[4].colors[2] = 'Pink';
console.log(SmartphoneArray[4].colors); 

//create an array of smartphone brands
 const SmartphoneBrands= SmartphoneArray.map((a) => {
    return a.brand;
});
console.log(SmartphoneBrands); 

//filter smartphones with price less than 30000
const budgetSmartphone=SmartphoneArray.filter((a)=>{

    return a.price<30000;
})
console.log(budgetSmartphone);

//filter smartphones with color 'Black'


const colorsArray= SmartphoneArray.filter((a)=>{
    return a.colors.includes('violet');
})

console.log(colorsArray);
