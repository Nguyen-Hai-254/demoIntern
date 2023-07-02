'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [{
      email: 'hai@gmail.com',
      password: 'hai',
      firstName: 'Hai',
      lastName: 'Nguyen',
      address: 'KTX khu A',
      phoneNumber: '0147258369'
    }], {});

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
