const express_graphql = require("express-graphql")
    , { info } = require("../logger")
    , { Schema, root} = require("./schema");

const GQL_PATH = "graphql";

module.exports = App => {
    App.use(`/${GQL_PATH}`, express_graphql({
        schema: Schema,
        rootValue: root,
        graphiql: false
    }));

    info(`GraphQl server mounted at /${GQL_PATH}`);
};
