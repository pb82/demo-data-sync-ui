import React from "react";
import ReactDOM from "react-dom";
import { Masthead, Nav, NavItem, TabContent, TabPane, TabContainer } from "patternfly-react";
import DataSourcesView from "./components/DataSourcesView";

const App = () => {
    return (
        <div>
            <Masthead
                iconImg="img/logo.png"
                title="AeroGear Sync"
                navToggle={false}>
            </Masthead>
            <div>
                <TabContainer id="basic-tabs">
                    <div>
                        <Nav bsClass="nav nav-tabs">
                            <NavItem disabled={false}>
                                <div>Data Sources</div>
                            </NavItem>
                        </Nav>
                        <TabContent>
                            <TabPane>
                                <DataSourcesView/>
                            </TabPane>
                        </TabContent>
                    </div>
                </TabContainer>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
