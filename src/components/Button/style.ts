import styled from "styled-components";

export const Button = styled.button`
    border: none;
    outline: none;
    height: 48px;
    font-size: 24px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    background: ${(props) =>
        props.type === "reset" ? "#5EBFAE" : props.defaultChecked === true ? "#F4F8FA" : "#1b464a"};
    color: ${(props) => (props.type === "reset" ? "#1B464A" : props.defaultChecked === true ? "#4F6869" : "#fff")};

    &:hover {
        background: #afe5df;
        color: #1b464a;
        transition: background 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    }
    &:disabled {
        background: #2e666c;
        color: #347a62;
    }
`;
