const { initializeDatabase } = require("./db/db.connect");
const Car = require("./models/cars.models");
const { log } = require("console");

initializeDatabase();

// ? Q1
// * car 1
// const carData = {
// brand: "Ford",
// model: "Mustang",
// year: 2019,
// bodyStyle: "Convertible",
// fuelType: "Gasoline",
// transmission: "Automatic",
// engine: "5.0L V8",
// mileage: 25000,
// color: "Red",
// price: 3500000,
// condition: "Used",
// description: "Exciting Ford Mustang convertible with powerful V8 engine.",
// photos: [
//   "https://example.com/mustang-photo1.jpg",
//   "https://example.com/mustang-photo2.jpg",
//   "https://example.com/mustang-photo3.jpg",
// ],
// };

// ? Q2
// * car 2
// const carData = {
//   brand: "Honda",
//   model: "Civic",
//   year: 2018,
//   bodyStyle: "Coupe",
//   fuelType: "Gasoline",
//   transmission: "Manual",
//   engine: "1.5L Turbocharged Inline-4",
//   mileage: 40000,
//   color: "Black",
//   price: 1800000,
//   condition: "Used",
//   description: "Sporty Civic coupe with low mileage and manual transmission.",
//   photos: [
//     "https://example.com/civic-photo1.jpg",
//     "https://example.com/civic-photo2.jpg",
//     "https://example.com/civic-photo3.jpg",
//   ],
// };

// async function createCar(newCarData) {
//   try {
//     const carData = new Car(newCarData);
//     const saveCarData = await carData.save();
//     console.log("New car data: ", saveCarData);
//   } catch (error) {
//     throw error;
//   }
// }

// createCar(carData);

// ? Q3 Read All cars
async function readAllCars() {
  try {
    const allCars = await Car.find();
    // console.log(allCars);
  } catch (error) {
    console.log("Error reading all cars:", error);
  }
}

// readAllCars();

// ? Q4 Read cars by brand
async function readCarsByBrand(brandName) {
  try {
    const carsByBrand = await Car.find({ brand: brandName });
    // console.log(carsByBrand);
  } catch (error) {
    console.log("Error reading cars by brand:", error);
  }
}

// readCarsByBrand("Ford");

// ? Q5 Read cars by color
async function readCarsByColor(color) {
  try {
    const carsByColor = await Car.find({ color: color });
    // console.log(carsByColor);
  } catch (error) {
    console.log("Error reading cars by color:", error);
  }
}

// readCarsByColor("Black");

// !

// ? Q6 Update price of a car with model "Corolla"
async function updateCarPrice(modelName, newPrice) {
  try {
    const updatedCar = await Car.findOneAndUpdate(
      { model: modelName },
      { price: newPrice },
      { new: true }
    );
    // console.log("Updated car price:", updatedCar);
  } catch (error) {
    console.log("Error updating car price:", error);
  }
}

// updateCarPrice("Corolla", 2300000);

// ? Q7 Update condition of a car with model 'S'
async function updateCarCondition(modelName, newCondition) {
  try {
    const updatedCar = await Car.findOneAndUpdate(
      { model: modelName },
      { condition: newCondition },
      { new: true }
    );
    // console.log("Updated car condition:", updatedCar);
  } catch (error) {
    console.log("Error updating car condition:", error);
  }
}

// updateCarCondition("Model S", "Used");

// !
// ? Q8 Delete a car by ID
async function deleteCarById(carId) {
  try {
    const deletedCar = await Car.findByIdAndDelete(carId);
    // console.log("Deleted car:", deletedCar);
  } catch (error) {
    console.log("Error deleting car by ID:", error);
  }
}

// deleteCarById("68f692b35f55b310d96eaa08");

// ? Q9 Delete a car by body style
async function deleteCarByBodyStyle(bodyStyle) {
  try {
    const deletedCar = await Car.findOneAndDelete({ bodyStyle: bodyStyle });
    console.log("Deleted a car with body style:", deletedCar);
  } catch (error) {
    console.log("Error deleting car by body style:", error);
  }
}

deleteCarByBodyStyle("Coupe");
