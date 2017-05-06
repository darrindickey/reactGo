'use strict';

module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.addColumn(
      'Users',
      'last_name',
      {
        type: DataTypes.STRING,
        defaultValue: ''
      }
    );
  },

  down(queryInterface) {
    return queryInterface.removeColumn(
      'Users',
      'last_name'
    );
  }
};
