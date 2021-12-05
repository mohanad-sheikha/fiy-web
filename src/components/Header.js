import styled from "styled-components";
import Container from "./Container.js";

const Wrapper = styled.header`
    background-color: var(--fiy-background-color_primary);
    border-bottom: var(--fiy-border);
`;
const StyledContainer = styled(Container)`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
`;
const Title = styled.h2`
    margin: 0;
`;

function Header() {
    return (
        <Wrapper>
            <StyledContainer>
                <Title>FIY</Title>
            </StyledContainer>
        </Wrapper>
    );
}

export default Header;
