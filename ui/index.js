import React from "react";
import ReactDOM from "react-dom";
import { Masthead, Nav, NavItem, TabContent, TabPane, TabContainer } from "patternfly-react";
import DataSourcesView from "./components/DataSourcesView";
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const App = () => {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
        <Provider store={store}>
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
        </Provider>
    );
};


ReactDOM.render(<App />, document.getElementById("app"));
