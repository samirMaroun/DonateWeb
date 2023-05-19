import logo from "./logo.svg";
import "./App.css";
import Navigate from "./Navigate/Navigate";
import WebFont from "webfontloader";
import React, { useEffect } from "react";
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Hind", "Great Vibes"],
      },
    });
  }, []);
  return <Navigate />;
}

export default App;
