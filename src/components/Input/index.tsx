import { HTMLAttributes, useState } from "react";

import * as Styled from "./style";
import Typography from "src/components/Typography";

interface IProps extends HTMLAttributes<HTMLInputElement> {
    icon: any;
    text: string;
}

export default function Input({ icon, text, ...rest }: IProps) {
    const [active, setActive] = useState(false);
    return (
        <>
            <Typography type='label'>{text}</Typography>
            <Styled.InputWrapper active={active} onFocus={() => setActive(true)} onBlur={() => setActive(false)}>
                <img src={icon} />
                <Styled.Input {...rest} />
            </Styled.InputWrapper>
        </>
    );
}
