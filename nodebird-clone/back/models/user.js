module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // Mysql에는 users 테이블을 생성한다.
    // id가 기본적으로 들어있다.
    email: {
      type: DataTypes.STRING(30), // STRING ,TEXT, BOOLEAN, INTEGER, FLOAT, DATATIME
      allowNull: false, // 필수
      unique: true, // 고유한 값
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false, // 필수
    },
    password: {
      type: DataTypes.STRING(100), // 패스워드 암호화를 위해 길게 잡음
      allowNull: false, // 필수
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci', // 한글 저장
  });
  User.associate = (db) => { // 관계
    db.User.hasMany(db.Post)
    db.User.hasMany(db.Comment)
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' })
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId' })
    // foreignKey는 같은 테이블을 쓸 때 적어준다. 반대편 id를 적는것
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId' })

  };
  return User;
}