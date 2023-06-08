import React from 'react';
import { Route, Routes } from "react-router";
import './App.scss';
import { routes } from "./routes";

function App() {
  return (
    <div className="pc_main">
      <div className="container">
        <Routes>
          {routes.map((value, index) => (
            <Route {...value} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
