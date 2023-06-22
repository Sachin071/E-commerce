const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./data/user");
const User = require("./models/userModel");
const Products = require("./data/products");
const Product = require("./models/productModel");
const Order = require("./models/orderModel");
const connectDb = require("./config/config");
require("colors");

dotenv.config();
connectDb();

const importData = async () => {
  try {
    // await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleData = Products.map((product) => {
      return { ...product, User: adminUser };
    });
    await Product.insertMany(sampleData);
    console.log("data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const dataDestroy = async () => {
  try {
    // await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("Data-Destroy".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
