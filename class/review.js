const Vehicle = require('./vehicle');
const Tester = require('./tester');

class Review {
    constructor(vehicle, tester, starRating, text) {
        this.vehicle = vehicle;
        this.tester = tester;
        this.starRating = starRating;
        this.text = text;
    }

    addReview() {   // (no need to pass in arg's, the review instance already has them: (vehicle, tester, starRating, text)
        // in review instance, push 'this' review to vehicle reviews []
        vehicle.reviews.push(this);
        // in review instance, push 'this' review to tester reviews []
        tester.reviews.push(this);
    }
}

// local testing

let tester1 = new Tester("Bob Jones");
let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
console.log(vehicle1.reviews);
let review1 = new Review(vehicle1, tester1, 1, "Great car, excellent gas mileage!");
review1.addReview();
console.log(vehicle1.reviews);
console.log(vehicle1);

module.exports = Review;