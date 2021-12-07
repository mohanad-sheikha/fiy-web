import React from "react";
import styled from "styled-components";
import Input from "./extensible/Input.js";
import AutoCompleteResults from "./AutoCompleteResults.js";

const Wrapper = styled.div`
    width: 100%;
    background-color: var(--fiy-background-color_primary);
    border: var(--fiy-border);
    border-radius: var(--fiy-border-radius);
    box-shadow: var(--fiy-box-shadow);
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: max-content 1fr;
    overflow: hidden;

    @media (min-width: 576px) {
        max-width: 540px;
    }

    @media (max-width: 576px) {
        max-width: 100%;
    }
`;
const StyledInput = styled(Input)`
    padding: 0.75rem;
    background-color: rgb(245, 245, 245);
    text-align: center;
    border-radius: var(--fiy-border-radius);
    margin: 0.5rem;
`;

export default function AutoCompleteSearch ({ results }) {
    return (
        <Wrapper>
            <StyledInput label="Search" />
            { results && <AutoCompleteResults results={ results } /> }
        </Wrapper>
    );
}