const Tester = require('./class/tester');
const Vehicle = require('./class/vehicle');
const Review = require('./class/review');

// LOCAL TESTING


let tester = new Tester("Bob Jones");
let validVehicle = new Vehicle("Toyota Prius", 2005, 23000);

let validReview = tester.submitReview(validVehicle, 3, "Very cozy.");
console.log(validReview instanceof Review);
console.log(tester.reviews.length); // 1
console.log(tester.reviews[0].vehicle);
// console.log(tester.reviews[0].vehicle.includes(validVehicle)); // T
// console.log(tester.reviews[0].tester.includes(tester));
console.log(tester.reviews[0].starRating);  // 3;
console.log(tester.reviews[0].text); // "Very cozy.";

let invalidVehicle = new Vehicle(5);
console.log(tester.submitReview(invalidVehicle, 5, 'review text'));
