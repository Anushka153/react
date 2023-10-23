import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import Timer from "./src/components/star/Timer";

const AppLayout = () => {
  return (
    <div className="app">
      {/* <Header /> */}
      <Body />
      {/* <Timer/> */}
    </div>	  
 )	};


const root = ReactDOM.createRoot(document.getElementById("root"));

	root.render(<AppLayout />);
