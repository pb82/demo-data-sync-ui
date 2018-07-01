import React, { Component } from "react";
import { CommonToolbar } from "./common/CommonToolbar"
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ListView, DropdownKebab} from "patternfly-react";

const GET_DATA_SOURCES = gql`
    {
        dataSources {
            id
            name
            type
        }
    }
`;

const DataSources = () => {
    return <Query query={GET_DATA_SOURCES}>
        {({loading, error, data}) => {
            if (loading) return "Loading...";
            if (error) return error.message;

            const items = data.dataSources.map((item, idx) => {
                return (
                    <ListView.Item
                        id={idx.toString()}
                        key={idx}
                        className="ds-list-item"
                        heading={item.type}
                        description="---"
                        leftContent={<span className="list-item-name">{item.name}</span>}
                        actions={
                            <div>
                                <DropdownKebab pullRight>
                                </DropdownKebab>
                            </div>
                        }
                    >
                    </ListView.Item>
                )
            });

            return (
                <div>
                    <ListView>
                        {items}
                    </ListView>
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
