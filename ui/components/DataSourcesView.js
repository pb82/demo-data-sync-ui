import React, { Component } from "react";
import { connect } from "react-redux";
import { dataSourcesFetch } from "../actions";
import { CommonToolbar } from "./common/CommonToolbar"
import _ from "lodash";

class DataSourcesView extends Component {
    componentWillMount() {
        this.props.dataSourcesFetch();
    }

    getToolbarButtons() {
        return [
            {title: "Add new Data Source", cb: this.addDatasource}
        ];
    }

    addDatasource() {
        console.log("add data source clicked");
    }

    render() {
        console.log("=== props");
        console.log(this.props);

        return (
          <div>
              <div>
                <h1>The Data Sources View</h1>
              </div>
              <CommonToolbar buttons={this.getToolbarButtons()}/>
          </div>
        );
    }
}

const mapStateToProps = state => {
    const dataSources = _.map(state.dataSources, (val, uid) => {
        return {...val, uid};
    });

    return { dataSources };
};

export default connect(mapStateToProps, { dataSourcesFetch })(DataSourcesView);
