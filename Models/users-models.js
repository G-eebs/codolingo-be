const client = require("../db/connection");

const db = client.db();

exports.findUsers = async () => {
  const users = await db.collection("users");
  const result = await users.find().toArray();
  return result;
};

exports.findUserByName = async (userName) => {
  const users = await db.collection("users");
  const result = await users.findOne({ user_name: userName });
  if (result === null) {
    return Promise.reject({ status: 404, msg: "user not found" });
  }
  return result;
};

exports.insertUser = async (newUser) => {
  if (
    Object.keys(newUser).length !== 3 ||
    typeof newUser.user_name !== "string" ||
    typeof newUser.password !== "string" ||
    typeof newUser.avatar_url !== "string"
  ) {
    return Promise.reject({ status: 400, msg: "invalid request" });
  }
  const createdUser = { ...newUser };
  createdUser.score = 0;
  createdUser.progress = [];
  createdUser.friends = [];
  const users = await db.collection("users");
  await users.insertOne(createdUser);
  const result = await users.findOne(createdUser);
  return result;
};

exports.updateFriends = async (user_name, friend) => {
  const result = await db
    .collection("users")
    .updateOne({ user_name }, { $push: { friends: friend } });

  const updatedUser = await db.collection("users").findOne({ user_name });

  return updatedUser;
};
