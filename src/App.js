import React, { lazy } from "react";
import "./App.css";

const User = lazy(() => import("./User"));
function App() {
  return <User />;
}

export default App;
