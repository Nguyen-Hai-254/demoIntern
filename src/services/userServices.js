import db from "../models";
const { Sequelize } = require('sequelize');
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

const getUserWithPost = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let dataRes = {}
            let findUserId = await db.User.findOne({
                where: { id: userId }
            })
            if (!findUserId) {
                dataRes.errCode = 2;
                dataRes.message = 'User not found!';
                dataRes.data = {};
                resolve(dataRes);
            }

            let findPost = await db.User.findAll({
                include: [{ model: db.Post, as: 'post', attributes: ['title', 'content'] }],
                where: { id: userId },
                attributes: ['firstName', 'lastName', 'phoneNumber'],

                raw: true,
                nest: true

            })

            // let findUserId = await db.User.findByPk(userId, {
            //     attributes: ['firstName', 'lastName', 'phoneNumber'],
            //     include: [{ model: db.Post, as: 'post', attributes: ['title', 'content'] }],
            //     raw: true,
            //     nest: true

            // })


            dataRes.errCode = 0;
            dataRes.message = 'OK';
            dataRes.data = findPost;
            resolve(dataRes);
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    insertUser,
    getUsers,
    deleteUser,
    updateUser,
    getUserWithPost
}