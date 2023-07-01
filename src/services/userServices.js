import db from "../models";

const insertUser = (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newUser = await db.User.create(userData);
            resolve(newUser);
        } catch (e) {
            reject(e);
        }
    })

}
const getUsers = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const users = await db.User.findAll();
        resolve(users);
      } catch (error) {
        reject(error);
      }
    });
  }
  const deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const deletedUser = await db.User.destroy({ where: { id: userId } });
        resolve(deletedUser);
      } catch (error) {
        reject(error);
      }
    });
  }
  
  const updateUser = (userId, data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const updatedUser = await db.User.update(data, { where: { id: userId } });
        resolve(updatedUser);
      } catch (error) {
        reject(error);
      }
    });
  };

module.exports = {
    insertUser,
    getUsers,
    deleteUser,
    updateUser
}