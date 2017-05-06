'use strict';

module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.addColumn(
      'Users',
      'user_facebook',
      {
        type: DataTypes.STRING,
        defaultValue: ''
      }
    );
  },

  down(queryInterface) {
    return queryInterface.removeColumn(
      'Users',
      'user_facebook'
    );
  }
};
