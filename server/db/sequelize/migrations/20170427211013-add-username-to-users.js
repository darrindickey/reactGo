'use strict';

module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.addColumn(
      'Users',
      'username',
      {
        type: DataTypes.STRING,
        allowNull: false
      }
    );
  },

  down(queryInterface) {
    return queryInterface.removeColumn(
      'Users',
      'username'
    );
  }
};
