'use strict';

module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.addColumn(
      'Users',
      'display_name',
      {
        type: DataTypes.STRING,
        defaultValue: ''
      }
    );
  },

  down(queryInterface) {
    return queryInterface.removeColumn(
      'Users',
      'display_name'
    );
  }
};
