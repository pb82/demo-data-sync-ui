import React from "react";
import { Toolbar, Button } from "patternfly-react";

const CommonToolbar = ({buttons}) => {
  const elements = buttons.map((button, idx) => {
     return (<Button
         style={{float: "right"}}
         key={idx}
         onClick={button.cb}>
         {button.title}
     </Button>);
  });

  return (<div className="toolbar-container">
            <Toolbar>
                <input type="text" placeholder="Filter by Name" />
                {elements}
            </Toolbar>
  </div>);
};

export { CommonToolbar };
