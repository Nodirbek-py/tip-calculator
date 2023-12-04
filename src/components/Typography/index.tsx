import * as Styled from "./style";

interface IProps {
    children: React.ReactNode;
    type?: "label" | "mini" | "large";
}

export default function Typography({ type, children }: IProps) {
    switch (type) {
        case "label":
            return <Styled.Label>{children}</Styled.Label>;
        case "mini":
            return <Styled.Mini>{children}</Styled.Mini>;
        case "large":
            return <Styled.Large>{children}</Styled.Large>;
        default:
            return <Styled.Default>{children}</Styled.Default>;
    }
}
