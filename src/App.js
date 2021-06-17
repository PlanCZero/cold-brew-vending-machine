import React from "react";
import ProductList from "./components/ProductItems";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header"
const App = (
  () => (
    <section className="container">
      <Header />

      <div className="row">
        <div className="col-sm-9">
          <ProductList />
        </div>
        <div className="col-sm-3">
          <Sidebar />
        </div>
      </div>

    </section>
  )
);

export default App;
