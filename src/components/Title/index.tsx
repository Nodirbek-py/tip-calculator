import Typography from "src/components/Typography";

import * as Styled from "./style";

interface IProps {
    title: string;
    subtitle: string;
    value: string | number;
}

export default function Title({ title, subtitle, value }: IProps) {
    return (
        <Styled.Wrapper>
            <div>
                <Typography>{title}</Typography>
                <Typography type='mini'>{subtitle}</Typography>
            </div>
            <Typography type='large'>${value}</Typography>
        </Styled.Wrapper>
    );
}
