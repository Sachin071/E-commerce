const bcrypt = require("bcryptjs");

const users = [
  {
    name: "admin",
    email: "shanky@admin.com",
    password: bcrypt.hashSync("123456", 15),
    isAdmin: true,
  },
  {
    name: "shanky",
    email: "shanky@gmail.com",
    password: bcrypt.hashSync("123456", 15),
    isAdmin: false,
  },
  {
    name: "kapil",
    email: "kapil@gmail.com",
    password: bcrypt.hashSync("123456", 15),
    isAdmin: false,
  },
  {
    name: "sangram",
    email: "sangram@gmail.com",
    password: bcrypt.hashSync("123456", 15),
    isAdmin: false,
  },
  {
    name: "dev",
    email: "dev@gmail.com",
    password: bcrypt.hashSync("123456", 15),
    isAdmin: false,
  },
];

module.exports = users;
