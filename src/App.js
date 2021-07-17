import React from "react";
import Search from "./Search";
import Header from "./Header";
import Table from "./Table";

function App() {
  return (
    <React.Fragment>
    <Header/>
    <div className="row">
      <div className="col-1"></div>
      <div className="col-3">
        <Search/>
      </div>
      <div className="col-2"></div>
      <div className="col-4 mt-3">
        <Table/>
      </div>
      </div>
    </React.Fragment>
  );
}

export default App;
