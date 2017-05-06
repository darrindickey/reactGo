'use strict';

module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.addColumn(
      'Users',
      'createdAt',
      {
        type: DataTypes.DATE
      }
    );
  },

  down(queryInterface) {
    return queryInterface.removeColumn(
      'Users',
      'createdAt'
    );
  }
};
