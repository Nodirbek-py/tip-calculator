import * as Styled from "./style";

interface IProps {
    type: "light" | "dark";
    children: React.ReactNode;
}

export default function Container({ type, children }: IProps) {
    switch (type) {
        case "light":
            return <Styled.LightContainer>{children}</Styled.LightContainer>;

        case "dark":
            return <Styled.DarkContainer>{children}</Styled.DarkContainer>;

        default:
            return <Styled.LightContainer>{children}</Styled.LightContainer>;
    }
}
