const { initializeDatabase } = require("./db/db.connect");
const Restaurant = require("./model/restaurant.model");
initializeDatabase();

const newRestaurant = {
  // * restaurant 1
  // name: "Cha Cha",
  // cuisine: ["Spanish"],
  // location: "123 Main Street, Anytown",
  // rating: 4.0,
  // reviews: [],
  // website: "https://example.com",
  // phoneNumber: "+1234567890",
  // openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
  // priceRange: "$$ (11-30)",
  // reservationsNeeded: true,
  // isDeliveryAvailable: true,
  // menuUrl: "https://example.com/menu",
  // photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
  //* restaurant 2
  // name: "Somi",
  // cuisine: ["Greek"],
  // location: "11 Main Road, Gem",
  // rating: 4.3,
  // reviews: [],
  // website: "https://somi-example.com",
  // phoneNumber: "+1234997390",
  // openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
  // priceRange: "$$ (11-30)",
  // reservationsNeeded: false,
  // isDeliveryAvailable: true,
  // menuUrl: "https://somi-example.com/menu",
  // photos: [
  //   "https://example.com/somi-photo1.jpg",
  //   "https://example.com/somi-photo2.jpg",
  // ],
  // * restaurant 3
  //   name: "Yo China",
  //   cuisine: ["Chinese", "Italian"],
  //   location: "MG Road, Bangalore",
  //   rating: 3.9,
  //   reviews: [],
  //   website: "https://yo-example.com",
  //   phoneNumber: "+1288997392",
  //   openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  //   priceRange: "$$$ (31-60)",
  //   reservationsNeeded: true,
  //   isDeliveryAvailable: false,
  //   menuUrl: "https://yo-example.com/menu",
  //   photos: [
  //     "https://example.com/yo-photo1.jpg",
  //     "https://example.com/yo-photo2.jpg",
  //     "https://example.com/yo-photo3.jpg",
  //   ],
};

// async function createRestaurant(newRestaurant) {
//   try {
//     const restaurant = new Restaurant(newRestaurant);
//     const saveRestaurant = await restaurant.save();
//     console.log("New Restaurant Data: ", saveRestaurant);
//   } catch (error) {
//     throw error;
//   }
// }

// createRestaurant(newRestaurant);

// ! 2.2
// // ? Q3
// async function readAllRestaurant() {
//   try {
//     const allRestaurant = await Restaurant.find();
//     console.log(allRestaurant);
//   } catch (error) {
//     throw error;
//   }
// }

// readAllRestaurant();

// // ? Q4
// async function readRestaurantByName(restaurantName) {
//   try {
//     const restaurantByName = await Restaurant.findOne({ name: restaurantName });
//     console.log(restaurantByName);
//   } catch (error) {
//     throw error;
//   }
// }
// readRestaurantByName("Yo China");

// // ? Q5
// async function readRestaurantByReservation() {
//   try {
//     const restaurantByReservation = await Restaurant.find({
//       reservationsNeeded: true,
//     });
//     console.log(restaurantByReservation);
//   } catch (error) {
//     throw error;
//   }
// }
// readRestaurantByReservation();

// // ? Q6

// async function readRestaurantByDelivery() {
//   try {
//     const restaurantByDelivery = await Restaurant.find({
//       isDeliveryAvailable: true,
//     });
//     console.log(restaurantByDelivery);
//   } catch (error) {
//     throw error;
//   }
// }
// readRestaurantByDelivery();

// //  ? Q7

// async function readRestaurantByPhone(phoneNum) {
//   try {
//     const restaurantByPhone = await Restaurant.findOne({
//       phoneNumber: phoneNum,
//     });
//     console.log(restaurantByPhone);
//   } catch (error) {
//     throw error;
//   }
// }
// readRestaurantByPhone("+1288997392");

// //? Q8
// async function readRestaurantByCuisine() {
//   try {
//     const restaurantByCuisine = await Restaurant.find({
//       cuisine: "Italian",
//     });
//     console.log(restaurantByCuisine);
//   } catch (error) {
//     throw error;
//   }
// }

// readRestaurantByCuisine();

// ! HW 2.3

// ? Q1

// async function updateRestaurantById(restaurantId, dataToUpdate) {
//   try {
//     const updatedRestaurant = await Restaurant.findByIdAndUpdate(
//       restaurantId,
//       dataToUpdate,
//       { new: true }
//     );
//     // console.log("Updated Restaurant by ID: ", updatedRestaurant);
//   } catch (error) {
//     console.log("Error updating restaurant by ID", error);
//   }
// }

// // updateRestaurantById("68f74a5f01b2847e6971a22c", { rating: 4.1 });

// ? Q2

// async function updateRestaurantByName(restaurantName, dataToUpdate) {
//   try {
//     const updatedRestaurant = await Restaurant.findOneAndUpdate(
//       { name: restaurantName },
//       dataToUpdate,
//       { new: true }
//     );
//     // console.log("Updated Restaurant by Name: ", updatedRestaurant);
//   } catch (error) {
//     console.log("Error updating restaurant by name", error);
//   }
// }

// // updateRestaurantByName("Somi", { name: "Som Sarovar" });

// ? Q3

// async function updateRestaurantByPhone(phoneNum, dataToUpdate) {
//   try {
//     const updatedRestaurant = await Restaurant.findOneAndUpdate(
//       { phoneNumber: phoneNum },
//       dataToUpdate,
//       { new: true }
//     );
//     console.log("Updated Restaurant by Phone: ", updatedRestaurant);
//   } catch (error) {
//     console.log("Error updating restaurant by phone", error);
//   }
// }

// updateRestaurantByPhone("+1288997392", { isDeliveryAvailable: true });

// ! 2.4

//? Q1 Delete by id

async function deleteRestaurantById(restaurantId) {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId);
    // console.log("Restaurant deleted successfully:", deletedRestaurant);
  } catch (error) {
    console.log("Error deleting restaurant:", error);
  }
}

// deleteRestaurantById("68f749f69b0539cc92d44931");

//? Q2 Delete by Name:

async function deleteRestaurantByName(restaurantName) {
  try {
    const deletedRestaurant = await Restaurant.findOneAndDelete({
      name: restaurantName,
    });
    console.log("This restaurant was deleted:", deletedRestaurant);
  } catch (error) {
    console.log("Error deleting restaurant:", error);
  }
}

deleteRestaurantByName("Yo China");
