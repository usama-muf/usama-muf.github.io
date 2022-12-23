const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db')


const Posts = sequelize.define('posts', {
    postId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,

    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    description: {
        // type: DataTypes.STRING(1000),
        type: DataTypes.TEXT('long'),
        allowNull: false,

    },
    category: {
        type: Sequelize.STRING,
    },
    likes: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
}
    // sequelize.sync({ force: true }));
);
module.exports = Posts;
// Executing (default): INSERT INTO `posts` (`postId`,`title`,`description`,`category`,`likes`,`createdAt`,`updatedAt`) VALUES (?,?,?,?,?,?,?);
// Executing (default): INSERT INTO `posts` (`postId`,`title`,`description`,`category`,`createdAt`,`updatedAt`) VALUES (?,?,?,?,?,?);
// Executing (default): INSERT INTO `posts` (`postId`,`title`,`description`,`category`,`likes`,`createdAt`,`updatedAt`) VALUES (?,?,?,?,?,?,?);
