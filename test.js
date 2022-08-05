// // showAddress(address);

// // function showAddress(address) {
// //    for (let details in address)
// //    console.log(details, address[details]);
// // }

// // function Square(sides, color) {
// //    this.sides = sides
// //    this.color = color;
// //    this.draw = function() { };
// // }

// // let Circle1 = new Square(5, "green")

// // console.log(Circle1);

// // let number = 10;

// // // console.log(number++);
// // // console.log(++number);

// // const address = {
// //    street: "Opeikuma",
// //    city: "kasoa",
// //    zipCode: "00233"
// // }

// // // Factory Function
// // function createAddress(street, city, zipCode) {
// //    return {
// //       street,
// //       city,
// //       zipCode
// //    }
// // }
// // const address1 = createAddress("Opeikuma", "Kasoa", 00233);
// // console.log(address1);

// // // Constructor Function
// // function CreateAddress(street, city, zipCode) {
// //    this.street = street;
// //    this.city = city;
// //    this.zipCode = zipCode;
// // }

// // const address1 = new CreateAddress("Opeikuma", "Kasoa", 00233);
// // const address2 = new CreateAddress("Opeikuma", "Kasoa", 00233);

// // function areEqual(address1, address2) {
// //    for (const key of Object.keys(address1)) {
// //       let
// //    }
// // }

// let blogPost = {
// 	title: "a",
// 	body: "lorem50",
// 	author: "afa",
// 	views: 205,
// 	comments: [
// 		{ author: "kojo", body: "paragraph" },
// 		{ author: "kojo", body: "paragraph" },
// 	],
// 	isLive: false,
// };

function blogPost(title, body, author) {
	return {
		title,
		body,
		author,
	};
}

let post2 = blogPost('Headline', 'and he said to me', 'zen');



console.log(post2);

function BlogPost(title, body, author) {
	this.title = title;
	this.body = body;
	this.author = author;
	this.views = 0;
	this.comments = [];
	this.isLive = false;
}

const post1 = new BlogPost("a", "b", "c");

// console.log(post1);

let range = [
	{ label: "$", tooltip: "inexpensive" },
	{ inexpensive: "$", expensive: "$$" },
	{ inexpensive: "$", expensive: "$$" },
];
