'use strict';

module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.addColumn(
      'Users',
      'user_foursquare',
      {
        type: DataTypes.STRING,
        defaultValue: ''
      }
    );
  },

  down(queryInterface) {
    return queryInterface.removeColumn(
      'Users',
      'user_foursquare'
    );
  }
};
