'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Secrets', [{
      message: 'The clock rings twice on midnight when the moon is full.',
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Secrets', null, {});
  }
};
