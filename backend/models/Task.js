module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    dueDate: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Pending'
    },
    createdBy: {
      type: DataTypes.STRING,
      defaultValue: 'Admin'
    }
  }, {
    timestamps: true,
    createdAt: 'createdOn',
    updatedAt: 'lastUpdatedOn'
  });

  return Task;
};