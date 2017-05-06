'use strict';

module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.addColumn(
      'Users',
      'first_name',
      {
        type: DataTypes.STRING,
        defaultValue: ''
      }
    );
  },

  down(queryInterface) {
    return queryInterface.removeColumn(
      'Users',
      'first_name'
    );
  }
};
