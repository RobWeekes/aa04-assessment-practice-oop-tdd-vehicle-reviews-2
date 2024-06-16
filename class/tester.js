const Review = require('./review');
const Bicycle = require('./bicycle');
const Vehicle = require('./vehicle')
const ElectricBicycle = require('./electric-bicycle');


class Tester {
    constructor(name) {
        this.name = name;
        this.reviews = [];
    }

    submitReview(vehicle, starRating, text) {
        if(!vehicle.validate()) throw new Error("Cannot submit review for invalid vehicle.");
        
        let review = new Review(vehicle, this, starRating, text);
        review.addReview();

        if(vehicle instanceof Bicycle) this.bikeTester = true;
        if(vehicle instanceof ElectricBicycle) this.eBikeTester = true;

        return review;

    }
}


// local testing

let tester = new Tester("Bob Jones");
let validVehicle = new Vehicle("Toyota Prius", 2005, 23000);

// TypeError: Vehicle is not defined

let submittedReview = tester.submitReview(validVehicle, 3, "Very cozy.");

module.exports = Tester;