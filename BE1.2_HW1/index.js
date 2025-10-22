const { initializeDatabase } = require("./db/db.connect");
const fs = require("fs");
const UserProfile = require("./models/twitter.models");
const { log } = require("console");
initializeDatabase();

const jsonData = fs.readFileSync("userProfiles.json", "utf-8");
const userProfilesData = JSON.parse(jsonData);

function seedData() {
  try {
    for (const userProfileData of userProfilesData) {
      const newUser = new UserProfile({
        fullName: userProfileData.fullName,
        username: userProfileData.username,
        bio: userProfileData.bio,
        profilePicUrl: userProfileData.profilePicUrl,
        followingCount: userProfileData.followingCount,
        followersCount: userProfileData.followersCount,
        companyName: userProfileData.companyName,
        location: userProfileData.location,
        portfolioUrl: userProfileData.portfolioUrl,
      });

      newUser.save();
    }
  } catch (error) {
    console.log("Error Seeding the Data", error);
  }
}

seedData();
