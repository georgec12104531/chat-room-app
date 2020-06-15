import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import Join from "./components/join/join.component.jsx";
import Chat from "./components/chat/chat.component.jsx";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Join}></Route>
      <Route path="/chat" component={Chat}></Route>
    </BrowserRouter>
  );
}

export default App;
