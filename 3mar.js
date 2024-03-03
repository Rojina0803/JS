// parseInt("101", 2); // 5
// console.log(parseInt);
//ARRAY LITERALS
const coffees = ["French Roast", "Colombian", "Kona"];
console.log(coffees);

// extra comma
const fish = ["Lion", , "Angel"];
console.log(fish);
// const fish = ["Lion", , "Angel"];
//         console.log(fish[1]);
const arr= ["333",,"444",,"555",]
console.log(arr)

const myList = [
    "home",
    "school",
  + "hospital",
  ];
  console.log(myList)
  
  const myList1 = ["home", /* empty */, "school", /* empty */, ];
  console.log(myList1)
  Number= -123.4;
  console.log(Number)

const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
} 
console.log(carTypes);

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota

function bikeTypes(name) {
    return name === "Mercedes" ? name : `Sorry, we don't sell ${name}.`;
  } 
const bike={ myBike:"Neptune", getBike: bikeTypes("Mercedes")};
console.log(bike.myBike);
console.log(bike.getBike);


const userone={
    email:'ryuu@gmail.com',
    name:'ryu',
    login(){
        console.log(this.email,'has logged in');
    },
    logout(){
        console.log(this.email,'has logged out');
    },
    address:'streetdowntown'
}
console.log(userone.name);
console.log(userone.login)

// Will print the number of symbols in the string including whitespace.
console.log("Joyo's cat".length); // In this case, 10.
console.log("Joyo's car".indexOf("o"))
const name = 'Lev', time = 'today';
`Hello ${name}, how are you ${time}?`
console.log(name);
console.log(`Hello ${name}, how are you ${time}?`)

// const message="This is my message";
// console.log(message);
const message=
'This is' + 
' my message';
// console.log(message);

// const another=
// `Hi John,

// Thank you for joining in my mailing list.

// Regards,
// Mosh
// `;
// console.log(another)

const nAme='RIta';
const another=
`Hi ${nAme} ${2+3},  

Thank you for joining in my mailing list.

Regards,
Mosh
`;

console.log(another)
