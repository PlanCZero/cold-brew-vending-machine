import React, { Component } from "react";
import { connect } from "react-redux";


export class PageHeader extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchData();
    }
    render() {
        return (
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
                            Vending Machine
                        </h3>

                    </div>
                </nav>
            </section>

        );
    }
}


const mapStateToProps = state => {
    return { basket: state.basket }
};

export default connect(mapStateToProps)(PageHeader);