
let names =["john","david","mary"];

console.log(names);

names[1]="Brian";
console.log(names)

// Adds to end of array
names.push("Micheal");
console.log(names);

// Removes from the end of array
names.pop();
console.log(names);

// Adds to start of array
names.unshift("Petru");
console.log(names);

// Removes from start of array
names.shift();
console.log(names);

// Displays Each parameter of the array
let fruits = ["Apple", "Banana", "Orange"]
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
};


// Shows index of specified array parameter
console.log(names.indexOf("mary"));

// Copies part of an array specified with index num
let fruit = ["apple", "banana", "orange", "pear"]
let citrus = fruit.slice(1, 3,);
console.log(citrus);


fruits.splice(1,1);
console.log(fruits);

fruits.splice (1, 1, "pear");
console.log(fruits);










function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
