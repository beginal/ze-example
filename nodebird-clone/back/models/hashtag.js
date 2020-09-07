module.exports = (sequelize, DataTypes) => {
  const Hasntag = sequelize.define('Hasntag', { // Mysql에는 users 테이블을 생성한다.
    // id가 기본적으로 들어있다.
    content: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 한글 + 이모티콘 저장
  });
  Hasntag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
  };
  return Hasntag;
}