import { Sequelize, DataTypes } from 'sequelize';

import config from '../config/sequelize.js';

const sequelize = new Sequelize(config.database, config.username, config.password, config);

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

const files = sequelize.define("Files", {
   id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true
   },
   owner: {
     type: DataTypes.INTEGER,
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
    owner: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
 });

const userDetails = sequelize.define("userDetails", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

sequelize.sync().then(() => {
   console.log('Tables created successfully!');
}).catch((error) => {
   console.error('Unable to create table: ', error);
});

export {files, permissions, userDetails};
