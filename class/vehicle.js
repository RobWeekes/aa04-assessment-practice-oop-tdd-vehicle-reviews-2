class Vehicle {
    constructor(modelName, year, price) {
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

module.exports = Vehicle;