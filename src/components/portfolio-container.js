import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    render() {
        return (
            <div>
                <h2>playboicarti.</h2>

                <PortfolioItem />
            </div>
        );
    }
}