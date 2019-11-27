const Sequelize = require("sequelize");

if (process.env.DATABASE_URL) {
	const sequelize = new Sequelize("postgres://SOME_CONNECTION_URL", {
		dialectOptions: {
			ssl: true
    },
    operatorsAliases: {
      $and: Op.and,
      $or: Op.or,
      $eq: Op.eq,
      $gt: Op.gt,
      $lt: Op.lt,
      $lte: Op.lte,
      $like: Op.like
    }
	});
}

const sequelize = new Sequelize("library", "creator", "creator", {
	dialect: "postgres",
	operatorsAliases: false,
});

const models = {
	Authors: sequelize.import("./authors"),
	Books: sequelize.import("./books")
};

Object.keys(models).forEach(modelName => {
	if ("associate" in models[modelName]) {
		models[modelName].associate(models);
	}
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
