const { buildSchema } = require("graphql")
    , { info } = require("../logger");

const Schema = buildSchema(`
    type Query {
        dataSources: [DataSource]
    },
    type DataSource {
        id: Int
        title: String
    }
`);

function listDataSources() {
    info("listDataSources request");

    return [{
        id: 1,
        title: "best source eva"
    }];
};

const root = {
    dataSources: listDataSources
};

module.exports = { Schema, root };
