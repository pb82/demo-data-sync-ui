import React, { Component } from "react";
import { CommonToolbar } from "./common/CommonToolbar"
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_DATA_SOURCES = gql`
    {
        dataSources {
            id
            title
        }
    }
`;

const DataSources = () => {
    return <Query query={GET_DATA_SOURCES}>
        {({loading, error, data}) => {
            if (loading) return "Loading...";
            if (error) return error.message;

            return (
                <div>
                </div>
            );
        }}
    </Query>
};

class DataSourcesView extends Component {
    getToolbarButtons() {
        return [
            {title: "Add new Data Source", cb: this.addDatasource}
        ];
    }

    addDatasource() {
        console.log("add data source clicked");
    }

    render() {
        return (
          <div>
              <CommonToolbar buttons={this.getToolbarButtons()}/>
              <div>
                  <DataSources/>
              </div>
          </div>
        );
    }
}


export default DataSourcesView;
