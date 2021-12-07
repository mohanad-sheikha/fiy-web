import React from "react";
import styled from "styled-components";

const Title = styled.h5`
    margin: 0 0.75rem 0.25rem 0.75rem;
    color: var(--fiy-color_weak);
    font-weight: normal;
`;
const Result = styled.a`
    background-color: rgb(245, 245, 245);
    padding: 1rem 0.75rem;
    text-decoration: none;
    display: block;
    font-size: 14px;
`;
const Section = styled.div`
`;
const Wrapper = styled.div`
    min-height: 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    ${ Section }:not(:last-child) {
        border-bottom: var(--fiy-border);
    }
`;

export default function AutoCompleteResults ({ results }) {
    return (
        <Wrapper>
            { results.map(result => (
                <Section>
                    <Title>{ result.sectionName }</Title>
                    { result.items.map(item => (
                        <Result href={ item.url }>{ item.name }</Result>
                    ))}
                </Section>
            ))}
        </Wrapper>
    );
};