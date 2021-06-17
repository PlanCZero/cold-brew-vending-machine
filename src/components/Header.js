import React from "react";
import { connect } from "react-redux";

const PageHeader = (() => (
    <section className={"pt-5 pb-5"}>
        <div className={"container"}>
            <div className={"row justify-content-center"}>
                <div className={"col-md-6 text-center mb-5"}>
                    <h2 className={"heading-section"}>EVERY MATRIX TEST</h2>
                </div>
            </div>
        </div>

        <nav className={"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"}>
            <div className={"container text-light"}>
                <h3 className="">
                    VM: COLD Brew Coffee
                </h3>

            </div>
        </nav>
    </section>
));

export default connect(null, null)(PageHeader);