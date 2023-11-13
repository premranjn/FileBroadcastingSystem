import { Sequelize, DataTypes } from 'sequelize';

import config from '../config/sequelize.js';

const sequelize = new Sequelize(config.database, config.username, config.password, config);

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

const userDetails = sequelize.define("userDetails", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.ENUM,
    values: ['teacher', 'student'],
    allowNull: false
  }
});

const files = sequelize.define("Files", {
   id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true
   },
   className: {
     type: DataTypes.STRING,
     allowNull: false
   },
   pin: {
     type: DataTypes.INTEGER,
     allowNull: false
   },
   link: {
     type: DataTypes.STRING,
     allowNull: false
   }
});

const permissions = sequelize.define("Permissions", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    className: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
});

userDetails.hasMany(permissions, {
  onDelete: 'RESTRICT',
  foreignKey: 'userId'
});
permissions.belongsTo(userDetails, {
  foreignKey: 'userId'
});

sequelize.sync().then(() => {
   console.log('Tables created successfully!');
}).catch((error) => {
   console.error('Unable to create table: ', error);
});

export {files, permissions, userDetails};
