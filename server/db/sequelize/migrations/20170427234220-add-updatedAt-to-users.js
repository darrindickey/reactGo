'use strict';

module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.addColumn(
      'Users',
      'updatedAt',
      {
        type: DataTypes.DATE
      }
    );
  },

  down(queryInterface) {
    return queryInterface.removeColumn(
      'Users',
      'updatedAt'
    );
  }
};
