import styled from "styled-components";
import Input from "./extensible/Input.js";

const Wrapper = styled.div``;

function Search () {
    return (
        <Wrapper>
            <Input label="Search" />
        </Wrapper>
    );
};

export default Search;