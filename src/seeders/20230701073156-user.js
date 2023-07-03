'use strict';
const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Users', [{
            email: 'dat@gmail.com',
            password: 'dat',
            firstName: 'Công Đạt',
            lastName: 'Hoàng',
            address: 'Tân Bình, TP.HCM',
            phoneNumber: '0147258369',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            email: 'nguyen@gmail.com',
            password: 'nguyen',
            firstName: 'Nguyen Hoang',
            lastName: 'Pham',
            address: 'Quận 7, TP. HCM',
            phoneNumber: '0147258369',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
