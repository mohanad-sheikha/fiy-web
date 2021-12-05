import React from "react";
import styled from "styled-components";

const Wrapper = styled.input`
    outline: none;
    border-radius: var(--fiy-border_radius);
    background-color: var(--fiy-background-color_primary);
    color: var(--fiy-color_input);
    border: var(--fiy-border);
    padding: 0.25rem;

    &:hover {
        outline: hover;
    }
`;

const Input = React.forwardRef(({ children, ...rest }, ref) => {
    return (
        <Wrapper ref={ ref } { ...rest } />
    );
});

export default Input;