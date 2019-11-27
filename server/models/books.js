module.exports = (sequlize, DataTypes) => {
	const Book = sequlize.define("book", {
		name: {
			type: DataTypes.STRING,
			unique: true
		},
		name: DataTypes.STRING
	});
	Book.associate = models => {
		Book.belongsTo(models.Authors, {
			foreignKey: "authorID"
		});
	};
	return Book;
};
