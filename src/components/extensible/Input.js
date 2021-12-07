import React from "react";
import styled from "styled-components";

const Wrapper = styled.input`
    outline: none;
    border-radius: var(--fiy-border-radius);
    background-color: var(--fiy-background-color_primary);
    color: var(--fiy-color_weak);
    border: var(--fiy-border);
    padding: 0.5rem;
    font-size: 0.875rem;
    box-shadow: var(--fiy-box-shadow_focus-x-offset)
                var(--fiy-box-shadow_focus-y-offset)
                var(--fiy-box-shadow_focus-blur)
                var(--fiy-box-shadow_focus-size) transparent;
    transition-duration: var(--fiy-transition-duration);
    transition-property: box-shadow, background-color, color;

    &:hover {
        outline: none;
    }

    &:disabled {
        background-color: hsl(0, 0%, 95%);
    }

    &:focus {
        box-shadow: var(--fiy-box-shadow_focus);
    }
`;

const Input = React.forwardRef(({ children, label, ...rest }, ref) => {
    return (
        <Wrapper ref={ ref } { ...rest } placeholder={ label } />
    );
});

export default Input;