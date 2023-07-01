import userServices from "../services/userServices"
import bcrypt from "bcrypt";

const handleInsertUser = async (req, res) => {
    const { email, password, firstName, lastName, address, phoneNumber, gender } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        address,
        phoneNumber,
        gender,
    };

    try {
        const newUser = await userServices.insertUser(userData);
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({ error});
    }
};

const handleGetUser = async (req, res) => {
    try {
      const users = await userServices.getUsers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: "Failed to get users" });
    }
  };

  const handleDeleteUser = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const deletedUser = await userServices.deleteUser(userId);
      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete user" });
    }
  };
  
  const handleUpdateUser = async (req, res) => {
    const { userId } = req.params;
    const { email, password, firstName, lastName, address, phoneNumber, gender } = req.body;
  
    const userData = {
        email,
        password,
        firstName,
        lastName,
        address,
        phoneNumber,
        gender,
    };
  
    try {
      const updatedUser = await userServices.updateUser(userId, userData);
      const users = await userServices.getUsers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: "Failed to update user" });
    }
  };
  

module.exports = {
    handleInsertUser,
    handleGetUser,
    handleDeleteUser,
    handleUpdateUser
}