require("dotenv").config();
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const models = require("./models");

const port = require("./config").port;

const app = express();

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

models.sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log(`Now listening on ${port}`);
	});
});

