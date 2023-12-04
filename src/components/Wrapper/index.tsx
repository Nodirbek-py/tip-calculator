import * as Styled from "./style";

interface IProps {
    children: React.ReactNode;
}

export default function Wrapper({ children }: IProps) {
    return <Styled.Wrapper>{children}</Styled.Wrapper>;
}
