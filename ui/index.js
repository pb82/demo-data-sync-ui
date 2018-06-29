import React from "react";
import ReactDOM from "react-dom";
import { Masthead } from "patternfly-react";

const Index = () => {
    return <Masthead
        iconImg="img/logo.png"
        title="AeroGear Sync"
    >

    </Masthead>;
};

ReactDOM.render(<Index />, document.getElementById("app"));
