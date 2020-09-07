module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', { // Mysql에는 users 테이블을 생성한다.
    // id가 기본적으로 들어있다.
    content: {
      type: DataTypes.TEXT, // 문자 제한 없음
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 한글 + 이모티콘 저장
  });
  Post.associate = (db) => {
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }) //thorugh는 중간테이블의 이름을 정해줌
    db.Post.belongsTo(db.Post, {as: 'Retweet', });
  };
  return Post;
}