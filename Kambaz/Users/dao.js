import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export default function UsersDao() {
  const createUser = (user) => {
  const newUser = { ...user, _id: uuidv4() };
  return model.create(newUser);
}
  const findAllUsers = () => model.find().lean();
  const findUserById = (userId) => model.findOne({ _id: userId }).lean();
  const findUserByUsername = (username) =>  model.findOne({ username: username }).lean();

  const findUserByCredentials = (username, password) =>  {
    console.log("Finding user by credentials:", username, password);
    return model.findOne({ username, password }).lean();
  };

  const updateUser = (userId, user) => model.updateOne({ _id: userId }, { $set: user });
  const deleteUser = (userId) => model.deleteOne({ _id: userId });
  const findUsersByRole = (role) => model.find({ role: role });
  const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};

  return { createUser, findAllUsers, findUserById, findUserByUsername, findUserByCredentials, updateUser, deleteUser, findUsersByRole, findUsersByPartialName };
}