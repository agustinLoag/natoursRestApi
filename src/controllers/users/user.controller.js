const getAllUsers = (req, res) => {
  res.status(200).json({ message: "All usersπ±βπ" });
};
const getUserByID = (req, res) => {
  res.status(200).json({ message: "Get a Users by IDπ±βπ" });
};
const createUser = (req, res) => {
  res.status(200).json({ message: "Create user π±βπ" });
};
const updateUser = (req, res) => {
  res.status(200).json({ message: "Update user π±βπ" });
};
const deleteUser = (req, res) => {
  res.status(200).json({ message: "Delete user π±βπ" });
};

module.exports = {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
};
