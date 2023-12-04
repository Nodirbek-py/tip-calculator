import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    margin-bottom: 28px;
`;
