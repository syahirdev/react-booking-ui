import styled from "styled-components";
import backpackImage from "../assets/img.png";
import { Avatar } from "../components/Avatar";
import { VpnKey } from "@mui/icons-material";

export const SignIn = () => {
    return (
        <Container>
            <Content>
                <Avatar>
                    <VpnKey/>
                </Avatar>
                <Title>Hi there!</Title>
                <Subtitle>
                    Sign in to manage your listings and booking
                    requests on Nomad Rental
                </Subtitle>
                <Link>
                    Learn more about our premium subscription
                </Link>

                <Form>
                    <Label>Email address</Label>
                    <Input placeholder="Email"/>

                    <Label>Password</Label>
                    <Input placeholder="Password"/>

                    <Button>Sign in</Button>

                    <Subtitle>
                        Don't have an account?
                        <Link>Sign up now</Link>
                    </Subtitle>
                </Form>
            </Content>
            <Image src={backpackImage}/>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px;
`;

const Title = styled.div`
  font-weight: 500;
  letter-spacing: 1px;
  color: #262626;
`;

const Subtitle = styled.div`
`;

const Link = styled.div`
`;

const Label = styled.label`
`;

const Form = styled.div`
`;

const Input = styled.input`
`;

const Button = styled.button`
`;

const Image = styled.img`
  flex: 3;
`;