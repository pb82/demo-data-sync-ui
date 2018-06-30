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

  return (
      <div className="bottom-fixed">
        <Toolbar>{elements}</Toolbar>
      </div>
  )
};

export { CommonToolbar };
