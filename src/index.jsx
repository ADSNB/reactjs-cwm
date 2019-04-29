import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import ConditionalRender from "./components/conditionalRender";
import JsxObject from "./components/jsxObject";
import MethodBindingThis from "./components/methodBindingThis";
import SetStateAndArguments from "./components/setStateAndArguments";
import Counter from "./components/counter";
import Counters from "./components/counters";

ReactDOM.render(
  // <ConditionalRender />,
  // <JsxObject />,
  // <MethodBindingThis />,
  // <SetStateAndArguments />,
  <Counters />,
  document.getElementById("root")
);
