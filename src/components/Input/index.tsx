import { HTMLAttributes } from "react";

import * as Styled from "./style";
import Typography from "src/components/Typography";

interface IProps extends HTMLAttributes<HTMLInputElement> {
    icon: any;
    text: string;
}

export default function Input({ icon, text, ...rest }: IProps) {
    return (
        <>
            <Typography type='label'>{text}</Typography>
            <Styled.InputWrapper>
                <img src={icon} />
                <Styled.Input {...rest} />
            </Styled.InputWrapper>
        </>
    );
}
