
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
let citru = fruit.slice(1, 3);
console.log(citru);


fruits.splice(1,1);
console.log(fruits);

fruits.splice (1, 1, "pear");
console.log(fruits);



// Start of Excersise: Fruit Basket Manager
	console.log("START OF EXCERSISE")

let basket = ["apple", "banana", "orange", "pear"];
// Log first fruit in the array
console.log([basket[0]]);

// Log Last fruit in the array
console.log(basket[basket.length - 1]);

// Find banana
console.log(basket[1]);

// Replace banana with kiwi
basket.splice(1, 1, "kiwi");
console.log(basket[1]);

// Remove the Last fruit
basket.pop();
console.log(basket);

// Add Mango to start of array
basket.unshift("mango");
console.log(basket);

// Loop through the array
for (let i = 0; i< basket.length; i++){
	console.log("Fruit" + " " + (i + 1) + ": " + basket[i]);
};

// Check if orange exists
console.log("Orange found at Index: ", basket.indexOf("orange"));


// If doesnt exist
for (let i =0; i < basket.length; i++){
	if (basket[i] != "orange"){
		console.log("Orange doesnt exist")
	};
};

// New array of only middle 2 items

// find index of middle item in array
let middle = basket.length / 2; 

// Slice middle -1 and middle + 1 to get middle 2 items of array
let citrus = basket.slice(middle -1, middle + 1);
console.log(citrus);


function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
