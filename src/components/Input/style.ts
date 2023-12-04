import styled from "styled-components";

export const Input = styled.input`
    outline: 1px;
    border: none;
    background: #f4f8fa;
    font-size: 24px;
    color: #1b464a;
    width: 100%;
    text-align: right;
    &::placeholder {
        color: #a5b1b2;
    }
    &:focus {
        outline-color: #53958c;
    }
    &:invalid {
        outline-color: #c4725c;
    }
`;

export const InputWrapper = styled.div`
    border-radius: 4px;
    background: #f4f8fa;
    padding: 6px 16px;
    display: flex;
    align-items: center;
    & > img {
        margin-right: 8px;
    }
`;
