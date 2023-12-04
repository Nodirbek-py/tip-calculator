import Logo from "src/assets/images/logo.svg";
import Dollar from "src/assets/images/icon-dollar.svg";
import Person from "src/assets/images/icon-person.svg";

import Container from "src/components/Container";
import Input from "src/components/Input";
import Wrapper from "src/components/Wrapper";
import Grid from "src/components/Grid";
import Button from "src/components/Button";
import Title from "src/components/Title";

import { useHook } from "./useHook";

export default function Home() {
    const { bill, setBill, people, setPeople, tip, setTip, tipAmount, setTipAmount, total, setTotal } = useHook();
    return (
        <Wrapper>
            <img src={Logo} />
            <Container type='light'>
                <div>
                    <Input icon={Dollar} placeholder='0' id='bill' text='Bill' />
                    <Grid text='Select Bill %'>
                        <Button onClick={() => setBill(5)}>5%</Button>
                        <Button onClick={() => setBill(10)}>10%</Button>
                        <Button onClick={() => setBill(15)}>15%</Button>
                        <Button onClick={() => setBill(25)}>25%</Button>
                        <Button onClick={() => setBill(50)}>50%</Button>
                        <Button toggle>Custom</Button>
                    </Grid>
                    <Input
                        icon={Person}
                        placeholder='0'
                        id='bill'
                        text='Number of People'
                        onChange={(e: any) => setPeople(e.target.value)}
                    />
                </div>
                <Container type='dark'>
                    <div>
                        <Title title='Tip Amount' subtitle='/ person' value='24.99' />
                        <Title title='Total' subtitle='/ person' value='24.99' />
                    </div>
                    <Button type='reset' disabled>
                        Reset
                    </Button>
                </Container>
            </Container>
        </Wrapper>
    );
}
