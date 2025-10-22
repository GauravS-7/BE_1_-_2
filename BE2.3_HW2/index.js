const { initializeDatabase } = require("./db/db.connect");
const Hotel = require("./models/hotels.models");
initializeDatabase();

const newHotel = {
  // name: "New Hotel",
  // category: "Mid-Range",
  // location: "123 Main Street, Frazer Town",
  // rating: 4.0,
  // reviews: [],
  // website: "https://hotel-example.com",
  // phoneNumber: "+1234567890",
  // checkInTime: "2:00 PM",
  // checkOutTime: "12:00 PM",
  // amenities: ["Laundry", "Room Service"],
  // priceRange: "$$$ (31-60)",
  // reservationsNeeded: true,
  // isParkingAvailable: true,
  // isWifiAvailable: true,
  // isPoolAvailable: false,
  // isSpaAvailable: false,
  // isRestaurantAvailable: true,
  // photos: [
  //   "https://example.com/hotel-photo1.jpg",
  //   "https://example.com/hotel-photo2.jpg",
  // ],
  // ! 2.2
  // * hotel 2
  // name: "Lake View",
  // category: "Mid-Range",
  // location: "124 Main Street, Anytown",
  // rating: 3.2,
  // reviews: [],
  // website: "https://lake-view-example.com",
  // phoneNumber: "+1234555890",
  // checkInTime: "2:00 PM",
  // checkOutTime: "12:00 PM",
  // amenities: ["Laundry", "Boating"],
  // priceRange: "$$$ (31-60)",
  // reservationsNeeded: true,
  // isParkingAvailable: false,
  // isWifiAvailable: true,
  // isPoolAvailable: false,
  // isSpaAvailable: false,
  // isRestaurantAvailable: false,
  // photos: [
  //   "https://example.com/hotel1-photo1.jpg",
  //   "https://example.com/hotel1-photo2.jpg",
  // ],
  // * Hotel 3
  // name: "Sunset Resort",
  // category: "Resort",
  // location: "12 Main Road, Anytown",
  // rating: 4.0,
  // reviews: [],
  // website: "https://sunset-example.com",
  // phoneNumber: "+1299655890",
  // checkInTime: "2:00 PM",
  // checkOutTime: "11:00 AM",
  // amenities: [
  //   "Room Service",
  //   "Horse riding",
  //   "Boating",
  //   "Kids Play Area",
  //   "Bar",
  // ],
  // priceRange: "$$$$ (61+)",
  // reservationsNeeded: true,
  // isParkingAvailable: true,
  // isWifiAvailable: true,
  // isPoolAvailable: true,
  // isSpaAvailable: true,
  // isRestaurantAvailable: true,
  // photos: [
  //   "https://example.com/hotel2-photo1.jpg",
  //   "https://example.com/hotel2-photo2.jpg",
  // ],
};

// async function createHotel(newHotel) {
//   try {
//     const hotel = new Hotel(newHotel);
//     const saveHotel = await hotel.save();
//     console.log("New hotel data: ", saveHotel);
//   } catch (error) {
//     throw error;
//   }
// }
// createHotel(newHotel);

// // ? Q3
// async function readAllHotels() {
//   try {
//     const allHotels = await Hotel.find();
//     // console.log(allHotels);
//   } catch (error) {
//     throw error;
//   }
// }

// readAllHotels();

// // ? Q4
// async function readHotelByName(hotelName) {
//   try {
//     const hotelByName = await Hotel.findOne({ name: hotelName });
//     console.log(hotelByName);
//   } catch (error) {
//     throw error;
//   }
// }

// readHotelByName("Lake View");

// // ? Q5
// async function readHotelsByParking() {
//   try {
//     const hotelsByParking = await Hotel.find({ isParkingAvailable: true });
//     // console.log(hotelsByParking);
//   } catch (error) {
//     throw error;
//   }
// }

// readHotelsByParking();

// // ? Q6
// async function readHotelsByRestaurant() {
//   try {
//     const hotelsByRestaurant = await Hotel.find({
//       isRestaurantAvailable: true,
//     });
//     // console.log(hotelsByRestaurant);
//   } catch (error) {
//     throw error;
//   }
// }

// readHotelsByRestaurant();

// // ? Q7
// async function readHotelsByCategory() {
//   try {
//     const hotelsByCategory = await Hotel.find({ category: "Mid-Range" });
//     // console.log(hotelsByCategory);
//   } catch (error) {
//     throw error;
//   }
// }

// readHotelsByCategory();

// // ? Q8
// async function readHotelsByPriceRange() {
//   try {
//     const hotelsByPriceRange = await Hotel.find({
//       priceRange: "$$$$ (61+)",
//     });
//     // console.log(hotelsByPriceRange);
//   } catch (error) {
//     throw error;
//   }
// }

// readHotelsByPriceRange();

// // ? Q9
// async function readHotelsByRating() {
//   try {
//     const hotelsByRating = await Hotel.find({ rating: 4.0 });
//     // console.log(hotelsByRating);
//   } catch (error) {
//     throw error;
//   }
// }

// readHotelsByRating();

// // ? Q10
// async function readHotelByPhone(phoneNum) {
//   try {
//     const hotelByPhone = await Hotel.findOne({ phoneNumber: phoneNum });
//     // console.log(hotelByPhone);
//   } catch (error) {
//     throw error;
//   }
// }

// readHotelByPhone("+1299655890");

//! 2.3

// ? Q1
async function updateHotelById(hotelId, dataToUpdate) {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, dataToUpdate, {
      new: true,
    });
    // console.log("Updated Hotel by ID: ", updatedHotel);
  } catch (error) {
    console.log("Error updating hotel by ID", error);
  }
}

// updateHotelById("68f7c59fb7e2aeb875ce50c0", { checkOutTime: "11 AM" });

// ? Q2

async function updateHotelByName(hotelName, dataToUpdate) {
  try {
    const updatedHotel = await Hotel.findOneAndUpdate(
      { name: hotelName },
      dataToUpdate,
      { new: true }
    );
    // console.log("Updated Hotel by Name: ", updatedHotel);
  } catch (error) {
    console.log("Error updating hotel by name", error);
  }
}

// updateHotelByName("Sunset Resort", { rating: 4.2 });

// ? Q3

async function updateHotelByPhone(phoneNum, dataToUpdate) {
  try {
    const updatedHotel = await Hotel.findOneAndUpdate(
      { phoneNumber: phoneNum },
      dataToUpdate,
      { new: true }
    );
    console.log("Updated Hotel by Phone: ", updatedHotel);
  } catch (error) {
    console.log("Error updating hotel by phone", error);
  }
}

updateHotelByPhone("+1299655890", { phoneNumber: "+1997687392" });
