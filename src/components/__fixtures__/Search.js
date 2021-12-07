import React from "react";
import Search from "../Search.js";
import { GlobalStyle } from "../../index.js";

export default function SearchFixture () {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Search />
        </React.Fragment>
    );
};