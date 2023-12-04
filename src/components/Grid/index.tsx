import Typography from "src/components/Typography";

import * as Styled from "./style";

interface IProps {
    children: React.ReactNode;
    text: string;
}

export default function Grid({ children, text }: IProps) {
    return (
        <Styled.GridWrapper>
            <Typography type='label'>{text}</Typography>
            <Styled.Grid>{children}</Styled.Grid>
        </Styled.GridWrapper>
    );
}
