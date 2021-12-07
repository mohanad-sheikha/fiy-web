import React from "react";
import styled from "styled-components";
import AutoCompleteSearch from "../AutoCompleteSearch.js";
import { GlobalStyle } from "../../index.js";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 1rem;
`;

export default function AutoCompleteSearchFixture () {
    const results = [
        {
            sectionName: "Teams",
            items: [
                {
                    name: "Engineering",
                    url: "/teams/engieering"
                }
            ]
        },
        {
            sectionName: "Schemas",
            items: [
                {
                    name: "Marketing Catalog import",
                    description: "Some description",
                    url: "/schemas/schema1"
                }
            ]
        }
    ];

    return (
        <Wrapper>
            <GlobalStyle />
            <AutoCompleteSearch results={ results } />
        </Wrapper>
    );
};