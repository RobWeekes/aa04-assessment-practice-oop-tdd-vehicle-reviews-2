const Tester = require('./tester');
const Review = require('./review');

class Vehicle {
    constructor(modelName, year, price) {   // add reviews = []  ?
        this.modelName = modelName;
        this.year = year;
        this.price = price;
        this.reviews = [];
    }

    // INSTANCE METHODS
    validate() {
        if (this.modelName && this.year && this.price && this.year > 1950 && this.year < 2100) return true;
        return false;
    }

    
    update(modelName, year, price) {
        if(year < 1950 || year > 2100) {   
            throw new Error("Year must be between 1950 and 2100");
        }
        if(!price > 0) {
            throw new Error("Price must be greater than 0");
        }

        this.modelName = modelName;
        this.year = year;
        this.price = price;
    }

    getDetails() {
        return `The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`;
    }

    findReviewByTester(name) {
        let reviews = this.reviews;
        // console.log(reviews);

        for(let i = 0; i < reviews.length; i++) {
            let review = reviews[i];
        
            if(review.tester.name === name) {
                // console.log(review);
                return review;
            }
        }
        // reviews.forEach(review => {})   
        // forEach doesnt work, does not return on first hit - goes thru whole loop
    }


    // STATIC CLASS METHODS
}


// local testing

// let validVehicle = new Vehicle("Toyota Prius", 2005, 23000);
// let invalidVehicle = new Vehicle(5);
// console.log(validVehicle.validate());

// let vehicle = new Vehicle("Toyota Prius", 2005, 23000);
// console.log(vehicle.update("Toyota Prius", 1949, 26000));  // year must be valid

// let vehicle2 = new Vehicle("Trek 520", 2023, 1829);
// console.log(vehicle2.getDetails());     // "The 2023 Trek 520 costs $1829 and has 0 reviews."


let tester1 = new Tester("Bob Jones");
let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
let review1 = new Review(vehicle1, tester1, 1, "Great car, excellent gas mileage!");

let tester2 = new Tester("Desiree Smith");
let vehicle2 = new Vehicle("Dodge Ram", 1985, 300);
let review2 = new Review(vehicle2, tester2, 3, "Lots of rust, but still reliable.");

let review3 = new Review(vehicle1, tester2, 5, "Good ride, but wish it charged faster.");
let review4 = new Review(vehicle2, tester1, 5, "Best car I've ever driven!");

review1.addReview();
review2.addReview();
review3.addReview();
review4.addReview();

let filtered1 = vehicle1.findReviewByTester("Bob Jones");
console.log(filtered1);


module.exports = Vehicle;