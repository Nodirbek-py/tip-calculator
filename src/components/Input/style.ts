import styled from "styled-components";

interface IWrapperProps {
    active: boolean;
}

export const Input = styled.input.attrs(({ type }) => ({
    type: type || "number",
}))`
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
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const InputWrapper = styled.div<IWrapperProps>`
    border-radius: 4px;
    background: #f4f8fa;
    padding: 6px 16px;
    display: flex;
    align-items: center;
    & > img {
        margin-right: 8px;
    }
    border: 2px solid;
    border-color: ${(props) => (props.active === true ? "#53968C" : "transparent")};
`;
