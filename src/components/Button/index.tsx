import { HTMLAttributes } from "react";

import * as Styled from "./style";

interface IProps extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    toggle?: boolean;
    disabled?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
}

export default function Button({ children, toggle, disabled, type, ...rest }: IProps) {
    return (
        <Styled.Button type={type} disabled={disabled} defaultChecked={toggle} {...rest}>
            {children}
        </Styled.Button>
    );
}
