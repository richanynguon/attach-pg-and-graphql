module.exports = (sequlize, DataTypes) => {
	const Author = sequlize.define("author", {
		name: {
			type: DataTypes.STRING,
			unique: true
		},
		age: DataTypes.INTEGER
  });
  
  return Author;

};

