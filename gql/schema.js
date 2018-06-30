const { buildSchema } = require("graphql");

const Schema = buildSchema(`
    type Query {
        dataSources: [DataSource]
    },
    type DataSource {
        id: Int
        title: String
    }
`);

const listDataSources = () => {
    return [{
        id: 1,
        title: "best source eva"
    }];
};

const root = {
    dataSources: listDataSources
};

module.exports = { Schema, root };
