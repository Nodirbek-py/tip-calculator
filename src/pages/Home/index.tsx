import Logo from "src/assets/images/logo.svg";
import Dollar from "src/assets/images/icon-dollar.svg";
import Person from "src/assets/images/icon-person.svg";

import Container from "src/components/Container";
import Input from "src/components/Input";
import Wrapper from "src/components/Wrapper";
import Grid from "src/components/Grid";
import Button from "src/components/Button";
import Title from "src/components/Title";

export default function Home() {
    return (
        <Wrapper>
            <img src={Logo} />
            <Container type='light'>
                <div>
                    <Input icon={Dollar} placeholder='0' id='bill' text='Bill' />
                    <Grid text='Select Bill %'>
                        <Button>5%</Button>
                        <Button>10%</Button>
                        <Button>15%</Button>
                        <Button>25%</Button>
                        <Button>50%</Button>
                        <Button toggle>Custom</Button>
                    </Grid>
                    <Input icon={Person} placeholder='0' id='bill' text='Number of People' />
                </div>
                <Container type='dark'>
                    <div>
                        <Title title='Tip Amount' subtitle='/ person' value='24.99' />
                        <Title title='Tip Amount' subtitle='/ person' value='24.99' />
                    </div>
                    <Button type='reset' disabled>
                        Reset
                    </Button>
                </Container>
            </Container>
        </Wrapper>
    );
}
