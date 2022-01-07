module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.associate = (models) => {
    // cascade will delete the associated post/ profile with the user
    User.hasMany(models.Post, {
      onDelete: "cascade",
    });
    User.hasOne(models.Profile, {
      onDelete: "cascade",
    });
  };

  return User;
};
