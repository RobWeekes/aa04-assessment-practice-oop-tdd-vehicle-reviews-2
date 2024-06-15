class Tester {
    constructor(name) {
        this.name = name;
        this.reviews = [];
    }

    submitReview(vehicle, starRating, text) {
        let review = new Review(vehicle, this, starRating, text)
    }
}


// local testing

let tester = new Tester("Bob Jones");
let validVehicle = new Vehicle("Toyota Prius", 2005, 23000);

let submittedReview = tester.submitReview(validVehicle, 3, "Very cozy.");

module.exports = Tester;