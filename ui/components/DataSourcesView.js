import React, { Component } from "react";
import { CommonToolbar } from "./common/CommonToolbar"

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
              <div>
                <h1>The Data Sources View</h1>
              </div>
              <CommonToolbar buttons={this.getToolbarButtons()}/>
          </div>
        );
    }
}

export default DataSourcesView;
