import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    gap: 12px;
    grid-template-columns: 1fr 1fr 1fr;
    @media screen and (max-width: 420px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const GridWrapper = styled.div`
    margin: 24px 0;
`;
