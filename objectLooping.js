// Looping through objects

const user = {
    name: "Nithin",
    age:23,
    intrestedIn: ["coding","javsScript"],
    siblings:1
}

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

// destructuring objects

const {name : fullName, age,intrestedIn}= user;
console.log(fullName);
console.log(intrestedIn);
intrestedIn.map(hobbie=>console.log(hobbie));
// rest Operator
const Car ={
    company: "BENZ",
    model:"G 550",
    mileage: "10mi",
    manufacturedOn : new Date().toISOString(),
    owner:"Benz"

}
console.log(Car);
console.log(Car.manufacturedOn);
const {owner, ...others} = Car;
console.log(owner);
Car.owner = "JK Nithin Kumar";
console.log(Car.owner);
// spread Operator
const newCar = {...Car};
console.log(newCar);
// nested Desrtucturing
const company = {
  name: 'Tech Corp',
  location: {
    city: 'San Francisco',
    state: 'California'
  }
};

const {name, location:{city, state}} = company;
console.log(name,city,state);


// Object.entries
const fruitPrices = {
  apple: 1.2,
  banana: 0.5,
  cherry: 2.0
};

Object.entries(fruitPrices).forEach(([fruit, price]) => {
  console.log(`${fruit}: $${price}`);
});

// combining objects:

const newObj ={...Car, ...user};
console.log(newObj);

// updating Properties :

const obj = {
    movie: "RRR",
    director:"SS.Rajamouli",
    age: 52
}

const updatedObj = {...obj, age:53}
console.log(updatedObj);
console.log(obj);


// Destructuring in Function Parameters

const displayUser = ({ name, age,...others }) => {
  console.log(`Name: ${name}, Age: ${age}`);
};
displayUser(user);

























