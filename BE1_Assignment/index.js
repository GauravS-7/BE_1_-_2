const { initializeDatabase } = require("./db/db.connect");
const fs = require("fs");
const Car = require("./models/cars.models");
const { log } = require("console");

initializeDatabase();

const jsonData = fs.readFileSync("car.json", "utf-8");

const carsData = JSON.parse(jsonData);

function seedData() {
  try {
    for (const cardata of carsData) {
      const newCar = new Car({
        brand: cardata.brand,
        model: cardata.model,
        year: cardata.year,
        bodyStyle: cardata.bodyStyle,
        fuelType: cardata.fuelType,
        transmission: cardata.transmission,
        engine: cardata.engine,
        mileage: cardata.mileage,
        color: cardata.color,
        price: cardata.price,
        condition: cardata.condition,
        description: cardata.description,
        photos: cardata.photos,
        inMarket: cardata.inMarket,
      });
      //   console.log(newCar.bodyStyle);

      newCar.save();
    }
  } catch (error) {
    console.log("Error seeding the data", error);
  }
}
seedData();
